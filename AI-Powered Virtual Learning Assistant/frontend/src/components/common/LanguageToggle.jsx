// import { useContext } from "react";
// import { LanguageContext } from "../../context/LanguageContext";
import { useLanguage } from "../../context/LanguageContext";

/*
  LanguageToggle Component
  Allows user to switch between English and Hindi
*/
export default function LanguageToggle() {
  // const { language, toggleLanguage } = useContext(LanguageContext);
  const { language, toggleLanguage } = useLanguage();
  return (
    <button
      onClick={toggleLanguage}
      className="border px-3 py-1 rounded text-sm font-medium 
                 hover:bg-gray-100 transition"
    >
      {/* Button text changes based on current language */}
      {language === "en" ? "हिंदी" : "English"}
    </button>
  );
}
