
import TaskManager from "@/components/TaskManager";

const Tasks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mb-4 shadow-lg">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl font-light text-gray-800 mb-3">
              Your Tasks
            </h1>
            <p className="text-gray-600 text-lg">
              Organize your day with love ✨
            </p>
          </header>
          <TaskManager />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
