import { useState } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import MentorCard from "@/components/mentor-card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import { mockMentors } from "@/lib/mock-data";

export default function Mentors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("all");
  const [selectedSkill, setSelectedSkill] = useState("all");

  const filteredMentors = mockMentors.filter(mentor => {
    const matchesSearch = 
      mentor.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.bio?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.company?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesExperience = selectedExperience === "all" || 
      (selectedExperience === "junior" && parseInt(mentor.experience || "0") < 5) ||
      (selectedExperience === "mid" && parseInt(mentor.experience || "0") >= 5 && parseInt(mentor.experience || "0") < 10) ||
      (selectedExperience === "senior" && parseInt(mentor.experience || "0") >= 10);
    
    const matchesSkill = selectedSkill === "all" || 
      mentor.skills?.some(skill => skill.toLowerCase().includes(selectedSkill.toLowerCase()));
    
    return matchesSearch && matchesExperience && matchesSkill;
  });

  // Get all unique skills for filter
  const allSkills = Array.from(new Set(mockMentors.flatMap(mentor => mentor.skills || [])));

  return (
    <div className="min-h-screen bg-lightgray">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-charcoal mb-4" data-testid="text-page-title">
              Find Your Perfect Mentor
            </h1>
            <p className="text-xl text-gray-600" data-testid="text-page-subtitle">
              Connect with experienced developers from top tech companies
            </p>
          </div>

          {/* Search and Filter Bar */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    type="text" 
                    placeholder="Search mentors by name, company, or expertise..." 
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    data-testid="input-search-mentors"
                  />
                </div>
                <div className="flex gap-3">
                  <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                    <SelectTrigger className="w-48" data-testid="select-experience">
                      <SelectValue placeholder="Experience Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Experience</SelectItem>
                      <SelectItem value="junior">Junior (1-4 years)</SelectItem>
                      <SelectItem value="mid">Mid-level (5-9 years)</SelectItem>
                      <SelectItem value="senior">Senior (10+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={selectedSkill} onValueChange={setSelectedSkill}>
                    <SelectTrigger className="w-40" data-testid="select-skill">
                      <SelectValue placeholder="Skills" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Skills</SelectItem>
                      {allSkills.map(skill => (
                        <SelectItem key={skill} value={skill.toLowerCase()}>
                          {skill}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600" data-testid="text-results-count">
              Showing {filteredMentors.length} mentors
            </p>
          </div>
        </div>
      </section>

      {/* Popular Skills */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-charcoal mb-4" data-testid="text-popular-skills">
            Popular Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {allSkills.slice(0, 12).map(skill => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
                onClick={() => setSelectedSkill(skill.toLowerCase())}
                data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredMentors.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMentors.map((mentor) => (
                <MentorCard 
                  key={mentor.id} 
                  mentor={mentor} 
                  onViewProfile={() => console.log("View mentor profile:", mentor.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <Filter className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2" data-testid="text-no-results">
                  No mentors found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search terms or filters to find the mentors you're looking for.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Mentors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4" data-testid="text-why-choose-title">
              Why Choose Our Mentors?
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-why-choose-subtitle">
              Learn from the best in the industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Badge className="h-8 w-8 bg-primary text-white">✓</Badge>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2" data-testid="text-feature-1">
                Vetted Professionals
              </h3>
              <p className="text-gray-600">
                All mentors are thoroughly reviewed and work at top tech companies
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Badge className="h-8 w-8 bg-secondary text-white">⭐</Badge>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2" data-testid="text-feature-2">
                Personalized Learning
              </h3>
              <p className="text-gray-600">
                Get customized guidance tailored to your specific goals and skill level
              </p>
            </div>

            <div className="text-center">
              <div className="bg-success/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Badge className="h-8 w-8 bg-success text-white">🚀</Badge>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2" data-testid="text-feature-3">
                Career Growth
              </h3>
              <p className="text-gray-600">
                Accelerate your career with insider knowledge and industry insights
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
