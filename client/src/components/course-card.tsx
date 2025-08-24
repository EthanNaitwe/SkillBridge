import { type Course } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users } from "lucide-react";
import { mockMentors } from "@/lib/mock-data";

interface CourseCardProps {
  course: Course;
  onClick?: () => void;
}

export default function CourseCard({ course, onClick }: CourseCardProps) {
  const mentor = mockMentors.find(m => m.id === course.mentorId);
  
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "frontend":
        return "bg-secondary/10 text-secondary";
      case "backend":
        return "bg-success/10 text-success";
      case "mobile":
        return "bg-blue-100 text-blue-700";
      case "devops":
        return "bg-orange-100 text-orange-700";
      case "data science":
        return "bg-purple-100 text-purple-700";
      case "full stack":
        return "bg-indigo-100 text-indigo-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1" 
      onClick={onClick}
      data-testid={`card-course-${course.id}`}
    >
      <div className="relative">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge 
            className={`${getCategoryColor(course.category)} font-medium`}
            data-testid={`badge-category-${course.id}`}
          >
            {course.category}
          </Badge>
          <span className="text-sm text-gray-500 capitalize" data-testid={`text-level-${course.id}`}>
            {course.level}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-charcoal mb-2" data-testid={`text-title-${course.id}`}>
          {course.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2" data-testid={`text-description-${course.id}`}>
          {course.description}
        </p>

        {mentor && (
          <div className="flex items-center mb-4">
            <img 
              src={mentor.avatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50"} 
              alt={`${mentor.firstName} ${mentor.lastName}`}
              className="w-10 h-10 rounded-full mr-3"
              data-testid={`img-mentor-${course.id}`}
            />
            <div>
              <p className="font-medium text-charcoal text-sm" data-testid={`text-mentor-name-${course.id}`}>
                {mentor.firstName} {mentor.lastName}
              </p>
              <p className="text-sm text-gray-500" data-testid={`text-mentor-title-${course.id}`}>
                {mentor.bio?.split(' ').slice(0, 3).join(' ')}
              </p>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span data-testid={`text-duration-${course.id}`}>{course.duration} hours</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span data-testid={`text-students-${course.id}`}>{course.students?.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
