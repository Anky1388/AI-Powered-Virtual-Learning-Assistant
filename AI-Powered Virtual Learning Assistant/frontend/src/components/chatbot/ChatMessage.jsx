/*
  ChatMessage Component
  Renders a single chat message for user or AI
*/

export default function ChatMessage({ text, sender }) {
  // Determine message alignment and style
  const isUser = sender === "user";

  return (
    <div
      className={`flex mb-2 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`px-4 py-2 rounded-lg max-w-xs text-sm ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
