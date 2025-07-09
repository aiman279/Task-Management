
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";

interface DashboardStatsProps {
  totalTasks: number;
  completedTasks: number;
  pendingTasks: number;
}

const DashboardStats = ({ totalTasks, completedTasks, pendingTasks }: DashboardStatsProps) => {
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <Card className="bg-white/90 backdrop-blur-sm border-rose-100 shadow-lg rounded-2xl">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
              <AlertCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Tasks</p>
              <p className="text-2xl font-semibold text-gray-800">{totalTasks}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/90 backdrop-blur-sm border-rose-100 shadow-lg rounded-2xl">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-2xl font-semibold text-gray-800">{completedTasks}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/90 backdrop-blur-sm border-rose-100 shadow-lg rounded-2xl">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-2xl font-semibold text-gray-800">{pendingTasks}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/90 backdrop-blur-sm border-rose-100 shadow-lg rounded-2xl">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">%</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Completion</p>
              <p className="text-2xl font-semibold text-gray-800">{completionRate}%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
