
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogOut, User } from "lucide-react";

const DashboardHeader = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "User";
  const userEmail = localStorage.getItem("userEmail") || "";

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    navigate("/LandingPage");
  };

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-rose-100 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center">
            <User className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-800">Welcome, {userName}!</h2>
            <p className="text-sm text-gray-600">{userEmail}</p>
          </div>
        </div>
        <Button 
          onClick={handleLogout}
          variant="outline"
          size="sm"
          className="border-rose-200 text-rose-600 hover:bg-rose-50 rounded-xl"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>
    </header>
  );
};

export default DashboardHeader;
