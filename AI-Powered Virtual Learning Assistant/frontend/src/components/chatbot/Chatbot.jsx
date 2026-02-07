import { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage.jsx";
import ChatLoader from "./ChatLoader.jsx";
import { sendChatMessage } from "../../services/chatbotService.js";

/*
  Chatbot Component
  Modern AI chat interface for student learning support
*/

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I am your AI learning assistant 👋" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle send message
  const sendMessage = async () => {
    if (!input.trim()) return;
  
    // User message add karo
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: input },
    ]);
  
    const userInput = input;
    setInput("");
    setLoading(true);
  
    try {
      // 🔹 AI backend call
      const aiResponse = await sendChatMessage(userInput, "en");
  
      // 🔹 AI reply add karo
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: aiResponse.text },
      ]);
  
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, AI is not responding right now." },
      ]);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex flex-col h-[80vh] max-w-3xl mx-auto bg-white shadow-lg rounded-xl">

      {/* Header */}
      <div className="bg-blue-600 text-white px-4 py-3 rounded-t-xl font-semibold">
        AI Learning Assistant
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">

      {messages.map((msg, index) => (
  <ChatMessage
    key={index}
    text={msg.text}
    sender={msg.sender}
  />
))}

{/* AI typing loader */}
{loading && <ChatLoader />}

{/* Auto-scroll anchor */}
<div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t p-3 flex gap-2">
        <input
          type="text"
          placeholder="Ask your doubt here..."
          className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>

    </div>
  );
}
