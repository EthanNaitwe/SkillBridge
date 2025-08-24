import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import CourseCard from "@/components/course-card";
import MentorCard from "@/components/mentor-card";
import ChatInterface from "@/components/chat-interface";
import ProgressBar from "@/components/progress-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Search, Users, GraduationCap, MessageCircle, Video, Code, Calendar, Trophy, Check, Star, UserPlus, Rocket } from "lucide-react";
import { mockCourses, mockMentors } from "@/lib/mock-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-lightgray">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6" data-testid="text-hero-title">
                Learn Programming from Senior Developers
              </h1>
              <p className="text-xl mb-8 text-purple-100" data-testid="text-hero-subtitle">
                Connect with experienced mentors, master the latest technologies, and accelerate your coding journey with personalized guidance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/signup">
                  <Button 
                    className="bg-secondary text-charcoal hover:bg-cyan-400 px-8 py-4 text-lg font-semibold"
                    data-testid="button-get-started"
                  >
                    Get Started Today
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="border-2 border-white bg-white text-primary hover:bg-gray-100 hover:text-primary px-8 py-4 text-lg font-semibold"
                  data-testid="button-become-mentor"
                >
                  Become a Mentor
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <Users className="text-secondary mr-2 h-5 w-5" />
                  <span data-testid="text-mentor-count">500+ Active Mentors</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="text-secondary mr-2 h-5 w-5" />
                  <span data-testid="text-student-count">10,000+ Students</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Developer workspace with code on screen" 
                className="rounded-xl shadow-2xl"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Discovery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-4" data-testid="text-courses-title">
              Popular Courses
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-courses-subtitle">
              Learn from industry experts and advance your programming skills
            </p>
          </div>

          {/* Search and Filter Bar */}
          <Card className="mb-12">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    type="text" 
                    placeholder="Search courses, technologies, or mentors..." 
                    className="pl-10"
                    data-testid="input-search-courses"
                  />
                </div>
                <div className="flex gap-3">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-48" data-testid="select-category">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="frontend">Frontend</SelectItem>
                      <SelectItem value="backend">Backend</SelectItem>
                      <SelectItem value="mobile">Mobile</SelectItem>
                      <SelectItem value="devops">DevOps</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-40" data-testid="select-level">
                      <SelectValue placeholder="All Levels" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Levels</SelectItem>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Course Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockCourses.map((course) => (
              <CourseCard 
                key={course.id} 
                course={course} 
                onClick={() => console.log("Course selected:", course.id)}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/courses">
              <Button 
                className="bg-primary text-white hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
                data-testid="button-view-all-courses"
              >
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Student Dashboard Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-4" data-testid="text-dashboard-title">
              Your Learning Dashboard
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-dashboard-subtitle">
              Track your progress and stay motivated
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Progress Overview */}
            <Card className="bg-lightgray">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-6" data-testid="text-progress-title">
                  Learning Progress
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-charcoal">React Fundamentals</span>
                      <span className="text-sm text-gray-500">75%</span>
                    </div>
                    <ProgressBar progress={75} color="secondary" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-charcoal">Python for Beginners</span>
                      <span className="text-sm text-gray-500">45%</span>
                    </div>
                    <ProgressBar progress={45} color="success" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-charcoal">JavaScript Advanced</span>
                      <span className="text-sm text-gray-500">20%</span>
                    </div>
                    <ProgressBar progress={20} color="primary" />
                  </div>
                </div>

                <Card className="mt-6">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="bg-success text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                        <Trophy className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-charcoal" data-testid="text-achievement">Great Progress!</p>
                        <p className="text-sm text-gray-500">You're ahead of schedule</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            {/* Upcoming Sessions */}
            <Card className="bg-lightgray">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-6" data-testid="text-sessions-title">
                  Upcoming Sessions
                </h3>
                
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <img 
                          src={mockMentors[0].avatar} 
                          alt="Mentor" 
                          className="w-8 h-8 rounded-full mr-3"
                        />
                        <div>
                          <p className="font-medium text-charcoal text-sm">1:1 with John Smith</p>
                          <p className="text-xs text-gray-500">React Components Deep Dive</p>
                        </div>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>Today, 3:00 PM</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <img 
                          src={mockMentors[1].avatar} 
                          alt="Mentor" 
                          className="w-8 h-8 rounded-full mr-3"
                        />
                        <div>
                          <p className="font-medium text-charcoal text-sm">Group Session</p>
                          <p className="text-xs text-gray-500">Python Data Structures</p>
                        </div>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>Tomorrow, 10:00 AM</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Button 
                  className="w-full mt-4 bg-primary text-white hover:bg-primary/90"
                  data-testid="button-schedule-session"
                >
                  Schedule New Session
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-lightgray">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-6" data-testid="text-activity-title">
                  Recent Activity
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-success text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <Check className="h-3 w-3" />
                    </div>
                    <div>
                      <p className="font-medium text-charcoal text-sm">Completed React Hooks Lesson</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <MessageCircle className="h-3 w-3" />
                    </div>
                    <div>
                      <p className="font-medium text-charcoal text-sm">Received feedback from Sarah</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <Star className="h-3 w-3" />
                    </div>
                    <div>
                      <p className="font-medium text-charcoal text-sm">Earned Python Basics Badge</p>
                      <p className="text-xs text-gray-500">3 days ago</p>
                    </div>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white"
                  data-testid="button-view-all-activity"
                >
                  View All Activity
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Communication Interface Demo */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-4" data-testid="text-communication-title">
              Stay Connected with Your Mentor
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-communication-subtitle">
              Real-time messaging and video calls for effective learning
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Chat Interface */}
            <div>
              <ChatInterface 
                mentorName="John Smith"
                mentorAvatar={mockMentors[0].avatar || ""}
                isOnline={true}
              />
            </div>

            {/* Features List */}
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2" data-testid="text-feature-messaging">
                    Real-time Messaging
                  </h3>
                  <p className="text-gray-600">
                    Instant communication with your mentor for quick questions and feedback
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-success text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <Video className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2" data-testid="text-feature-video">
                    Video Calls
                  </h3>
                  <p className="text-gray-600">
                    Face-to-face sessions for code reviews and detailed explanations
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <Code className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2" data-testid="text-feature-code">
                    Code Sharing
                  </h3>
                  <p className="text-gray-600">
                    Share code snippets and receive real-time feedback on your projects
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2" data-testid="text-feature-scheduling">
                    Flexible Scheduling
                  </h3>
                  <p className="text-gray-600">
                    Book sessions that fit your schedule across different time zones
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Mentors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-4" data-testid="text-mentors-title">
              Learn from Industry Experts
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-mentors-subtitle">
              Our mentors are senior developers from top tech companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockMentors.slice(0, 3).map((mentor) => (
              <MentorCard 
                key={mentor.id} 
                mentor={mentor} 
                onViewProfile={() => console.log("View mentor profile:", mentor.id)}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/mentors">
              <Button 
                className="bg-secondary text-charcoal hover:bg-cyan-400 px-8 py-4 text-lg font-semibold"
                data-testid="button-browse-all-mentors"
              >
                Browse All Mentors
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" data-testid="text-cta-title">
            Ready to Start Your Coding Journey?
          </h2>
          <p className="text-xl mb-8 text-purple-100" data-testid="text-cta-subtitle">
            Join thousands of developers who have accelerated their careers with personalized mentorship
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <UserPlus className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2" data-testid="text-step-1">
                1. Create Profile
              </h3>
              <p className="text-purple-100">Tell us about your goals and current skill level</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2" data-testid="text-step-2">
                2. Find Your Mentor
              </h3>
              <p className="text-purple-100">Browse and connect with the perfect mentor for you</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2" data-testid="text-step-3">
                3. Start Learning
              </h3>
              <p className="text-purple-100">Begin your personalized learning journey</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button 
                className="bg-secondary text-charcoal hover:bg-cyan-400 px-8 py-4 text-lg font-semibold"
                data-testid="button-start-learning"
              >
                Start Learning Today
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-2 border-white bg-white text-primary hover:bg-gray-100 hover:text-primary px-8 py-4 text-lg font-semibold"
              data-testid="button-teach-with-us"
            >
              Teach with Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
