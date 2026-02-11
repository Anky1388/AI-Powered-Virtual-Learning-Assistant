import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="hidden md:block w-64 bg-white shadow-md min-h-screen p-4">
      <nav className="space-y-2">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `block px-4 py-2 rounded ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/timetable"
          className={({ isActive }) =>
            `block px-4 py-2 rounded ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Timetable
        </NavLink>

      </nav>
    </aside>
  );
}
