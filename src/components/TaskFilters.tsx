
import { Button } from "@/components/ui/button";
import type { FilterType } from "@/types/task";

interface TaskFiltersProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const TaskFilters = ({ currentFilter, onFilterChange }: TaskFiltersProps) => {
  const filters: { key: FilterType; label: string }[] = [
    { key: "all", label: "All Tasks" },
    { key: "active", label: "Active" },
    { key: "completed", label: "Completed" },
  ];

  return (
    <div className="flex gap-3">
      {filters.map((filter) => (
        <Button
          key={filter.key}
          variant={currentFilter === filter.key ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange(filter.key)}
          className={
            currentFilter === filter.key
              ? "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full shadow-md"
              : "border-pink-200 text-pink-600 hover:bg-pink-50 rounded-full"
          }
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};

export default TaskFilters;
