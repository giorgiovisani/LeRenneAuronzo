import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { HiX } from "react-icons/hi"; // Menu icons
import LanguageSwitcher from "./LanguageSwitcher";
import {CgMenuBoxed} from "react-icons/cg"; // Import Language Switcher Component

interface NavBarProps {
  basename: string;
  handleBookingClick: () => void;
}

export const NavBar: React.FC<NavBarProps> = ({ basename, handleBookingClick }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navbarItems = Object.keys(t('navbar', { returnObjects: true })).filter(key => !['title', 'utilities'].includes(key));

  return (
    <nav className="bg-black text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Navbar Brand */}
        <div className="flex items-center">
          <a
            href={`${basename}`}
            className="text-lg md:text-xl lg:text-2xl font-bold text-gray-300 hover:text-white hover:font-bold no-underline"
          >
            {t('navbar.title')}
          </a>
        </div>

        {/* Desktop Navigation + Language Switcher */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navbarItems.map((item, index) =>
            item === 'availability' ? (
              <button
                key={index}
                onClick={handleBookingClick}
                className="text-gray-300 hover:text-white hover:font-bold font-medium no-underline text-sm md:text-xl p-1 md:p-2 m-0 leading-none bg-transparent border-none focus:outline-none"
              >
                {t(`navbar.${item}`)}
              </button>
            ) : (
              <a
                key={index}
                href={`${basename}#/${item}`}
                className="text-gray-300 hover:text-white hover:font-bold font-medium no-underline text-sm md:text-xl p-1 md:p-2 m-0 leading-none"
              >
                {t(`navbar.${item}`)}
              </a>
            )
          )}
          {/* Desktop Language Switcher */}
          <LanguageSwitcher />
        </div>

        {/* Mobile Navbar & Language Switcher */}
        <div className="flex md:hidden items-center space-x-2">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gray-800 p-2 md:p-3 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all transform hover:scale-110 shadow-lg"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Toggle navigation menu</span>
            {isOpen ? (
              <HiX className="w-6 h-6 md:w-7 md:h-7 transition-all duration-300" />
            ) : (
              <CgMenuBoxed className="w-6 h-6 md:w-7 md:h-7 transition-all duration-300" />
            )}
          </button>
          {/* Mobile Language Switcher */}
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navbarItems.map((item, index) => (
            <a
              key={index}
              href={`${basename}#/${item}`}
              className="text-gray-300 hover:text-white hover:font-bold block font-medium no-underline text-base p-1"
            >
              {t(`navbar.${item}`)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
