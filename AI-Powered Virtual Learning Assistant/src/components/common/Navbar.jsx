import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function Navbar({ title = "Student Dashboard" }) {
  const { lang, toggleLanguage } = useContext(LanguageContext);

  return (
    <header className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      
      {/* Page Title */}
      <h1 className="text-xl font-semibold text-gray-800">
        {title}
      </h1>

      {/* Right Section */}
      <div className="flex items-center space-x-4">

        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="border px-3 py-1 rounded text-sm hover:bg-gray-100"
        >
          {lang === "en" ? "हिंदी" : "English"}
        </button>

        {/* User Profile Placeholder */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
            S
          </div>
          <span className="hidden md:block text-sm text-gray-700">
            Student
          </span>
        </div>

        {/* Logout */}
        <button className="text-sm text-red-600 hover:underline">
          Logout
        </button>

      </div>
    </header>
  );
}
