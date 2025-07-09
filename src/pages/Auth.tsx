
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    // Simple auth simulation - in real app, this would call an API
    console.log("Login:", { email, password });
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userEmail", email);
    navigate("/dashboard");
  };

  const handleRegister = (name: string, email: string, password: string) => {
    // Simple auth simulation - in real app, this would call an API
    console.log("Register:", { name, email, password });
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userName", name);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 flex items-center justify-center p-6">
      <div className="w-full">
        {isLoginMode ? (
          <LoginForm 
            onToggleMode={() => setIsLoginMode(false)}
            onLogin={handleLogin}
          />
        ) : (
          <RegisterForm 
            onToggleMode={() => setIsLoginMode(true)}
            onRegister={handleRegister}
          />
        )}
      </div>
    </div>
  );
};

export default Auth;
