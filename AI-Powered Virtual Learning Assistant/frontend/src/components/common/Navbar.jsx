import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import { toast } from "react-toastify";

export default function Navbar({ title = "Student Dashboard" }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  return (
    <header className="w-full bg-white shadow-sm px-4 md:px-6 py-4 flex items-center justify-between">
      
      <h1 className="text-lg md:text-xl font-semibold text-gray-800">
        {title}
      </h1>

      <div className="flex items-center space-x-4">

        <LanguageToggle />

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
              {user?.email?.charAt(0).toUpperCase() || "S"}
            </div>
            <span className="hidden md:block text-sm text-gray-700">
              {user?.email || "Student"}
            </span>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-md overflow-hidden">

              {/* Admin Link */}
              {user?.role === "admin" && (
                <Link
                  to="/admin"
                  className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  Admin Panel
                </Link>
              )}

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                Logout
              </button>

            </div>
          )}
        </div>

      </div>
    </header>
  );
}