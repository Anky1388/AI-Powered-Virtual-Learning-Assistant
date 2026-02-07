import PerformanceCard from "./PerformanceCard";

/*
  Student Dashboard Component
  Displays overall progress and subject-wise performance
*/

export default function StudentDashboard() {
  // Dummy performance data (later from MongoDB)
  const performanceData = [
    {
      subject: "Mathematics",
      score: "85%",
      status: "Good",
    },
    {
      subject: "Science",
      score: "68%",
      status: "Average",
    },
    {
      subject: "English",
      score: "45%",
      status: "Weak",
    },
  ];

  return (
    <div className="p-6 space-y-8">

      {/* Welcome Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Welcome back, Student 👋
        </h2>
        <p className="text-gray-600 mt-1">
          Here is a quick overview of your learning progress.
        </p>
      </div>

      {/* Overall Progress */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Overall Progress
        </h3>
        <p className="text-3xl font-bold text-blue-600">
          72%
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Keep learning to improve your performance
        </p>
      </div>

      {/* Performance Cards */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Subject-wise Performance
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {performanceData.map((item, index) => (
            <PerformanceCard
              key={index}
              subject={item.subject}
              score={item.score}
              status={item.status}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
