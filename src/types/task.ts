
export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: "low" | "medium" | "high";
  dueDate?: Date;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type TaskPriority = "low" | "medium" | "high";

export type FilterType = "all" | "active" | "completed";