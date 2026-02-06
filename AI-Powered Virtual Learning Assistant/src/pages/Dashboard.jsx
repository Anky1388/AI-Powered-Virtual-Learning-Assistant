import { useContext } from "react";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import { LanguageContext } from "../context/LanguageContext";
import PerformanceCard from "../components/dashboard/PerformanceCard";
import StudentDashboard from "../components/dashboard/StudentDashboard";

export default function Dashboard() {
    const { language } = useContext(LanguageContext);
  return (
    
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      

      <div className="flex-1">
        <Navbar title="Student Dashboard" />
        <StudentDashboard />

        <main className="p-6">
          {/* Dashboard Content */}
          <div className="p-6">
      <h1 className="text-2xl font-bold">
        {language === "en"
          ? "Student Dashboard"
          : "छात्र डैशबोर्ड"}
      </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <PerformanceCard
        subject="Mathematics"
        score="85%"
        status="Good"
      />

      <PerformanceCard
        subject="Science"
        score="68%"
        status="Average"
      />

      <PerformanceCard
        subject="English"
        score="45%"
        status="Weak"
      />
    </div>
        </main>
      </div>
    </div>
  );
}
