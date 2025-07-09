
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

interface RegisterFormProps {
  onToggleMode: () => void;
  onRegister: (name: string, email: string, password: string) => void;
}

const RegisterForm = ({ onToggleMode, onRegister }: RegisterFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    onRegister(name, email, password);
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white/90 backdrop-blur-sm border-rose-100 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-light text-gray-800">Create Account</CardTitle>
        <p className="text-gray-600">Join us to organize your tasks ✨</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700">Full Name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-rose-200 focus:border-rose-400 rounded-xl"
              required
            />
          </div>
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
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-gray-700">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border-rose-200 focus:border-rose-400 rounded-xl"
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white rounded-xl"
          >
            Create Account
          </Button>
        </form>
        <div className="text-center">
          <button
            onClick={onToggleMode}
            className="text-rose-600 hover:text-rose-700 text-sm"
          >
            Already have an account? Sign in
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
