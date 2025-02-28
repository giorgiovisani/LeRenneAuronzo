import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import '../App.css'; // Import your animations/styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Header} from "../components/Header.tsx";

const Reviews: React.FC = () => {
  const { t } = useTranslation();
  const reviews = t('reviews.reviewsList', { returnObjects: true }) as Array<{
    author: string;
    recensione: string;
    periodo: string;
    notti: number;
  }>;

  const [currentReviewIndex] = useState(0);

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('./images/home_background.jpg')` }}
    >
      <Header title={t("reviews.title")} transparent={true} />

      {/* Main Container (Keeps structure but doesn't affect centering) */}
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 relative">

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Review Card Container (Horizontally Centered) */}
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <div className="relative w-[90vw] sm:w-[85vw] md:w-[75vw] lg:w-[60vw] min-h-[65vh] sm:min-h-[60vh] overflow-hidden rounded-lg mx-auto">
            <Swiper
              spaceBetween={10}
              navigation={true}
              pagination={{
                type: "bullets",
                clickable: true,
                renderBullet: (_, className) => {
                  return `<span class="${className} w-3 h-3 rounded-full transition-colors duration-300 ${
                    className.includes("swiper-pagination-bullet-active") ? "bg-white" : "bg-gray-400"
                  }"></span>`;
                },
              }}
              loop={true}
              autoplay={{ delay: 20000, disableOnInteraction: false }}
              modules={[Navigation, Pagination, Autoplay]}
              initialSlide={currentReviewIndex}
              className="gallery-top max-w-5xl w-full h-[70vh]"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index} className="bg-white flex justify-center">
                  {/* Smaller Review Box inside SwiperSlide */}
                  <div className="p-6 sm:p-8 rounded-lg text-left transition-transform duration-1000 ease-in-out w-[90%] max-w-3xl h-[85%] flex flex-col justify-between">
                    {/* Author */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
                      {review.author}
                    </h2>

                    {/* Scrollable Recensione */}
                    <div className="overflow-y-auto flex-grow px-2 max-h-[50vh] border-t border-gray-300 pt-3">
                      <p className="text-medium sm:text-large text-gray-700 mb-4 italic text-center">
                        "{review.recensione}"
                      </p>
                    </div>

                    {/* Fixed Bottom Periodo/Notti Section */}
                    <div className="text-sm sm:text-base text-gray-600 text-center mt-4 border-t border-gray-300 pt-3">
                      <strong>Periodo:</strong> {review.periodo} | <strong>Notti:</strong> {review.notti}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
