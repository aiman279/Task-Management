// FILEPATH: src/components/AuthStatus.tsx
import { useAuth } from "@/hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";

/**
 * Component to display authentication status and provide logout functionality.
 */
export function AuthStatus() {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) return <div>Please log in.</div>;

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div>
      <p>Welcome, {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}