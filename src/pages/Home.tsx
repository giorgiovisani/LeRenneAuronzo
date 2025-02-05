'use client'

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from "@nextui-org/react";
import '../styles/animations.css';
import { FaMapMarkerAlt, FaCalendarCheck, FaHome } from 'react-icons/fa';

interface HomeProps {
  handleBookingClick: () => void;
}

export default function Home({ handleBookingClick }: HomeProps) {
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
      <div className="z-10 text-center px-6 sm:px-8 lg:px-12 max-w-4xl w-full">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeIn">
          {t('homepage.title')}
        </h1>
        <p className="text-xl sm:text-2xl italic text-white mb-12 animate-fadeInSlow">
          {t('homepage.poetic_sentence')} – <em>{t('homepage.author')}</em>
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {/* Visit Apartment Button */}
          <Button
            as={Link}
            to="/apartment"
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:from-yellow-600 hover:to-orange-700 hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center gap-2 pulse-animation"
          >
            <FaHome className="text-white" /> {t('homepage.visit_apartment')}
          </Button>

          {/* What to do Around Button */}
          <Button
            as={Link}
            to="/attractions"
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center gap-2 pulse-animation"
          >
            <FaMapMarkerAlt className="text-white" /> {t('homepage.what_to_do_around')}
          </Button>

          {/* Book Now Button */}
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg shadow-lg hover:from-green-600 hover:to-teal-600 hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center gap-2"
            onClick={handleBookingClick}
          >
            <FaCalendarCheck className="text-white" /> {t('homepage.book_now')}
          </Button>
        </div>
      </div>
    </div>
  );
}
