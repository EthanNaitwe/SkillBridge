import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Video, 
  Calendar as CalendarIcon, 
  Clock, 
  Users, 
  Plus,
  Phone,
  PhoneOff,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  Monitor,
  Settings,
  MessageCircle,
  MoreVertical,
  UserPlus,
  Copy,
  ExternalLink,
  Play,
  Square
} from "lucide-react";

const sessionSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  date: z.date(),
  time: z.string(),
  duration: z.number().min(15, "Minimum 15 minutes"),
  attendees: z.array(z.string()).optional(),
});

type SessionForm = z.infer<typeof sessionSchema>;

interface Session {
  id: string;
  title: string;
  description?: string;
  date: Date;
  time: string;
  duration: number;
  attendees: string[];
  status: "scheduled" | "ongoing" | "completed";
  meetingUrl?: string;
}

export default function Conferencing() {
  const [activeTab, setActiveTab] = useState("schedule");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [isInMeeting, setIsInMeeting] = useState(false);
  const [meetingSettings, setMeetingSettings] = useState({
    camera: true,
    microphone: true,
    screenShare: false,
  });

  // Mock data for sessions
  const [sessions] = useState<Session[]>([
    {
      id: "1",
      title: "React Hooks Deep Dive",
      description: "Advanced concepts in React Hooks with practical examples",
      date: new Date(),
      time: "14:00",
      duration: 60,
      attendees: ["student1@example.com", "student2@example.com"],
      status: "scheduled",
      meetingUrl: "https://meet.devmentor.com/react-hooks-123"
    },
    {
      id: "2", 
      title: "Python Data Structures Q&A",
      description: "Open discussion about Python data structures",
      date: new Date(Date.now() + 24 * 60 * 60 * 1000),
      time: "10:00",
      duration: 45,
      attendees: ["student3@example.com", "student4@example.com", "student5@example.com"],
      status: "scheduled",
      meetingUrl: "https://meet.devmentor.com/python-ds-456"
    }
  ]);

  const form = useForm<SessionForm>({
    resolver: zodResolver(sessionSchema),
    defaultValues: {
      title: "",
      description: "",
      date: new Date(),
      time: "",
      duration: 60,
      attendees: [],
    },
  });

  const onSubmit = (data: SessionForm) => {
    console.log("Session data:", data);
    // Here you would create the session
  };

  const joinMeeting = () => {
    setIsInMeeting(true);
  };

  const leaveMeeting = () => {
    setIsInMeeting(false);
  };

  const toggleSetting = (setting: keyof typeof meetingSettings) => {
    setMeetingSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const upcomingSessions = sessions.filter(s => s.status === "scheduled");
  const todaySessions = sessions.filter(s => 
    s.date.toDateString() === new Date().toDateString() && s.status === "scheduled"
  );

  return (
    <div className="min-h-screen bg-lightgray">
      <Navbar />
      
      {/* Header */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-charcoal mb-4" data-testid="text-page-title">
              Video Conferencing
            </h1>
            <p className="text-xl text-gray-600" data-testid="text-page-subtitle">
              Host and join online mentoring sessions with video calls
            </p>
          </div>
        </div>
      </section>

      {isInMeeting ? (
        /* Meeting Interface */
        <section className="py-8 bg-black text-white min-h-[80vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            {/* Meeting Room */}
            <div className="grid lg:grid-cols-4 gap-6 h-full">
              
              {/* Main Video Area */}
              <div className="lg:col-span-3 space-y-4">
                <div className="bg-gray-900 rounded-lg h-96 flex items-center justify-center relative">
                  <div className="text-center">
                    <Camera className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-400">Your camera is {meetingSettings.camera ? 'on' : 'off'}</p>
                  </div>
                  
                  {/* Meeting Title */}
                  <div className="absolute top-4 left-4">
                    <h3 className="text-lg font-semibold" data-testid="text-meeting-title">
                      React Hooks Deep Dive
                    </h3>
                    <div className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      Recording
                    </div>
                  </div>

                  {/* Meeting Time */}
                  <div className="absolute top-4 right-4 text-sm text-gray-400">
                    <span data-testid="text-meeting-time">45:32</span>
                  </div>
                </div>

                {/* Participant Videos */}
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((participant) => (
                    <div key={participant} className="bg-gray-900 rounded-lg h-32 flex items-center justify-center relative">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold mx-auto mb-2">
                          S{participant}
                        </div>
                        <p className="text-sm text-gray-400">Student {participant}</p>
                      </div>
                      <div className="absolute bottom-2 left-2">
                        <Mic className="h-4 w-4 text-green-500" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Meeting Controls */}
                <div className="flex justify-center space-x-4 py-4">
                  <Button
                    variant={meetingSettings.microphone ? "default" : "destructive"}
                    size="lg"
                    onClick={() => toggleSetting('microphone')}
                    className="rounded-full w-14 h-14"
                    data-testid="button-toggle-mic"
                  >
                    {meetingSettings.microphone ? <Mic className="h-6 w-6" /> : <MicOff className="h-6 w-6" />}
                  </Button>
                  
                  <Button
                    variant={meetingSettings.camera ? "default" : "destructive"}
                    size="lg"
                    onClick={() => toggleSetting('camera')}
                    className="rounded-full w-14 h-14"
                    data-testid="button-toggle-camera"
                  >
                    {meetingSettings.camera ? <Camera className="h-6 w-6" /> : <CameraOff className="h-6 w-6" />}
                  </Button>
                  
                  <Button
                    variant={meetingSettings.screenShare ? "secondary" : "outline"}
                    size="lg"
                    onClick={() => toggleSetting('screenShare')}
                    className="rounded-full w-14 h-14"
                    data-testid="button-screen-share"
                  >
                    <Monitor className="h-6 w-6" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full w-14 h-14"
                    data-testid="button-settings"
                  >
                    <Settings className="h-6 w-6" />
                  </Button>
                  
                  <Button
                    variant="destructive"
                    size="lg"
                    onClick={leaveMeeting}
                    className="rounded-full w-14 h-14"
                    data-testid="button-leave-meeting"
                  >
                    <PhoneOff className="h-6 w-6" />
                  </Button>
                </div>
              </div>

              {/* Chat Sidebar */}
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold">Chat</h4>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                  <div className="text-sm">
                    <span className="font-medium text-primary">John (Mentor)</span>
                    <p className="text-gray-300">Welcome everyone! Let's start with hooks basics.</p>
                    <span className="text-xs text-gray-500">2:34 PM</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-secondary">Student1</span>
                    <p className="text-gray-300">Should we start with useState?</p>
                    <span className="text-xs text-gray-500">2:35 PM</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Type a message..."
                    className="bg-gray-700 border-gray-600 text-white"
                    data-testid="input-chat-message"
                  />
                  <Button size="sm" data-testid="button-send-chat">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* Conference Dashboard */
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="schedule" data-testid="tab-schedule">Schedule</TabsTrigger>
                <TabsTrigger value="sessions" data-testid="tab-sessions">My Sessions</TabsTrigger>
                <TabsTrigger value="join" data-testid="tab-join">Join Meeting</TabsTrigger>
                <TabsTrigger value="history" data-testid="tab-history">History</TabsTrigger>
              </TabsList>

              {/* Schedule New Session */}
              <TabsContent value="schedule" className="space-y-6">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <CalendarIcon className="h-5 w-5 mr-2" />
                          Schedule New Session
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Form {...form}>
                          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                              control={form.control}
                              name="title"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Session Title</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="Enter session title"
                                      {...field}
                                      data-testid="input-session-title"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="description"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Description (Optional)</FormLabel>
                                  <FormControl>
                                    <Textarea 
                                      placeholder="What will you cover in this session?"
                                      {...field}
                                      data-testid="textarea-session-description"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <div className="grid md:grid-cols-2 gap-4">
                              <FormField
                                control={form.control}
                                name="time"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Time</FormLabel>
                                    <FormControl>
                                      <Input 
                                        type="time"
                                        {...field}
                                        data-testid="input-session-time"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <FormField
                                control={form.control}
                                name="duration"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Duration (minutes)</FormLabel>
                                    <Select onValueChange={(value) => field.onChange(parseInt(value))}>
                                      <FormControl>
                                        <SelectTrigger data-testid="select-duration">
                                          <SelectValue placeholder="Select duration" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        <SelectItem value="15">15 minutes</SelectItem>
                                        <SelectItem value="30">30 minutes</SelectItem>
                                        <SelectItem value="45">45 minutes</SelectItem>
                                        <SelectItem value="60">1 hour</SelectItem>
                                        <SelectItem value="90">1.5 hours</SelectItem>
                                        <SelectItem value="120">2 hours</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            <Button type="submit" className="w-full" data-testid="button-schedule-session">
                              <CalendarIcon className="h-4 w-4 mr-2" />
                              Schedule Session
                            </Button>
                          </form>
                        </Form>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Select Date</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          className="rounded-md border"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* My Sessions */}
              <TabsContent value="sessions" className="space-y-6">
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Today's Sessions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {todaySessions.length === 0 ? (
                        <p className="text-gray-500 text-center py-4">No sessions scheduled for today</p>
                      ) : (
                        <div className="space-y-4">
                          {todaySessions.map((session) => (
                            <div key={session.id} className="border rounded-lg p-4 flex items-center justify-between" data-testid={`session-${session.id}`}>
                              <div>
                                <h4 className="font-semibold text-charcoal">{session.title}</h4>
                                <p className="text-sm text-gray-600">{session.description}</p>
                                <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                                  <span className="flex items-center">
                                    <Clock className="h-4 w-4 mr-1" />
                                    {session.time}
                                  </span>
                                  <span className="flex items-center">
                                    <Users className="h-4 w-4 mr-1" />
                                    {session.attendees.length} attendees
                                  </span>
                                  <Badge>{session.status}</Badge>
                                </div>
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm" data-testid={`button-copy-link-${session.id}`}>
                                  <Copy className="h-4 w-4" />
                                </Button>
                                <Button 
                                  onClick={joinMeeting}
                                  className="bg-green-600 hover:bg-green-700"
                                  data-testid={`button-join-${session.id}`}
                                >
                                  <Video className="h-4 w-4 mr-2" />
                                  Join
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Sessions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {upcomingSessions.map((session) => (
                          <div key={session.id} className="border rounded-lg p-4" data-testid={`upcoming-session-${session.id}`}>
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-charcoal">{session.title}</h4>
                              <Button variant="ghost" size="sm">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{session.description}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <span>{session.date.toLocaleDateString()}</span>
                                <span>{session.time}</span>
                                <span>{session.duration} min</span>
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  <UserPlus className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <ExternalLink className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Join Meeting */}
              <TabsContent value="join" className="space-y-6">
                <Card className="max-w-2xl mx-auto">
                  <CardHeader>
                    <CardTitle className="text-center">Join a Meeting</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Meeting ID or URL</label>
                      <div className="flex space-x-2">
                        <Input 
                          placeholder="Enter meeting ID or paste meeting URL"
                          className="flex-1"
                          data-testid="input-meeting-id"
                        />
                        <Button data-testid="button-join-meeting-by-id">
                          <Video className="h-4 w-4 mr-2" />
                          Join
                        </Button>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-gray-600 mb-4">Or</p>
                      <Button 
                        onClick={joinMeeting}
                        size="lg"
                        className="bg-primary text-white hover:bg-primary/90"
                        data-testid="button-start-instant-meeting"
                      >
                        <Video className="h-5 w-5 mr-2" />
                        Start Instant Meeting
                      </Button>
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="font-semibold mb-3">Meeting Settings</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span>Start with camera on</span>
                          <Button
                            variant={meetingSettings.camera ? "default" : "outline"}
                            size="sm"
                            onClick={() => toggleSetting('camera')}
                            data-testid="toggle-camera-setting"
                          >
                            {meetingSettings.camera ? <Camera className="h-4 w-4" /> : <CameraOff className="h-4 w-4" />}
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Start with microphone on</span>
                          <Button
                            variant={meetingSettings.microphone ? "default" : "outline"}
                            size="sm"
                            onClick={() => toggleSetting('microphone')}
                            data-testid="toggle-mic-setting"
                          >
                            {meetingSettings.microphone ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Meeting History */}
              <TabsContent value="history" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Meeting History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((meeting) => (
                        <div key={meeting} className="border rounded-lg p-4" data-testid={`history-meeting-${meeting}`}>
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-charcoal">JavaScript Fundamentals Session</h4>
                              <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                                <span>Dec {25 - meeting}, 2024</span>
                                <span>45 minutes</span>
                                <span>3 participants</span>
                                <Badge variant="secondary">Completed</Badge>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Play className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}