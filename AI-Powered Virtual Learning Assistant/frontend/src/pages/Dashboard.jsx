import { useState } from "react";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";
import StudentDashboard from "../components/dashboard/StudentDashboard";
import Chatbot from "../components/chatbot/Chatbot";

/*
  Dashboard Page
  Combines Sidebar, Navbar, StudentDashboard, and Chatbot
*/

export default function Dashboard() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 p-4 relative">
          <StudentDashboard />

          {/* Floating Chatbot Button */}
          <button
            onClick={() => setShowChatbot(!showChatbot)}
            className="fixed bottom-6 right-6 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            AI Chat
          </button>

          {/* Chatbot Popup */}
          {showChatbot && (
            <div className="fixed bottom-20 right-6 w-[90%] sm:w-[400px] h-[500px] bg-white shadow-2xl rounded-xl overflow-hidden z-50">
              <Chatbot />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}


































// import { useContext } from "react";
// import Navbar from "../components/common/Navbar";
// import Sidebar from "../components/common/Sidebar";
// import { LanguageContext } from "../context/LanguageContext";
// import PerformanceCard from "../components/dashboard/PerformanceCard";
// import StudentDashboard from "../components/dashboard/StudentDashboard";

// export default function Dashboard() {
//     const { language } = useContext(LanguageContext);
//   return (
    
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebar />

      

//       <div className="flex-1">
//         <Navbar title="Student Dashboard" />
//         <StudentDashboard />

//         <main className="p-6">
//           {/* Dashboard Content */}
//           <div className="p-6">
//       <h1 className="text-2xl font-bold">
//         {language === "en"
//           ? "Student Dashboard"
//           : "छात्र डैशबोर्ड"}
//       </h1>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
//       <PerformanceCard
//         subject="Mathematics"
//         score="85%"
//         status="Good"
//       />

//       <PerformanceCard
//         subject="Science"
//         score="68%"
//         status="Average"
//       />

//       <PerformanceCard
//         subject="English"
//         score="45%"
//         status="Weak"
//       />
//     </div>
//         </main>
//       </div>
//     </div>
//   );
// }
