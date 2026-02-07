import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";
import Chatbot from "../components/chatbot/Chatbot";

export default function ChatbotPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar title="AI Chatbot" />
        <div className="p-6">
          <Chatbot />
        </div>
      </div>
    </div>
  );
}
