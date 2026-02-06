import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simple client-side validation
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    setError("");

    // Backend integration ready
    const loginData = {
      email,
      password,
    };

    console.log("Login Request:", loginData);

    // Example API call (to be connected with Flask)
    // await axios.post("/api/auth/login", loginData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6">
          EduAI Login
        </h1>

        {/* Error Message */}
        {error && (
          <p className="text-red-600 text-sm mb-4 text-center">
            {error}
          </p>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">

          {/* Email Input */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="student@example.com"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Footer Text */}
        <p className="text-center text-sm text-gray-500 mt-6">
          AI-Powered Learning Assistant
        </p>

      </div>
    </div>
  );
}
