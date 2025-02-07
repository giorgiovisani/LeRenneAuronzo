import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect, useRef } from 'react';
import { FaGlobeEurope } from "react-icons/fa"; // Language icon

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const { changeLanguage, language } = useLanguage();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (lng: string) => {
    if (lng !== language) {
      changeLanguage(lng);
      i18n.changeLanguage(lng);
    }
    setIsLanguageOpen(false); // Close dropdown after selection
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsLanguageOpen(prev => !prev)}
        className="bg-gray-800 p-2 md:p-3 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all transform hover:scale-110 shadow-lg flex items-center space-x-2"
      >
        <FaGlobeEurope className="w-6 h-6 md:w-7 md:h-7" />
      </button>

      {/* Dropdown Menu */}
      {isLanguageOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-gray-900 rounded-lg shadow-xl z-50 overflow-hidden border-2 border-gray-700">
          <button
            className="w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition"
            onClick={() => handleLanguageChange("en")}
          >
            English
          </button>
          <button
            className="w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition"
            onClick={() => handleLanguageChange("it")}
          >
            Italiano
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
