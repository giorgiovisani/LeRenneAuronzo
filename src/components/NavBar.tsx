import {useTranslation} from 'react-i18next';
import {useLanguage} from '../context/LanguageContext';
import {useState} from 'react';
import { Navbar, Button, Link, Image } from "@nextui-org/react";

// Check if NextUI components are imported correctly
console.log({ Navbar, Button, Link, Image });

interface NavBarProps {
  basename: string;
}

export const NavBar: React.FC<NavBarProps & { handleBookingClick: () => void }> = ({ basename, handleBookingClick }) => {

  const {t, i18n} = useTranslation();
  const { changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const PUBLIC_URL = import.meta.env.BASE_URL;

  const handleLanguageChange = (lng: string) => {
    changeLanguage(lng);
    i18n.changeLanguage(lng);
  };

  // Extract the navbar items from the JSON file
const navbarItems = Object.keys(t('navbar', { returnObjects: true })).filter(key => !['title', 'utilities'].includes(key));
  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Navbar brand */}
          <div className="flex items-center">
            <a href={`${basename}`}
               className="text-xl font-bold text-gray-300 hover:text-white hover:font-bold no-underline">
              {t('navbar.title')}
            </a>
          </div>

          {/* Navbar toggler for mobile view */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-black inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
              </svg>
              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            {/* Language switcher buttons for mobile view */}
            <div className="flex md:hidden space-x-2 ml-4">
              <button onClick={() => handleLanguageChange('it')}
                      className="focus:outline-none hover:shadow-lg hover:scale-110 transition-transform">
                <img src={`${PUBLIC_URL}/flags/italy.png`} alt="Italian Flag" className="h-6 w-6"/>
              </button>
              <button onClick={() => handleLanguageChange('en')}
                      className="focus:outline-none hover:shadow-lg hover:scale-110 transition-transform">
                <img src={`${PUBLIC_URL}/flags/uk.png`} alt="English Flag" className="h-6 w-6"/>
              </button>
              {/*<p className="text-gray-300 text-sm">{language}</p>*/}
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


          {/* Language switcher buttons for desktop view */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => handleLanguageChange('it')}
                    className="focus:outline-none hover:shadow-lg hover:scale-110 transition-transform">
              <img src={`${PUBLIC_URL}/flags/italy.png`} alt="Italian Flag" className="h-6 w-6"/>
            </button>
            <button onClick={() => handleLanguageChange('en')}
                    className="focus:outline-none hover:shadow-lg hover:scale-110 transition-transform">
              <img src={`${PUBLIC_URL}/flags/uk.png`} alt="English Flag" className="h-6 w-6"/>
            </button>
            {/*<p className="text-gray-300 text-sm">{language}</p>*/}
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

//
//   return (
//     <Navbar isBordered variant="floating">
//       <Navbar.Brand>
//         <Link href={`${basename}`} color="text" css={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
//           {t('navbar.title')}
//         </Link>
//       </Navbar.Brand>
//
//       <Navbar.Content hideIn="xs">
//         {navbarItems.map((item, index) => (
//           <Navbar.Link key={index} href={`${basename}#/${item}`} color="text">
//             {t(`navbar.${item}`)}
//           </Navbar.Link>
//         ))}
//       </Navbar.Content>
//
//       <Navbar.Content>
//         {/* Language Switcher Buttons for Desktop View */}
//         <Button auto light onClick={() => handleLanguageChange('it')}>
//           <Image src={`${PUBLIC_URL}/flags/italy.png`} alt="Italian Flag" width={24} height={24} />
//         </Button>
//         <Button auto light onClick={() => handleLanguageChange('en')}>
//           <Image src={`${PUBLIC_URL}/flags/uk.png`} alt="English Flag" width={24} height={24} />
//         </Button>
//       </Navbar.Content>
//
//       <Navbar.Toggle showIn="xs" onClick={() => setIsOpen(!isOpen)} />
//
//       <Navbar.Collapse isOpen={isOpen}>
//         {navbarItems.map((item, index) => (
//           <Navbar.CollapseItem key={index}>
//             <Link href={`${basename}#/${item}`} color="text">
//               {t(`navbar.${item}`)}
//             </Link>
//           </Navbar.CollapseItem>
//         ))}
//         <Navbar.CollapseItem>
//           <Button auto light onClick={() => handleLanguageChange('it')}>
//             <Image src={`${PUBLIC_URL}/flags/italy.png`} alt="Italian Flag" width={24} height={24} />
//           </Button>
//           <Button auto light onClick={() => handleLanguageChange('en')}>
//             <Image src={`${PUBLIC_URL}/flags/uk.png`} alt="English Flag" width={24} height={24} />
//           </Button>
//         </Navbar.CollapseItem>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };



export default NavBar;
