import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";
import Timetable from "../components/dashboard/Timetable";

export default function TimetablePage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar title="Timetable" />
        <Timetable />
      </div>
    </div>
  );
}
