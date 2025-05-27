import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import { FaArrowLeft } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Pagination } from 'swiper/modules';
import { Swiper as SwiperClass } from 'swiper';
import Masonry from "react-masonry-css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import '../App.css';

import {Header, FeatureSection} from "../components/Header";
import ReactMarkdown from "react-markdown"; // Import Header Component


const TheApartment: React.FC = () => {
  const PUBLIC_URL = import.meta.env.BASE_URL;
  const { t } = useTranslation();
  const [images, setImages] = useState<string[]>([]);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [showSwiper, setShowSwiper] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const closeSwiper = () => {
    setShowSwiper(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    if (!showSwiper) {
      setThumbsSwiper(null);
    }
  }, [showSwiper]);

  useEffect(() => {
    const imagePaths = Array.from({ length: 38 }, (_, i) =>
      `${PUBLIC_URL}images/apartment/${i + 1}.jpeg`
    );
    setImages(imagePaths);
  }, [PUBLIC_URL]);

  return (
    <>
      <Header
        title={t("apartment.title")}
        backgroundImage={`${PUBLIC_URL}images/antorno_lago.jpg`}
      />

      <main className="apartment-main p-4">
        {!showFullGallery && !showSwiper ? (
            <div className="max-w-5xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
              {/* Responsive Grid: 2 columns on mobile, 3 on small screens and up */}
              <div className="responsive-gallery grid grid-cols-3 gap-2 sm:gap-4">
                {/* Main Image */}
                <div className="col-span-2">
                  <img
                      src={images[0]}
                      alt="Main"
                      className="w-full h-full object-cover rounded-lg cursor-pointer"
                      loading="lazy"
                      onClick={() => {
                        setShowSwiper(true);
                        setSelectedImage(0);
                      }}
                  />
                </div>
                {images.slice(1, 4).map((image, index) => (
                    <div key={index}>
                      <img
                          src={image}
                          alt={`Thumbnail ${index}`}
                          loading="lazy"
                          className="w-full h-full object-cover rounded-lg cursor-pointer"
                          onClick={() => {
                            setShowSwiper(true);
                            setSelectedImage(index + 1);
                          }}
                      />
                    </div>
                ))}

                {/* Show Other Images Tile */}
                <div
                    className="relative col-span-1"
                    onClick={() => setShowFullGallery(true)}
                >
                  {/* Blurred Background */}
                  <img
                      src={images[5] || images[0]} // Use the first image as fallback
                      alt="Blurred Background"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-lg filter blur-sm"
                  />

                  {/* Text Overlay */}
                  <div
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg text-center">
                  <span className="text-white text-sm sm:text-lg font-semibold max-w-[90%] sm:max-w-xs md:max-w-sm">
                    Show More
                  </span>
                  </div>
                </div>
              </div>
            </div>
        ) : showFullGallery && !showSwiper ? (
            <div className="max-w-6xl mx-auto p-4">
              <button
                  className="sticky top-4 left-4 bg-gray-800/70 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 transition-all z-50"
                  onClick={() => {
                    setShowFullGallery(false);
                    setSelectedImage(null);
                  }}
              >
                <FaArrowLeft size={20}/>
              </button>

              {/* Masonry Grid for Full Gallery with Responsive Padding & Margins */}
              <Masonry
                  breakpointCols={{default: 4, 1100: 3, 768: 2, 500: 1}}
                  className="flex -mx-1 sm:-mx-2 mt-4"
                  columnClassName="masonry-column px-1 sm:px-2"
              >
                {images.map((image, index) => (
                    <div key={index} className="mb-2 sm:mb-4 p-1 sm:p-2">
                      <img
                          src={image}
                          alt={`Gallery Image ${index}`}
                          loading="lazy"
                          className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
                          onClick={() => {
                            setShowSwiper(true);
                            setSelectedImage(index);
                          }}
                      />
                    </div>
                ))}
              </Masonry>
            </div>
        ) : (
            <div className="fixed inset-0 flex flex-col justify-center items-center bg-gray-800 z-50 p-4">
              <button
                  onClick={closeSwiper}
                  className="absolute top-6 left-6 bg-gray-800/70 text-white p-3 border-3 border-white rounded-full shadow-lg hover:bg-gray-900 transition-all z-50"
              >
                <FaArrowLeft size={20}/>
              </button>

              {/* Main Swiper */}
              <Swiper
                  key={selectedImage ?? 0}
                  spaceBetween={10}
                  navigation={true}
                  pagination={{
                    type: "bullets", // Dots pagination
                    clickable: true,
                    renderBullet: (_, className) => {
                      return `<span class="${className} w-4 h-4 mx-1 rounded-full bg-gray-200 hover:bg-blue-400 transition-all duration-300 transform hover:scale-110 shadow-md 
                  ${className.includes("swiper-pagination-bullet-active") ? "bg-blue-500 scale-125 shadow-lg shadow-blue-500" : ""}"></span>`;
                    },
                  }}
                  loop={true}
                  modules={[Navigation, Thumbs, Pagination]}
                  thumbs={{swiper: thumbsSwiper}}
                  initialSlide={selectedImage ?? 0}
                  className="gallery-top max-w-5xl w-full"
              >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="flex justify-center bg-gray-800">
                      <img
                          src={image}
                          alt={`Apartment ${index}`}
                          className="w-auto max-w-full max-h-[80vh] sm:max-h-[65vh] object-contain rounded-lg"
                          loading="lazy"
                      />
                    </SwiperSlide>
                ))}
              </Swiper>

              {/* Thumbnail Swiper */}
              <Swiper
                  onSwiper={(swiper: SwiperClass) => setThumbsSwiper(swiper)}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  className="gallery-thumbs mt-4 max-w-5xl w-full"
              >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="cursor-pointer">
                      <img
                          src={image}
                          alt={`Thumbnail ${index}`}
                          className="w-full h-20 object-cover rounded-lg"
                          loading="lazy"
                          onClick={() => setSelectedImage(index)}
                      />
                    </SwiperSlide>
                ))}
              </Swiper>
            </div>
        )}

        <section className="apartment-description mt-8">
          <div className="container">
            <p className="feature-section text-lg leading-relaxed">
              <ReactMarkdown>{t('apartment.description')}</ReactMarkdown>
            </p>
          </div>
        </section>

        {/* FEATURES SECTION ADDED HERE */}
        <section className="apartment-features mt-10">
          <div className="container mx-auto px-4">
            {/*
      grid-cols-1: single column on mobile
      md:grid-cols-2: two columns at md (~768px) and above
      gap-8: margin between columns (and rows if wrapped)
    */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureSection
                  image={`${PUBLIC_URL}images/apartment/1.jpeg`}
                  title={t('apartment.features.0.title')}
                  items={t('apartment.features.0.items', { returnObjects: true }) as string[]}
              />
              <FeatureSection
                  image={`${PUBLIC_URL}images/auronzo_centro.jpg`}
                  title={t('apartment.features.1.title')}
                  items={t('apartment.features.1.items', { returnObjects: true }) as string[]}
              />
              <FeatureSection
                  image={`${PUBLIC_URL}images/cortina-perla-dolomiti/4.jpg`}
                  title={t('apartment.features.2.title')}
                  items={t('apartment.features.2.items', { returnObjects: true }) as string[]}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default TheApartment;
