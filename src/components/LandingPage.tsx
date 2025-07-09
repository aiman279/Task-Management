
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: CheckCircle,
      title: "Simple Task Management",
      description: "Create, organize, and complete tasks with ease"
    },
    {
      icon: Star,
      title: "Priority Setting",
      description: "Set priorities to focus on what matters most"
    },
    {
      icon: Zap,
      title: "Quick Actions",
      description: "Fast and intuitive task operations"
    },
    {
      icon: Users,
      title: "Personal Dashboard",
      description: "Your personalized space to manage everything"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-pink-400 rounded-2xl flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-light text-gray-800">TaskLove</h1>
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={() => navigate("/auth")}
              className="border-rose-200 text-rose-600 hover:bg-rose-50 rounded-xl"
            >
              Sign In
            </Button>
            <Button 
              onClick={() => navigate("/auth")}
              className="bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white rounded-xl"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-rose-400 to-pink-400 rounded-3xl mb-6">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-light text-gray-800 mb-6 leading-tight">
            Organize your tasks<br />
            <span className="text-rose-500">with love</span> ✨
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A simple, beautiful way to manage your daily tasks and boost your productivity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => navigate("/auth")}
              className="bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white rounded-xl px-8"
            >
              Start Organizing
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate("/tasks")}
              className="border-rose-200 text-rose-600 hover:bg-rose-50 rounded-xl px-8"
            >
              Try Demo
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur-sm border-rose-100 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-r from-rose-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/70 backdrop-blur-sm rounded-3xl p-12 border border-rose-100 shadow-lg">
          <h2 className="text-3xl font-light text-gray-800 mb-4">
            Ready to get organized?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Join thousands of users who love managing their tasks with us
          </p>
          <Button 
            size="lg"
            onClick={() => navigate("/auth")}
            className="bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white rounded-xl px-8"
          >
            Get Started Free
          </Button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
