import { type User } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface MentorCardProps {
  mentor: User;
  onViewProfile?: () => void;
}

export default function MentorCard({ mentor, onViewProfile }: MentorCardProps) {
  // Mock rating for display purposes
  const rating = (4.5 + Math.random() * 0.5).toFixed(1);
  const reviews = Math.floor(50 + Math.random() * 200);

  return (
    <Card 
      className="hover:shadow-lg transition-shadow duration-200"
      data-testid={`card-mentor-${mentor.id}`}
    >
      <CardContent className="p-6 text-center">
        <img 
          src={mentor.avatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200"} 
          alt={`${mentor.firstName} ${mentor.lastName}`}
          className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          data-testid={`img-mentor-avatar-${mentor.id}`}
        />
        
        <h3 className="text-xl font-semibold text-charcoal mb-1" data-testid={`text-mentor-name-${mentor.id}`}>
          {mentor.firstName} {mentor.lastName}
        </h3>
        
        <p className="text-primary font-medium mb-2" data-testid={`text-mentor-role-${mentor.id}`}>
          {mentor.bio?.split(' ').slice(0, 4).join(' ')}
        </p>
        
        <p className="text-sm text-gray-600 mb-4" data-testid={`text-mentor-experience-${mentor.id}`}>
          {mentor.company} • {mentor.experience}
        </p>

        <div className="flex justify-center space-x-2 mb-4 flex-wrap gap-1">
          {mentor.skills?.slice(0, 3).map((skill, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs"
              data-testid={`badge-skill-${mentor.id}-${index}`}
            >
              {skill}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
          <Star className="h-4 w-4 text-yellow-400 mr-1 fill-current" />
          <span data-testid={`text-rating-${mentor.id}`}>
            {rating} ({reviews} reviews)
          </span>
        </div>

        <Button 
          onClick={onViewProfile}
          className="w-full bg-primary text-white hover:bg-primary/90"
          data-testid={`button-view-profile-${mentor.id}`}
        >
          View Profile
        </Button>
      </CardContent>
    </Card>
  );
}
