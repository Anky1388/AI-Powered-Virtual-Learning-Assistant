import { useState } from "react";
import { useAuth } from "../context/AuthContext";
/*
  Login Page Component
  Used for authenticating students/teachers
  Backend-ready (Flask API integration point included)
*/

export default function Login() {
  const { login } = useAuth(); // AuthContext se login function le rahe hain
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
  
    setError("");
  
    try {
      const result = await login(email, password);
  
      if (!result.success) {
        setError(result.message);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Student Login
        </h2>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">
            {error}
          </p>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="student@example.com"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center mt-6">
          AI-Powered Learning Platform for Students
        </p>
      </div>
    </div>
  );
}
