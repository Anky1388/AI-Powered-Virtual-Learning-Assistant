export default function ChatMessage({ message }) {
    const isUser = message.type === "user";
  
    return (
      <div className={`mb-2 ${isUser ? "text-right" : "text-left"}`}>
        <span
          className={`inline-block px-3 py-2 rounded-lg ${
            isUser ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {message.text}
        </span>
      </div>
    );
  }