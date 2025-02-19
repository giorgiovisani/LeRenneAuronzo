import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import '../App.css'; // Import your animations/styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Reviews: React.FC = () => {
  const { t } = useTranslation();
  const reviews = t('reviews.reviewsList', { returnObjects: true }) as Array<{
    author: string;
    recensione: string;
    periodo: string;
    notti: number;
  }>;

  // We still use a state variable to set the initial slide if needed
  const [currentReviewIndex] = useState(0);

  // Auto-slide is now handled by Swiper's Autoplay module.
  // (No manual interval needed.)

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative bg-cover bg-center"
      style={{ backgroundImage: `url('./images/home_background.jpg')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="z-10 text-center w-full max-w-4xl relative">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeIn">
          {t('reviews.title')}
        </h1>

        {/* Review Card Container */}
        <div className="relative w-[90vw] sm:w-[80vw] lg:w-[60vw] h-[55vh] sm:h-[50vh] overflow-hidden rounded-lg">
          <Swiper
            spaceBetween={10}
            navigation={true}
            pagination={{
              type: "bullets",
              clickable: true,
              renderBullet: (_, className) => {
                // Use Tailwind classes to mimic your original dots: inactive dots bg-gray-400, active dots bg-white.
                return `<span class="${className} w-3 h-3 rounded-full transition-colors duration-300 ${
                  className.includes("swiper-pagination-bullet-active") ? "bg-white" : "bg-gray-400"
                }"></span>`;
              },
            }}
            loop={true}
            autoplay={{ delay: 20000, disableOnInteraction: false }}
            modules={[Navigation, Pagination, Autoplay]}
            initialSlide={currentReviewIndex}
            className="gallery-top max-w-5xl w-full"
          >
            {reviews.map((review, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center"
              >
                <div className="bg-white/90 p-8 rounded-lg shadow-lg text-left transition-transform duration-1000 ease-in-out h-full w-full overflow-hidden">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                    {review.author}
                  </h2>
                  <div className="overflow-y-auto h-[60%] sm:h-[70%] mb-6">
                    <p className="text-lg sm:text-xl text-gray-700 mb-4 italic">
                      "{review.recensione}"
                    </p>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">
                    <strong>Periodo:</strong> {review.periodo} | <strong>Notti:</strong> {review.notti}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* (Optional) If you wish to have custom dots outside of Swiper's built‑in pagination,
              you could add them here. Otherwise, the renderBullet function creates the dots below the Swiper. */}
      </div>
    </div>
  );
};

export default Reviews;
