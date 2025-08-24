import { Link } from "wouter";
import { Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">DevMentor</h3>
            <p className="text-gray-300 mb-4">
              Connecting senior developers with coding beginners for personalized programming education.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-secondary transition-colors"
                data-testid="link-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-secondary transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-secondary transition-colors"
                data-testid="link-github"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Learning */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Learning</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/courses" data-testid="link-footer-courses">
                  <span className="hover:text-secondary cursor-pointer">Browse Courses</span>
                </Link>
              </li>
              <li>
                <Link href="/mentors" data-testid="link-footer-mentors">
                  <span className="hover:text-secondary cursor-pointer">Find Mentors</span>
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-secondary" data-testid="link-learning-paths">
                  Learning Paths
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary" data-testid="link-certifications">
                  Certifications
                </a>
              </li>
            </ul>
          </div>

          {/* Teaching */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Teaching</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-secondary" data-testid="link-become-mentor">
                  Become a Mentor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary" data-testid="link-create-course">
                  Create Course
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary" data-testid="link-mentor-resources">
                  Mentor Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary" data-testid="link-success-stories">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-secondary" data-testid="link-help-center">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary" data-testid="link-contact">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary" data-testid="link-privacy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary" data-testid="link-terms">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DevMentor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
