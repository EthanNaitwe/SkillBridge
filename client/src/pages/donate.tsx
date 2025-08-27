import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, BookOpen, Trophy, Check, CreditCard, Banknote, Smartphone } from "lucide-react";

export default function Donate() {
  const impactStats = [
    { icon: Users, value: "10,000+", label: "Students Supported", color: "text-primary" },
    { icon: BookOpen, value: "500+", label: "Free Courses", color: "text-secondary" },
    { icon: Trophy, value: "2,500+", label: "Certificates Awarded", color: "text-success" },
    { icon: Heart, value: "50+", label: "Countries Reached", color: "text-red-500" },
  ];

  const donationOptions = [
    { amount: 25, description: "Sponsor one student for a month", popular: false },
    { amount: 50, description: "Support mentor training program", popular: false },
    { amount: 100, description: "Fund course development", popular: true },
    { amount: 250, description: "Sponsor a complete learning path", popular: false },
  ];

  const paymentMethods = [
    { icon: CreditCard, name: "Credit/Debit Card", description: "Secure payment via Stripe" },
    { icon: Banknote, name: "Bank Transfer", description: "Direct bank transfer" },
    { icon: Smartphone, name: "PayPal", description: "Quick PayPal payment" },
  ];

  return (
    <div className="min-h-screen bg-lightgray">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 text-red-300" />
          <h1 className="text-5xl font-bold mb-6" data-testid="text-hero-title">
            Support Developer Education
          </h1>
          <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
            Help us make quality programming education accessible to everyone. Your donation directly impacts the lives of aspiring developers worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-secondary text-charcoal hover:bg-cyan-400 px-8 py-4 text-lg font-semibold"
              data-testid="button-donate-now"
            >
              Donate Now
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-4" data-testid="text-impact-title">
              Your Impact
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-impact-subtitle">
              See how donations are transforming lives through education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                  <div className="text-3xl font-bold text-charcoal mb-2" data-testid={`text-stat-value-${index}`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600" data-testid={`text-stat-label-${index}`}>
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-4" data-testid="text-donation-title">
              Choose Your Contribution
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-donation-subtitle">
              Every amount makes a difference in someone's learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {donationOptions.map((option, index) => (
              <Card 
                key={index}
                className={`relative cursor-pointer transition-all hover:shadow-lg ${
                  option.popular ? "ring-2 ring-primary border-primary" : ""
                }`}
                data-testid={`card-donation-${option.amount}`}
              >
                {option.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-charcoal mb-2" data-testid={`text-amount-${index}`}>
                    ${option.amount}
                  </div>
                  <p className="text-gray-600 mb-6" data-testid={`text-description-${index}`}>
                    {option.description}
                  </p>
                  <Button 
                    className={`w-full ${
                      option.popular 
                        ? "bg-primary text-white hover:bg-primary/90" 
                        : "bg-gray-100 text-charcoal hover:bg-gray-200"
                    }`}
                    data-testid={`button-donate-${option.amount}`}
                  >
                    Donate ${option.amount}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Custom Amount */}
          <Card className="mt-8">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-charcoal mb-4" data-testid="text-custom-amount">
                Custom Amount
              </h3>
              <p className="text-gray-600 mb-6">
                Choose your own amount to support our mission
              </p>
              <div className="flex items-center justify-center gap-4 max-w-md mx-auto">
                <span className="text-2xl font-bold text-charcoal">$</span>
                <input 
                  type="number" 
                  placeholder="Enter amount" 
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-center text-xl font-semibold"
                  data-testid="input-custom-amount"
                />
                <Button 
                  className="bg-secondary text-charcoal hover:bg-cyan-400 px-6 py-3"
                  data-testid="button-donate-custom"
                >
                  Donate
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How Donations Help */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-4" data-testid="text-help-title">
              How Your Donation Helps
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-help-subtitle">
              Transparency in how we use every dollar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4" data-testid="text-feature-courses">
                Free Course Access
              </h3>
              <p className="text-gray-600">
                60% of donations fund free courses for students who cannot afford premium education
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4" data-testid="text-feature-mentors">
                Mentor Support
              </h3>
              <p className="text-gray-600">
                25% supports mentor training and compensation for pro bono mentoring sessions
              </p>
            </div>

            <div className="text-center">
              <div className="bg-success/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4" data-testid="text-feature-platform">
                Platform Development
              </h3>
              <p className="text-gray-600">
                15% goes to improving our platform, creating new features, and maintaining quality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4" data-testid="text-payment-title">
              Secure Payment Options
            </h2>
            <p className="text-gray-600" data-testid="text-payment-subtitle">
              Your donation is secure and tax-deductible
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <method.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-charcoal mb-2" data-testid={`text-payment-name-${index}`}>
                    {method.name}
                  </h3>
                  <p className="text-sm text-gray-600" data-testid={`text-payment-desc-${index}`}>
                    {method.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-lg">
              <Check className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-green-800 font-medium" data-testid="text-tax-deductible">
                All donations are tax-deductible
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-4" data-testid="text-testimonials-title">
              Stories of Impact
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-testimonials-subtitle">
              Real stories from students whose lives were changed by your generosity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 italic" data-testid="text-testimonial-1">
                  "Thanks to the scholarship program, I learned React and got my first developer job. I couldn't have afforded the courses otherwise."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b332035c?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50" 
                    alt="Student"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium text-charcoal">Maria Rodriguez</p>
                    <p className="text-sm text-gray-500">Frontend Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 italic" data-testid="text-testimonial-2">
                  "The free mentorship program changed my career trajectory. My mentor helped me land a job at a tech startup."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50" 
                    alt="Student"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium text-charcoal">James Kim</p>
                    <p className="text-sm text-gray-500">Full Stack Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 italic" data-testid="text-testimonial-3">
                  "As a student from a developing country, this platform gave me opportunities I never thought possible."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50" 
                    alt="Student"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium text-charcoal">Priya Patel</p>
                    <p className="text-sm text-gray-500">Backend Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" data-testid="text-cta-title">
            Join Our Mission Today
          </h2>
          <p className="text-xl mb-8 text-purple-100" data-testid="text-cta-subtitle">
            Every donation, no matter the size, brings us closer to a world where quality programming education is accessible to all.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-secondary text-charcoal hover:bg-cyan-400 px-8 py-4 text-lg font-semibold"
              data-testid="button-donate-cta"
            >
              Make a Donation
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
              data-testid="button-monthly-giving"
            >
              Monthly Giving
            </Button>
          </div>

          <p className="mt-6 text-purple-200 text-sm" data-testid="text-nonprofit">
            DevHearts is a registered 501(c)(3) nonprofit organization. Your donation is tax-deductible.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}