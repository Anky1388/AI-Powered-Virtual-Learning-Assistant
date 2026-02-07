
import { postRequest } from "./api";
import { API_ENDPOINTS } from "../utils/constants";

/*
  Chatbot Service
  Handles communication with AI chatbot backend
*/

/**
 * Send user message to AI chatbot API
 * @param {string} message - User input message
 * @param {string} language - Selected language (en / hi)
 * @returns {{text: string, confidence: number}}
 */
export const sendChatMessage = async (message, language = "en") => {
  try {
    const response = await postRequest(API_ENDPOINTS.CHAT, {
      message,
      language,
    });

    /*
      Expected backend response format:
      {
        reply: "AI response text",
        confidence: 0.92
      }
    */

    return {
      text: response.reply || "",
      confidence: response.confidence ?? 0,
    };
  } catch (error) {
    console.error("Chatbot Service Error:", error);
    throw error;
  }
};





























// import { postRequest } from "./api";


// /*
//   Chatbot Service
//   Handles communication with AI chatbot backend
// */

// /**
//  * Send user message to AI chatbot API
//  * @param {string} message - User input message
//  * @param {string} language - Selected language (en / hi)
//  * @returns {object} AI response data
//  */
// export const sendChatMessage = async (message, language = "en") => {
//   try {
//     const response = await postRequest("/chat", {
//       message,
//       language,
//     });

//     /*
//       Expected backend response format:
//       {
//         reply: "AI response text",
//         confidence: 0.92
//       }
//     */

//     return {
//       text: response.reply,
//       confidence: response.confidence,
//     };
//   } catch (error) {
//     console.error("Chatbot Service Error:", error);
//     throw error;
//   }
// };
