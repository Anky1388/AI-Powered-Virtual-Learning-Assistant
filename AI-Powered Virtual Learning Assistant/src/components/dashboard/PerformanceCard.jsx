/*
  Reusable Performance Card Component
  Displays subject performance with visual status
*/

export default function PerformanceCard({ subject, score, status }) {
  // Color configuration based on performance status
  const statusStyles = {
    Good: "bg-green-100 text-green-700",
    Average: "bg-yellow-100 text-yellow-700",
    Weak: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-5 border">
      
      {/* Subject Name */}
      <h3 className="text-lg font-semibold text-gray-800">
        {subject}
      </h3>

      {/* Score */}
      <p className="text-3xl font-bold mt-3">
        {score}
      </p>

      {/* Performance Status */}
      <span
        className={`inline-block mt-4 px-3 py-1 text-sm rounded-full font-medium
        ${statusStyles[status]}`}
      >
        {status}
      </span>
    </div>
  );
}
