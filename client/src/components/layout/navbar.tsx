import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" data-testid="link-home">
              <h1 className="text-2xl font-bold text-primary cursor-pointer hover:opacity-80">
                DevMentor
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/courses" data-testid="link-courses">
              <span className={`font-medium cursor-pointer ${
                isActive("/courses") ? "text-primary" : "text-charcoal hover:text-primary"
              }`}>
                Courses
              </span>
            </Link>
            <Link href="/mentors" data-testid="link-mentors">
              <span className={`font-medium cursor-pointer ${
                isActive("/mentors") ? "text-primary" : "text-charcoal hover:text-primary"
              }`}>
                Mentors
              </span>
            </Link>
            <Link href="/dashboard" data-testid="link-dashboard">
              <span className={`font-medium cursor-pointer ${
                isActive("/dashboard") ? "text-primary" : "text-charcoal hover:text-primary"
              }`}>
                Dashboard
              </span>
            </Link>
            <Link href="/create-course" data-testid="link-create-course">
              <span className={`font-medium cursor-pointer ${
                isActive("/create-course") ? "text-primary" : "text-charcoal hover:text-primary"
              }`}>
                Create Course
              </span>
            </Link>
            <Link href="/conferencing" data-testid="link-conferencing">
              <span className={`font-medium cursor-pointer ${
                isActive("/conferencing") ? "text-primary" : "text-charcoal hover:text-primary"
              }`}>
                Conferencing
              </span>
            </Link>
            <Link href="/donate" data-testid="link-donate">
              <span className={`font-medium cursor-pointer ${
                isActive("/donate") ? "text-primary" : "text-charcoal hover:text-primary"
              }`}>
                Donate
              </span>
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" data-testid="link-login">
              <Button variant="ghost" className="text-charcoal hover:text-primary font-medium">
                Log In
              </Button>
            </Link>
            <Link href="/signup" data-testid="link-signup">
              <Button className="bg-primary text-white hover:bg-primary/90 font-medium">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              onClick={toggleMobileMenu}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-charcoal" />
              ) : (
                <Menu className="h-6 w-6 text-charcoal" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/courses" data-testid="link-mobile-courses">
                <span className="block text-charcoal hover:text-primary font-medium">
                  Courses
                </span>
              </Link>
              <Link href="/mentors" data-testid="link-mobile-mentors">
                <span className="block text-charcoal hover:text-primary font-medium">
                  Mentors
                </span>
              </Link>
              <Link href="/dashboard" data-testid="link-mobile-dashboard">
                <span className="block text-charcoal hover:text-primary font-medium">
                  Dashboard
                </span>
              </Link>
              <Link href="/create-course" data-testid="link-mobile-create-course">
                <span className="block text-charcoal hover:text-primary font-medium">
                  Create Course
                </span>
              </Link>
              <Link href="/conferencing" data-testid="link-mobile-conferencing">
                <span className="block text-charcoal hover:text-primary font-medium">
                  Conferencing
                </span>
              </Link>
              <Link href="/donate" data-testid="link-mobile-donate">
                <span className="block text-charcoal hover:text-primary font-medium">
                  Donate
                </span>
              </Link>
              <span className="block text-charcoal hover:text-primary font-medium cursor-pointer">
                Community
              </span>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Link href="/login" data-testid="link-mobile-login">
                  <Button variant="ghost" className="w-full text-left justify-start">
                    Log In
                  </Button>
                </Link>
                <Link href="/signup" data-testid="link-mobile-signup">
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
