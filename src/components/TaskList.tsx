
import TaskItem from "./TaskItem";
import type { Task, TaskPriority } from "@/types/task";

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
  onUpdateTask: (id: string, title: string, description: string, priority: TaskPriority, dueDate?: Date) => void;
}

const TaskList = ({ tasks, onToggleTask, onDeleteTask, onUpdateTask }: TaskListProps) => {
  if (tasks.length === 0) {
    return (
      <div className="p-16 text-center text-gray-500">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 flex items-center justify-center">
          <svg className="w-12 h-12 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-medium text-gray-800 mb-2">No tasks found</h3>
        <p className="text-gray-500">Add a task above to get started ✨</p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-pink-100">
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={() => onToggleTask(task.id)}
          onDelete={() => onDeleteTask(task.id)}
          onUpdateTask={onUpdateTask}
          className={`animate-fade-in`}
          style={{ animationDelay: `${index * 50}ms` }}
        />
      ))}
    </div>
  );
};

export default TaskList;
