'use client'

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from "@nextui-org/react";
import '../styles/animations.css';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-0 relative bg-cover bg-center"
      style={{
        backgroundImage: `url('./images/home_background.jpg')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl w-full">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeIn">
          {t('homepage.title')}
        </h1>
        <p className="text-xl sm:text-2xl italic text-white mb-12 animate-fadeInSlow">
          {t('homepage.poetic_sentence')} – <em>{t('homepage.author')}</em>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            as={Link}
            to="/attractions"
            size="lg"
            className="bg-gradient-to-r from-zinc-900 to-black text-white border-zinc-700 hover:from-black hover:to-zinc-900"
            variant="bordered"
          >
            {t('homepage.what_to_do_around')}
          </Button>
          <Button
            as={Link}
            to="/availability"
            size="lg"
            className="bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-900"
            variant="bordered"
          >
            {t('homepage.book_now')}
          </Button>
        </div>
      </div>
    </div>
  );
}
//
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'tailwindcss/tailwind.css'; // Tailwind CSS
// import '../styles/animations.css'
// import {Link} from 'react-router-dom';
// import {useTranslation} from 'react-i18next';
// import '../App.css'; // Import the App.css file
// import { Button } from '@nextui-org/react';
//
// const Home: React.FC = () => {
//
//   const {t} = useTranslation();
//
//
//   return (
//     <>
//       {/* Background Image Container */}
//       <div
//         style={{
//           backgroundImage: `url('./images/home_background.jpg')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           height: '100vh',
//           width: '100%',
//           position: 'relative',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           flexDirection: 'column',
//           color: 'white',
//         }}
//       >
//         {/* Overlay for Darkening the Background */}
//         <div
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay for readability
//             zIndex: 1,
//           }}
//         ></div>
//
//         {/* Title and Poetic Sentence */}
//         <div
//           style={{
//             zIndex: 2, // Keep above overlay
//             textAlign: 'center',
//             padding: '2rem',
//           }}
//         >
//           <h1 className="home-title animate-fadeIn" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
//             {t('homepage.title')}
//           </h1>
//           <p className="home-sentence animate-fadeInSlow" style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>
//             {t('homepage.poetic_sentence')} – <em>{t('homepage.author')}</em>
//           </p>
//         </div>
//
//
//         {/* Button Options for Style Comparison */}
//           <div style={{zIndex: 2, marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
//               {/* Gradient Button */}
//               <Button
//                   as={Link}
//                   to="/attractions"
//                   color="secondary"
//                   style={{
//                       padding: '0.75rem 1.5rem',
//                       fontSize: '1.25rem',
//                   }}
//               >
//                   {t('homepage.what_to_do_around')}
//               </Button>
//
//               {/* Bordered Button */}
//               <Button
//                   as={Link}
//                   to="/attractions"
//                   color="default"
//                   variant="bordered"
//                   style={{
//                       padding: '0.75rem 1.5rem',
//                       fontSize: '1.25rem',
//                       borderColor: 'white',
//                       color: 'white',
//                   }}
//               >
//                   {t('homepage.what_to_do_around')}
//               </Button>
//
//               {/* Glassy Button */}
//               <Button
//                   as={Link}
//                   to="/attractions"
//                   color="default"
//                   size="lg"
//                   radius="full"
//                   style={{
//                     padding: '0.75rem 1.5rem',
//                     fontSize: '1.25rem',
//                     backgroundColor: 'rgba(255, 255, 255, 0.25)',
//                     backdropFilter: 'blur(10px)',
//                     borderRadius: '2rem',
//                     color: 'white',
//                   }}
//               >
//                   {t('homepage.what_to_do_around')}
//               </Button>
//
//                   {/* Elevated Shadow Button */}
//                   <Button
//                       as={Link}
//                       to="/attractions"
//                       color="primary"
//                       style={{
//                           padding: '0.75rem 1.5rem',
//                           fontSize: '1.25rem',
//                           boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)',
//                           color: 'white',
//                           backgroundColor: 'rgba(0, 0, 0, 0.6)',
//                       }}
//                   >
//                       {t('homepage.what_to_do_around')}
//                   </Button>
//
//                   {/* Luxury Dark Button */}
//                   <Button
//                       as={Link}
//                       to="/attractions"
//                       color="default"
//                       style={{
//                           padding: '0.75rem 1.5rem',
//                           fontSize: '1.25rem',
//                           color: 'gold',
//                     backgroundColor: 'rgba(255, 255, 255, 0.25)',
//                     backdropFilter: 'blur(10px)',
//                           borderRadius: '2rem',
//                           border: '1px solid gold',
//                       }}
//                   >
//                       {t('homepage.what_to_do_around')}
//                   </Button>
//               </div>
//           </div>
//       </>
//         );
//         };
//
//         export default Home;
