import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { insertCourseSchema } from "@shared/schema";
import { 
  BookOpen, 
  Video, 
  FileText, 
  Upload, 
  Plus, 
  Edit, 
  Save, 
  Eye,
  Clock,
  Users,
  Star,
  Play,
  PlusCircle,
  Trash2
} from "lucide-react";

const categories = ["Frontend", "Backend", "Mobile", "DevOps", "Data Science", "Full Stack"];
const levels = ["beginner", "intermediate", "advanced"];

interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: number;
  type: "video" | "text" | "quiz";
}

export default function CreateCourse() {
  const [activeTab, setActiveTab] = useState("basic");
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [newLesson, setNewLesson] = useState<Partial<Lesson>>({
    title: "",
    description: "",
    duration: 0,
    type: "video"
  });

  const form = useForm({
    resolver: zodResolver(insertCourseSchema.omit({ mentorId: true })),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      level: "beginner" as const,
      duration: 0,
      thumbnail: "",
      price: 0,
    },
  });

  const addLesson = () => {
    if (newLesson.title && newLesson.description) {
      const lesson: Lesson = {
        id: Math.random().toString(36).substr(2, 9),
        title: newLesson.title || "",
        description: newLesson.description || "",
        duration: newLesson.duration || 0,
        type: newLesson.type || "video"
      };
      setLessons([...lessons, lesson]);
      setNewLesson({ title: "", description: "", duration: 0, type: "video" });
    }
  };

  const removeLesson = (id: string) => {
    setLessons(lessons.filter(lesson => lesson.id !== id));
  };

  const onSubmit = (data: any) => {
    console.log("Course data:", { ...data, lessons });
    // Here you would typically send to API
  };

  const totalDuration = lessons.reduce((total, lesson) => total + lesson.duration, 0);

  return (
    <div className="min-h-screen bg-lightgray">
      <Navbar />
      
      {/* Header */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-charcoal mb-4" data-testid="text-page-title">
              Create Your Course
            </h1>
            <p className="text-xl text-gray-600" data-testid="text-page-subtitle">
              Share your expertise and help students learn programming
            </p>
          </div>
        </div>
      </section>

      {/* Course Creation Form */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="basic" data-testid="tab-basic">Basic Info</TabsTrigger>
                  <TabsTrigger value="content" data-testid="tab-content">Content</TabsTrigger>
                  <TabsTrigger value="pricing" data-testid="tab-pricing">Pricing</TabsTrigger>
                  <TabsTrigger value="preview" data-testid="tab-preview">Preview</TabsTrigger>
                </TabsList>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    
                    {/* Basic Information */}
                    <TabsContent value="basic" className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <BookOpen className="h-5 w-5 mr-2" />
                            Course Details
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Course Title</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Enter course title"
                                    {...field}
                                    data-testid="input-title"
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
                                <FormLabel>Course Description</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Describe what students will learn"
                                    className="min-h-[120px]"
                                    {...field}
                                    data-testid="textarea-description"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="grid md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="category"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Category</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger data-testid="select-category">
                                        <SelectValue placeholder="Select category" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {categories.map(category => (
                                        <SelectItem key={category} value={category}>
                                          {category}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="level"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Difficulty Level</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger data-testid="select-level">
                                        <SelectValue placeholder="Select level" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {levels.map(level => (
                                        <SelectItem key={level} value={level}>
                                          {level.charAt(0).toUpperCase() + level.slice(1)}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="thumbnail"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Course Thumbnail URL</FormLabel>
                                <FormControl>
                                  <div className="flex gap-2">
                                    <Input 
                                      placeholder="Enter thumbnail image URL"
                                      {...field}
                                      data-testid="input-thumbnail"
                                    />
                                    <Button type="button" variant="outline" data-testid="button-upload-thumbnail">
                                      <Upload className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </CardContent>
                      </Card>
                    </TabsContent>

                    {/* Content Creation */}
                    <TabsContent value="content" className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <Video className="h-5 w-5 mr-2" />
                            Course Content
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          {/* Add New Lesson */}
                          <div className="border rounded-lg p-4 mb-6 bg-gray-50">
                            <h4 className="font-semibold mb-4">Add New Lesson</h4>
                            <div className="space-y-4">
                              <div className="grid md:grid-cols-2 gap-4">
                                <Input
                                  placeholder="Lesson title"
                                  value={newLesson.title}
                                  onChange={(e) => setNewLesson({...newLesson, title: e.target.value})}
                                  data-testid="input-lesson-title"
                                />
                                <Select 
                                  value={newLesson.type} 
                                  onValueChange={(value) => setNewLesson({...newLesson, type: value as "video" | "text" | "quiz"})}
                                >
                                  <SelectTrigger data-testid="select-lesson-type">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="video">Video Lesson</SelectItem>
                                    <SelectItem value="text">Text Content</SelectItem>
                                    <SelectItem value="quiz">Quiz</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <Textarea
                                placeholder="Lesson description"
                                value={newLesson.description}
                                onChange={(e) => setNewLesson({...newLesson, description: e.target.value})}
                                data-testid="textarea-lesson-description"
                              />
                              <div className="flex gap-4 items-center">
                                <Input
                                  type="number"
                                  placeholder="Duration (minutes)"
                                  className="max-w-40"
                                  value={newLesson.duration}
                                  onChange={(e) => setNewLesson({...newLesson, duration: parseInt(e.target.value) || 0})}
                                  data-testid="input-lesson-duration"
                                />
                                <Button type="button" onClick={addLesson} data-testid="button-add-lesson">
                                  <PlusCircle className="h-4 w-4 mr-2" />
                                  Add Lesson
                                </Button>
                              </div>
                            </div>
                          </div>

                          {/* Lessons List */}
                          <div className="space-y-3">
                            <h4 className="font-semibold">Course Lessons ({lessons.length})</h4>
                            {lessons.length === 0 ? (
                              <p className="text-gray-500 text-center py-8">No lessons added yet</p>
                            ) : (
                              lessons.map((lesson, index) => (
                                <div key={lesson.id} className="border rounded-lg p-4 flex items-center justify-between" data-testid={`lesson-${index}`}>
                                  <div className="flex items-center space-x-3">
                                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                                      {index + 1}
                                    </div>
                                    <div>
                                      <h5 className="font-medium text-charcoal">{lesson.title}</h5>
                                      <p className="text-sm text-gray-600">{lesson.description}</p>
                                      <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                                        <span className="flex items-center">
                                          <Clock className="h-3 w-3 mr-1" />
                                          {lesson.duration} min
                                        </span>
                                        <Badge variant="secondary" className="text-xs">
                                          {lesson.type}
                                        </Badge>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Button variant="ghost" size="sm" data-testid={`button-edit-lesson-${index}`}>
                                      <Edit className="h-4 w-4" />
                                    </Button>
                                    <Button 
                                      variant="ghost" 
                                      size="sm" 
                                      onClick={() => removeLesson(lesson.id)}
                                      data-testid={`button-delete-lesson-${index}`}
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                              ))
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    {/* Pricing */}
                    <TabsContent value="pricing" className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <Star className="h-5 w-5 mr-2" />
                            Course Pricing
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Course Price</FormLabel>
                                <FormControl>
                                  <div className="flex items-center space-x-2">
                                    <span className="text-2xl font-bold">$</span>
                                    <Input 
                                      type="number"
                                      placeholder="0"
                                      {...field}
                                      onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                      data-testid="input-price"
                                    />
                                    <span className="text-gray-500">USD</span>
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="grid md:grid-cols-3 gap-4 mt-6">
                            <Card className="p-4 text-center border-2 border-dashed">
                              <h4 className="font-semibold text-charcoal mb-2">Free Course</h4>
                              <p className="text-sm text-gray-600">Make your course accessible to everyone</p>
                              <Button 
                                type="button" 
                                variant="outline" 
                                className="mt-3 w-full"
                                onClick={() => form.setValue("price", 0)}
                                data-testid="button-price-free"
                              >
                                Set Free
                              </Button>
                            </Card>
                            
                            <Card className="p-4 text-center border-2 border-dashed">
                              <h4 className="font-semibold text-charcoal mb-2">Premium Course</h4>
                              <p className="text-sm text-gray-600">Charge for premium content</p>
                              <Button 
                                type="button" 
                                variant="outline" 
                                className="mt-3 w-full"
                                onClick={() => form.setValue("price", 4999)}
                                data-testid="button-price-premium"
                              >
                                $49.99
                              </Button>
                            </Card>
                            
                            <Card className="p-4 text-center border-2 border-dashed">
                              <h4 className="font-semibold text-charcoal mb-2">Pro Course</h4>
                              <p className="text-sm text-gray-600">Advanced professional content</p>
                              <Button 
                                type="button" 
                                variant="outline" 
                                className="mt-3 w-full"
                                onClick={() => form.setValue("price", 9999)}
                                data-testid="button-price-pro"
                              >
                                $99.99
                              </Button>
                            </Card>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    {/* Preview */}
                    <TabsContent value="preview" className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <Eye className="h-5 w-5 mr-2" />
                            Course Preview
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="border rounded-lg p-6 bg-white">
                            <div className="flex items-start space-x-4 mb-4">
                              {form.watch("thumbnail") && (
                                <img 
                                  src={form.watch("thumbnail")} 
                                  alt="Course thumbnail" 
                                  className="w-24 h-16 object-cover rounded"
                                />
                              )}
                              <div className="flex-1">
                                <h3 className="text-xl font-semibold text-charcoal mb-2" data-testid="text-preview-title">
                                  {form.watch("title") || "Course Title"}
                                </h3>
                                <p className="text-gray-600 mb-3" data-testid="text-preview-description">
                                  {form.watch("description") || "Course description will appear here"}
                                </p>
                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                  <Badge>{form.watch("category") || "Category"}</Badge>
                                  <span className="flex items-center">
                                    <Clock className="h-4 w-4 mr-1" />
                                    {totalDuration} minutes
                                  </span>
                                  <span className="flex items-center">
                                    <Users className="h-4 w-4 mr-1" />
                                    {lessons.length} lessons
                                  </span>
                                  <span className="font-semibold text-lg">
                                    {form.watch("price") === 0 ? "Free" : `$${(form.watch("price") / 100).toFixed(2)}`}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <div className="flex justify-between pt-6">
                      <Button 
                        type="button" 
                        variant="outline"
                        data-testid="button-save-draft"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Save Draft
                      </Button>
                      
                      <div className="space-x-2">
                        <Button 
                          type="button" 
                          variant="outline"
                          data-testid="button-preview"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Preview
                        </Button>
                        <Button 
                          type="submit"
                          className="bg-primary text-white hover:bg-primary/90"
                          data-testid="button-publish"
                        >
                          <Play className="h-4 w-4 mr-2" />
                          Publish Course
                        </Button>
                      </div>
                    </div>
                  </form>
                </Form>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Course Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Lessons</span>
                    <span className="font-semibold" data-testid="text-lesson-count">{lessons.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Duration</span>
                    <span className="font-semibold" data-testid="text-total-duration">{totalDuration} min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price</span>
                    <span className="font-semibold" data-testid="text-price-display">
                      {form.watch("price") === 0 ? "Free" : `$${(form.watch("price") / 100).toFixed(2)}`}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Publishing Tips */}
              <Card>
                <CardHeader>
                  <CardTitle>Publishing Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      Use clear, descriptive titles and descriptions
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      Include practical examples and exercises
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      Add high-quality video content
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      Structure content in logical progression
                    </li>
                  </ul>
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