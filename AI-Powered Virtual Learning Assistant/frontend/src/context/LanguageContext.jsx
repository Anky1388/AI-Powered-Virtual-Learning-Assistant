import { createContext, useContext, useState } from "react";
import { SUPPORTED_LANGUAGES, APP_CONSTANTS } from "../utils/constants";


/*
  LanguageContext
  Purpose:
  - Manage current language (English / Hindi)
  - Provide toggle function
  - Accessible throughout the app
*/

// 1️ Create Context
const LanguageContext = createContext();

// 2️ Provider Component
export const LanguageProvider = ({ children }) => {
  // Default language: English
  const [language, setLanguage] = useState(APP_CONSTANTS.DEFAULT_LANGUAGE);

  // Toggle between English and Hindi
  const toggleLanguage = () => {
    setLanguage((prev) =>
      prev === SUPPORTED_LANGUAGES.EN
        ? SUPPORTED_LANGUAGES.HI
        : SUPPORTED_LANGUAGES.EN
    );
  };
  
  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// 3️ Custom Hook (Best Practice)
export const useLanguage = () => {
  return useContext(LanguageContext);
};
