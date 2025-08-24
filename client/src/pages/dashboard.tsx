import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ProgressBar from "@/components/progress-bar";
import ChatInterface from "@/components/chat-interface";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Trophy, Check, MessageCircle, Star, BookOpen, Users, Target } from "lucide-react";
import { mockMentors, mockCourses } from "@/lib/mock-data";

export default function Dashboard() {
  // Mock enrolled courses with progress
  const enrolledCourses = [
    { ...mockCourses[0], progress: 75, lastAccessed: "2 hours ago" },
    { ...mockCourses[1], progress: 45, lastAccessed: "1 day ago" },
    { ...mockCourses[2], progress: 20, lastAccessed: "3 days ago" },
  ];

  // Mock upcoming sessions
  const upcomingSessions = [
    {
      id: "1",
      mentor: mockMentors[0],
      title: "React Components Deep Dive",
      date: "Today, 3:00 PM",
      duration: 60,
    },
    {
      id: "2", 
      mentor: mockMentors[1],
      title: "Python Data Structures",
      date: "Tomorrow, 10:00 AM",
      duration: 90,
    },
  ];

  // Mock recent activities
  const recentActivities = [
    {
      id: "1",
      type: "completion",
      title: "Completed React Hooks Lesson",
      time: "2 hours ago",
      icon: Check,
      color: "bg-success",
    },
    {
      id: "2",
      type: "feedback",
      title: "Received feedback from Sarah",
      time: "1 day ago", 
      icon: MessageCircle,
      color: "bg-secondary",
    },
    {
      id: "3",
      type: "achievement",
      title: "Earned Python Basics Badge",
      time: "3 days ago",
      icon: Star,
      color: "bg-primary",
    },
  ];

  // Mock stats
  const stats = {
    coursesCompleted: 3,
    hoursLearned: 45,
    currentStreak: 7,
    certificates: 2,
  };

  return (
    <div className="min-h-screen bg-lightgray">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-charcoal mb-2" data-testid="text-dashboard-title">
                Welcome back, Student!
              </h1>
              <p className="text-gray-600" data-testid="text-dashboard-subtitle">
                Continue your learning journey and track your progress
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-primary text-white hover:bg-primary/90" data-testid="button-schedule-session">
                Schedule Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6 text-center">
                <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-charcoal" data-testid="text-courses-completed">
                  {stats.coursesCompleted}
                </div>
                <div className="text-sm text-gray-600">Courses Completed</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-charcoal" data-testid="text-hours-learned">
                  {stats.hoursLearned}
                </div>
                <div className="text-sm text-gray-600">Hours Learned</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="h-8 w-8 text-success mx-auto mb-2" />
                <div className="text-2xl font-bold text-charcoal" data-testid="text-current-streak">
                  {stats.currentStreak}
                </div>
                <div className="text-sm text-gray-600">Day Streak</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Trophy className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-charcoal" data-testid="text-certificates">
                  {stats.certificates}
                </div>
                <div className="text-sm text-gray-600">Certificates</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Dashboard Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Learning Progress */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center" data-testid="text-progress-title">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Current Courses
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {enrolledCourses.map((course) => (
                    <div key={course.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start space-x-3">
                          <img 
                            src={course.thumbnail} 
                            alt={course.title}
                            className="w-16 h-12 object-cover rounded"
                            data-testid={`img-course-${course.id}`}
                          />
                          <div>
                            <h3 className="font-semibold text-charcoal" data-testid={`text-course-title-${course.id}`}>
                              {course.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              Last accessed: {course.lastAccessed}
                            </p>
                          </div>
                        </div>
                        <Badge variant="secondary" data-testid={`badge-progress-${course.id}`}>
                          {course.progress}%
                        </Badge>
                      </div>
                      <ProgressBar progress={course.progress} />
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-gray-500">{course.progress}% complete</span>
                        <Button variant="outline" size="sm" data-testid={`button-continue-${course.id}`}>
                          Continue
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle data-testid="text-activity-title">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-3" data-testid={`activity-${activity.id}`}>
                        <div className={`${activity.color} text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0`}>
                          <activity.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium text-charcoal text-sm" data-testid={`text-activity-title-${activity.id}`}>
                            {activity.title}
                          </p>
                          <p className="text-xs text-gray-500" data-testid={`text-activity-time-${activity.id}`}>
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4" data-testid="button-view-all-activity">
                    View All Activity
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Upcoming Sessions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center" data-testid="text-sessions-title">
                    <Calendar className="h-5 w-5 mr-2" />
                    Upcoming Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="border rounded-lg p-3" data-testid={`session-${session.id}`}>
                      <div className="flex items-center mb-2">
                        <img 
                          src={session.mentor.avatar} 
                          alt={`${session.mentor.firstName} ${session.mentor.lastName}`}
                          className="w-8 h-8 rounded-full mr-3"
                          data-testid={`img-session-mentor-${session.id}`}
                        />
                        <div>
                          <p className="font-medium text-charcoal text-sm" data-testid={`text-session-title-${session.id}`}>
                            {session.title}
                          </p>
                          <p className="text-xs text-gray-500">
                            with {session.mentor.firstName} {session.mentor.lastName}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span data-testid={`text-session-date-${session.id}`}>{session.date}</span>
                      </div>
                    </div>
                  ))}
                  
                  <Button className="w-full bg-primary text-white hover:bg-primary/90" data-testid="button-schedule-new-session">
                    Schedule New Session
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle data-testid="text-quick-actions-title">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" data-testid="button-browse-courses">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Browse Courses
                  </Button>
                  <Button variant="outline" className="w-full justify-start" data-testid="button-find-mentors">
                    <Users className="h-4 w-4 mr-2" />
                    Find Mentors
                  </Button>
                  <Button variant="outline" className="w-full justify-start" data-testid="button-view-certificates">
                    <Trophy className="h-4 w-4 mr-2" />
                    View Certificates
                  </Button>
                </CardContent>
              </Card>

              {/* Achievement */}
              <Card className="bg-gradient-to-r from-success/10 to-success/5 border-success/20">
                <CardContent className="p-6 text-center">
                  <Trophy className="h-12 w-12 text-success mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-2" data-testid="text-achievement-title">
                    Great Progress!
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    You're ahead of schedule on your learning goals
                  </p>
                  <Badge className="bg-success text-white" data-testid="badge-achievement">
                    7-day streak
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
