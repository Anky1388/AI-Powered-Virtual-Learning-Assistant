import { useAuth } from "../context/AuthContext";

export default function AdminDashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-red-600">
          Admin Panel
        </h1>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-700 mb-6">
          Welcome, <strong>{user?.email}</strong>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="bg-blue-500 text-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Total Students</h2>
            <p className="text-2xl mt-2">120</p>
          </div>

          <div className="bg-green-500 text-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Total Courses</h2>
            <p className="text-2xl mt-2">25</p>
          </div>

          <div className="bg-purple-500 text-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Active Sessions</h2>
            <p className="text-2xl mt-2">8</p>
          </div>

        </div>
      </div>

    </div>
  );
}