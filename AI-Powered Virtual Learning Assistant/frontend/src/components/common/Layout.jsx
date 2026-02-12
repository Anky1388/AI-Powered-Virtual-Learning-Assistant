import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Chatbot from "../chatbot/Chatbot";

export default function Layout({ children, title }) {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar title={title} />

        <main className="flex-1 p-4 relative">
          {children}

          {/* Floating Chatbot Button */}
          <button
            onClick={() => setShowChatbot(!showChatbot)}
            className="fixed bottom-6 right-6 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition z-40"
          >
            AI Chat
          </button>

          {/* Chatbot Popup */}
          {showChatbot && (
            <div className="fixed bottom-20 right-6 w-[95%] sm:w-[400px] h-[520px] bg-white shadow-2xl rounded-xl overflow-hidden z-50">
              <Chatbot />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
