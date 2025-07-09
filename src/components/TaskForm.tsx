
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Plus } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import type { TaskPriority } from "@/types/task";

interface TaskFormProps {
  onAddTask: (title: string, priority: TaskPriority, dueDate?: Date) => void;
}

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<TaskPriority>("medium");
  const [dueDate, setDueDate] = useState<Date | undefined>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title.trim(), priority, dueDate);
      setTitle("");
      setPriority("medium");
      setDueDate(undefined);
    }
  };

  const priorityColors = {
    low: "text-green-600",
    medium: "text-yellow-600", 
    high: "text-red-600"
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <Input
            type="text"
            placeholder="What needs to be done?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-lg h-12 border-gray-200 focus:border-blue-400 focus:ring-blue-400"
          />
        </div>
        
        <div className="flex gap-3">
          <Select value={priority} onValueChange={(value: TaskPriority) => setPriority(value)}>
            <SelectTrigger className="w-32 h-12 border-gray-200">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">
                <span className={priorityColors.low}>● Low</span>
              </SelectItem>
              <SelectItem value="medium">
                <span className={priorityColors.medium}>● Medium</span>
              </SelectItem>
              <SelectItem value="high">
                <span className={priorityColors.high}>● High</span>
              </SelectItem>
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "h-12 px-3 border-gray-200 justify-start text-left font-normal",
                  !dueDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="h-4 w-4" />
                {dueDate ? format(dueDate, "MMM dd") : "Due date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={dueDate}
                onSelect={setDueDate}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
                disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
              />
            </PopoverContent>
          </Popover>

          <Button type="submit" className="h-12 px-6 bg-blue-600 hover:bg-blue-700">
            <Plus className="h-5 w-5" />
            <span className="hidden sm:inline ml-1">Add Task</span>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
