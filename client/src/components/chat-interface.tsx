import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Send, Video } from "lucide-react";

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
  isCurrentUser: boolean;
}

interface ChatInterfaceProps {
  mentorName: string;
  mentorAvatar: string;
  isOnline?: boolean;
}

export default function ChatInterface({ mentorName, mentorAvatar, isOnline = true }: ChatInterfaceProps) {
  const [message, setMessage] = useState("");
  const [messages] = useState<Message[]>([
    {
      id: "1",
      senderId: "mentor",
      content: "Great job on completing the React Hooks exercise! I noticed you used useEffect correctly for the API call.",
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      isCurrentUser: false,
    },
    {
      id: "2",
      senderId: "student",
      content: "Thank you! I was confused about the dependency array, but your explanation helped a lot.",
      timestamp: new Date(Date.now() - 28 * 60 * 1000),
      isCurrentUser: true,
    },
    {
      id: "3",
      senderId: "mentor",
      content: "Perfect! For your next challenge, try implementing a custom hook. Here's a helpful resource:",
      timestamp: new Date(Date.now() - 25 * 60 * 1000),
      isCurrentUser: false,
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, this would send the message to the server
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Card className="h-full max-h-96 flex flex-col">
      <CardHeader className="bg-primary text-white p-4 rounded-t-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={mentorAvatar} 
              alt={mentorName}
              className="w-10 h-10 rounded-full mr-3"
              data-testid="img-mentor-avatar"
            />
            <div>
              <h3 className="font-semibold" data-testid="text-mentor-name">{mentorName}</h3>
              <p className="text-sm text-purple-200" data-testid="text-mentor-status">
                {isOnline ? "Online now" : "Last seen recently"}
              </p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-white hover:text-purple-200"
            data-testid="button-video-call"
          >
            <Video className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.isCurrentUser ? "justify-end" : "justify-start"}`}
            data-testid={`message-${msg.id}`}
          >
            {!msg.isCurrentUser && (
              <img 
                src={mentorAvatar} 
                alt={mentorName}
                className="w-8 h-8 rounded-full mr-2 mt-1"
              />
            )}
            <div 
              className={`max-w-xs rounded-lg p-3 ${
                msg.isCurrentUser 
                  ? "bg-primary text-white" 
                  : "bg-gray-100 text-charcoal"
              }`}
            >
              <p className="text-sm" data-testid={`text-message-content-${msg.id}`}>
                {msg.content}
              </p>
              <p 
                className={`text-xs mt-1 ${
                  msg.isCurrentUser ? "text-purple-200" : "text-gray-500"
                }`}
                data-testid={`text-message-time-${msg.id}`}
              >
                {formatTime(msg.timestamp)}
              </p>
            </div>
          </div>
        ))}
      </CardContent>

      <div className="border-t p-4">
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
            data-testid="input-message"
          />
          <Button 
            onClick={handleSendMessage}
            className="bg-primary text-white hover:bg-primary/90"
            data-testid="button-send-message"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
