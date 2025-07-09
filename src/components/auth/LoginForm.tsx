import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

interface LoginFormProps {
  onToggleMode: () => void;
  onLogin: (email: string, password: string) => void;
}

const LoginForm = ({ onToggleMode, onLogin }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  /**
   * Handles form submission to sign in user with Firebase Auth.
   * Navigates to /dashboard on successful login.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin(email, password);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white/90 backdrop-blur-sm border-rose-100 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-light text-gray-800">Welcome Back</CardTitle>
        <p className="text-gray-600">Sign in to manage your tasks ✨</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-rose-200 focus:border-rose-400 rounded-xl"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-rose-200 focus:border-rose-400 rounded-xl"
              required
            />
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white rounded-xl"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </form>
        <div className="text-center">
          <button
            onClick={onToggleMode}
            className="text-rose-600 hover:text-rose-700 text-sm"
          >
            Don't have an account? Sign up
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;