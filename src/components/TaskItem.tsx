import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Edit2, Trash2 } from "lucide-react";
import { format, isToday, isTomorrow, isPast } from "date-fns";
import type { Task, TaskPriority } from "@/types/task";
import { cn } from "@/lib/utils";
import TaskFormDialog from "./TaskFormDialog";

interface TaskItemProps {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
  onUpdateTask: (id: string, title: string, description: string, priority: TaskPriority, dueDate?: Date) => void;
  className?: string;
  style?: React.CSSProperties;
}

const TaskItem = ({ task, onToggle, onDelete, onUpdateTask, className, style }: TaskItemProps) => {
  const handleUpdate = (title: string, description: string, priority: TaskPriority, dueDate?: Date) => {
    onUpdateTask(task.id, title, description, priority, dueDate);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-l-rose-400 bg-rose-50/50";
      case "medium":
        return "border-l-orange-400 bg-orange-50/50";
      case "low":
        return "border-l-emerald-400 bg-emerald-50/50";
      default:
        return "border-l-gray-300 bg-gray-50/50";
    }
  };

  const getPriorityDot = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-rose-500";
      case "medium":
        return "text-orange-500";
      case "low":
        return "text-emerald-500";
      default:
        return "text-gray-400";
    }
  };

  const getDueDateText = (dueDate: Date) => {
    if (isToday(dueDate)) return "Today";
    if (isTomorrow(dueDate)) return "Tomorrow";
    return format(dueDate, "MMM dd");
  };

  const getDueDateColor = (dueDate: Date) => {
    if (isPast(dueDate) && !isToday(dueDate)) return "text-rose-600 bg-rose-100";
    if (isToday(dueDate)) return "text-orange-600 bg-orange-100";
    return "text-gray-600 bg-gray-100";
  };

  return (
    <div 
      className={cn(
        "p-6 border-l-4 transition-all duration-200 hover:shadow-sm group",
        getPriorityColor(task.priority),
        task.completed && "opacity-60",
        className
      )}
      style={style}
    >
      <div className="flex items-start gap-4">
        <Checkbox
          checked={task.completed}
          onCheckedChange={onToggle}
          className="mt-1 data-[state=checked]:bg-pink-500 data-[state=checked]:border-pink-500 rounded-md"
        />
        
        <div className="flex-1 min-w-0">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className={cn(getPriorityDot(task.priority), "text-lg")}>●</span>
              <h3 
                className={cn(
                  "font-medium text-gray-800 text-lg",
                  task.completed && "line-through text-gray-500"
                )}
              >
                {task.title}
              </h3>
            </div>
            
            {task.description && (
              <p className={cn(
                "text-gray-600 text-sm ml-6",
                task.completed && "line-through text-gray-400"
              )}>
                {task.description}
              </p>
            )}
            
            {task.dueDate && (
              <div className="flex items-center gap-2 text-sm ml-6">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className={cn(
                  "px-3 py-1 rounded-full text-xs font-medium",
                  getDueDateColor(task.dueDate)
                )}>
                  {getDueDateText(task.dueDate)}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <TaskFormDialog
            task={task}
            onSubmit={handleUpdate}
            trigger={
              <Button size="sm" variant="ghost" className="h-9 w-9 p-0 rounded-xl hover:bg-pink-100">
                <Edit2 className="h-4 w-4 text-gray-600" />
              </Button>
            }
          />
          <Button 
            size="sm" 
            variant="ghost" 
            onClick={onDelete} 
            className="h-9 w-9 p-0 rounded-xl text-rose-600 hover:text-rose-700 hover:bg-rose-100"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
