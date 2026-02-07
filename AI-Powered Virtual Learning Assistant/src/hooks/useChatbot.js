import { useState } from "react";
import { chatbotService } from "../services/chatbotService";

export const useChatbot = (language = "en") => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Send user message to chatbot
  const sendMessage = async (text) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setError(null);

    try {
      const data = await chatbotService(text, language);

      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: data.reply,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setError("Unable to connect to AI assistant");
    } finally {
      setLoading(false);
    }
  };

  // Clear chat (optional but useful)
  const resetChat = () => {
    setMessages([]);
    setError(null);
  };

  return {
    messages,
    loading,
    error,
    sendMessage,
    resetChat,
  };
};