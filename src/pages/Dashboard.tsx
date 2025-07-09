
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardStats from "@/components/dashboard/DashboardStats";
import TaskManager from "@/components/TaskManager";
import type { Task } from "@/types/task";

const Dashboard = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/auth");
      return;
    }

    // Load tasks from localStorage
    const savedTasks = localStorage.getItem("userTasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, [navigate]);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("userTasks", JSON.stringify(tasks));
  }, [tasks]);

  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = tasks.filter(task => !task.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      <DashboardHeader />
      
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <DashboardStats 
            totalTasks={tasks.length}
            completedTasks={completedTasks}
            pendingTasks={pendingTasks}
          />
          
          <div className="mb-8">
            <h1 className="text-3xl font-light text-gray-800 mb-2">Task Dashboard</h1>
            <p className="text-gray-600">Manage your tasks with love ✨</p>
          </div>
          
          <TaskManager initialTasks={tasks} onTasksChange={setTasks} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
