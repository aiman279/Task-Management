import { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskFilters from "./TaskFilters";
import type { Task, TaskPriority, FilterType } from "@/types/task";
import { toast } from "sonner";

interface TaskManagerProps {
  initialTasks?: Task[];
  onTasksChange?: (tasks: Task[]) => void;
}

const TaskManager = ({ initialTasks = [], onTasksChange }: TaskManagerProps) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filter, setFilter] = useState<FilterType>("all");

  // Update tasks when initialTasks prop changes
  useEffect(() => {
    setTasks(initialTasks);
  }, [initialTasks]);

  // Notify parent component when tasks change
  useEffect(() => {
    if (onTasksChange) {
      onTasksChange(tasks);
    }
  }, [tasks, onTasksChange]);

  // CREATE - Add new task
  const addTask = (title: string, description: string, priority: TaskPriority, dueDate?: Date) => {
    const now = new Date();
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      priority,
      dueDate,
      completed: false,
      createdAt: now,
      updatedAt: now, // ✅ Added to fix the type error
    };
    setTasks([...tasks, newTask]);
    toast.success("Task created successfully!");
  };

  // READ - Get filtered tasks
  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case "active":
        return !task.completed;
      case "completed":
        return task.completed;
      default:
        return true;
    }
  });

  // UPDATE - Toggle task completion
  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        const updatedTask = { ...task, completed: !task.completed, updatedAt: new Date() };
        toast.success(
          updatedTask.completed
            ? `"${task.title}" marked as completed!`
            : `"${task.title}" marked as active!`
        );
        return updatedTask;
      }
      return task;
    }));
  };

  // UPDATE - Edit task
  const updateTask = (id: string, title: string, description: string, priority: TaskPriority, dueDate?: Date) => {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, title, description, priority, dueDate, updatedAt: new Date() }
        : task
    ));
    toast.success("Task updated successfully!");
  };

  // DELETE - Remove task
  const deleteTask = (id: string) => {
    const taskToDelete = tasks.find(task => task.id === id);
    setTasks(tasks.filter(task => task.id !== id));
    toast.success(`"${taskToDelete?.title}" has been deleted!`);
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="space-y-8">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-pink-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Manage Your Tasks</h2>
            <p className="text-gray-600">Stay organized and productive ✨</p>
          </div>

        </div>
      </div>

      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-100 overflow-hidden">
        <div className="p-8 border-b border-pink-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex items-center gap-4">
              <TaskFilters currentFilter={filter} onFilterChange={setFilter} />
            </div>
            <div className="text-sm text-gray-500 font-medium">
              {completedCount} of {totalCount} tasks completed
            </div>
          </div>
        </div>

        <TaskList
          tasks={filteredTasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
          onUpdateTask={updateTask}
        />
      </div>
    </div>
  );
};

export default TaskManager;
