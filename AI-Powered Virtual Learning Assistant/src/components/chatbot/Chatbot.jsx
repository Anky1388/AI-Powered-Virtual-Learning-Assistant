import { useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatLoader from "./ChatLoader";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    setMessages([...messages, { type: "user", text: input }]);
    setLoading(true);

    // Simulated AI response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { type: "bot", text: "I can help you understand this topic 😊" }
      ]);
      setLoading(false);
    }, 1200);

    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg"
      >
        AI Tutor
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white shadow-xl rounded-xl flex flex-col">
          <div className="p-3 bg-blue-600 text-white rounded-t-xl">
            AI Learning Assistant
          </div>

          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((msg, i) => (
              <ChatMessage key={i} message={msg} />
            ))}
            {loading && <ChatLoader />}
          </div>

          <div className="p-2 border-t flex">
            <input
              className="flex-1 border rounded px-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask your doubt..."
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-blue-600 text-white px-3 rounded"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}