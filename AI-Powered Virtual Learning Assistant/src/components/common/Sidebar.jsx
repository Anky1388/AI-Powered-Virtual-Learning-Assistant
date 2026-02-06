import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-screen w-64 bg-blue-700 text-white
        transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 transition-transform duration-300 z-40`}
      >
        {/* Logo / Title */}
        <div className="p-6 text-2xl font-bold border-b border-blue-600">
          EduAI
          <p className="text-sm font-light">Learning Assistant</p>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          <SidebarLink to="/dashboard" label="Dashboard" />
          <SidebarLink to="/chatbot" label="Chatbot" />
          <SidebarLink to="/timetable" label="Timetable" />
          <SidebarLink to="/logout" label="Logout" />
        </nav>
      </aside>
    </>
  );
}

/* Reusable Sidebar Link */
function SidebarLink({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-4 py-2 rounded transition ${
          isActive
            ? "bg-white text-blue-700 font-semibold"
            : "hover:bg-blue-600"
        }`
      }
    >
      {label}
    </NavLink>
  );
}
