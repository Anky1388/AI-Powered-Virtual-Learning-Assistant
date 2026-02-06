import { createContext, useState } from "react";

/*
  Create Language Context
  This will store the current language (English / Hindi)
*/
export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Global language state
  const [language, setLanguage] = useState("en");

  // Toggle function
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "hi" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
