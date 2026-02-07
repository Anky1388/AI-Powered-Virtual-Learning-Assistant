/*
  Global Application Constants
  ----------------------------
  Centralized configuration for the entire app.
  Used across frontend (React) & backend communication.
*/

/* ===========================
   API ENDPOINTS
=========================== */

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
  },

  CHATBOT: {
    CHAT: "/chat",
    HISTORY: "/chat/history",
  },

  STUDENT: {
    DASHBOARD: "/student/dashboard",
    PERFORMANCE: "/student/performance",
    TIMETABLE: "/student/timetable",
  },

  TEACHER: {
    ANALYTICS: "/teacher/analytics",
    STUDENTS: "/teacher/students",
  },
};

/* ===========================
   SUPPORTED LANGUAGES
=========================== */

export const SUPPORTED_LANGUAGES = {
  ENGLISH: {
    code: "en",
    label: "English",
  },
  HINDI: {
    code: "hi",
    label: "हिंदी",
  },
};

/* Default language */
export const DEFAULT_LANGUAGE = SUPPORTED_LANGUAGES.ENGLISH.code;

/* ===========================
   APP-LEVEL CONSTANTS
=========================== */

export const APP_CONFIG = {
  APP_NAME: "AI Virtual Learning Assistant",
  VERSION: "1.0.0",

  CHATBOT: {
    MAX_MESSAGE_LENGTH: 500,
    CONFIDENCE_THRESHOLD: 0.6,
  },

  UI: {
    SIDEBAR_WIDTH: 260,
    MOBILE_BREAKPOINT: 768,
  },
};

/* ===========================
   STORAGE KEYS
=========================== */

export const STORAGE_KEYS = {
  AUTH_TOKEN: "auth_token",
  USER_ROLE: "user_role",
  LANGUAGE: "app_language",
};