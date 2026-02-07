/*
  ChatLoader Component
  Displays animated dots while AI is generating a response
*/

export default function ChatLoader() {
  return (
    <div className="flex items-center space-x-1 px-4 py-2 mb-2">
      <span className="text-sm text-gray-500">AI is typing</span>

      <div className="flex space-x-1">
        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
      </div>
    </div>
  );
}
