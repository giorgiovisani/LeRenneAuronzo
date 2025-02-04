import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect, useRef } from 'react';
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi"; // Menu icons
import { FaGlobeEurope } from "react-icons/fa"; // Alternative Language Icons

interface NavBarProps {
  basename: string;
}

export const NavBar: React.FC<NavBarProps & { handleBookingClick: () => void }> = ({ basename, handleBookingClick }) => {
  const { t, i18n } = useTranslation();
  const { changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  // const PUBLIC_URL = import.meta.env.BASE_URL;

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (lng: string) => {
    changeLanguage(lng);
    i18n.changeLanguage(lng);
    setIsLanguageOpen(false); // Close dropdown after selection
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    }

    if (isLanguageOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isLanguageOpen]);

  const navbarItems = Object.keys(t('navbar', { returnObjects: true })).filter(key => !['title', 'utilities'].includes(key));

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Navbar brand */}
          <div className="flex items-center">
            <a href={`${basename}`} className="text-xl font-bold text-gray-300 hover:text-white hover:font-bold no-underline">
              {t('navbar.title')}
            </a>
          </div>

          {/* Navbar toggler & language switcher for mobile */}
          <div className="flex md:hidden items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800 p-3 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all transform hover:scale-110 shadow-lg"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Toggle navigation menu</span>
              {isOpen ? (
                <HiX className="w-7 h-7 transition-all duration-300" />
              ) : (
                <HiOutlineMenuAlt3 className="w-7 h-7 transition-all duration-300" />
              )}
            </button>

            {/* Language Switcher Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="bg-gray-800 p-3 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all transform hover:scale-110 shadow-lg flex items-center space-x-2"
              >
                <FaGlobeEurope className="w-6 h-6" /> {/* Change to any alternative */}
              </button>

              {/* Dropdown Menu */}
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-gray-900 rounded-lg shadow-xl z-50 overflow-hidden border border-gray-700">
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
          </div>

          {/* Navbar links */}
          <div className="hidden md:flex md:space-x-8 items-center">
            {navbarItems.map((item, index) => (
              item === 'availability' ? (
                <button
                  key={index}
                  onClick={handleBookingClick}
                  className="text-gray-300 hover:text-white hover:font-bold font-medium no-underline text-xl p-2 m-0 leading-none bg-transparent border-none focus:outline-none"
                >
                  {t(`navbar.${item}`)}
                </button>
              ) : (
                <a
                  key={index}
                  href={`${basename}#/${item}`}
                  className="text-gray-300 hover:text-white hover:font-bold font-medium no-underline text-xl p-2 m-0 leading-none"
                >
                  {t(`navbar.${item}`)}
                </a>
              )
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navbarItems.map((item, index) => (
            <a key={index} href={`${basename}#/${item}`}
              className="text-gray-300 hover:text-white hover:font-bold block font-medium no-underline">
              {t(`navbar.${item}`)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
