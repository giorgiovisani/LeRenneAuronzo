import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import { FaArrowLeft } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Pagination } from 'swiper/modules';
import { Swiper as SwiperClass } from 'swiper'
import Gallery from "react-photo-gallery";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import '../App.css';


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
    setSelectedImage(null); // Reset selection safely
  };

  useEffect(() => {
    if (!showSwiper) {
      setThumbsSwiper(null); // Reset swiper properly
    }
  }, [showSwiper]);

  useEffect(() => {
    const imagePaths = Array.from({ length: 18 }, (_, i) =>
      `${PUBLIC_URL}images/apartment/${i + 1}.jpeg`
    );
    setImages(imagePaths);
  }, [PUBLIC_URL]); // Only runs once when PUBLIC_URL changes


  return (
    <>
      <header className="apartment-header" style={{ backgroundImage: `url('${PUBLIC_URL}images/antorno_lago.jpg')` }}>
        <div className="overlay">
          <h1 className="text-white text-4xl font-bold">{t('apartment.title')}</h1>
        </div>
      </header>

      <main className="apartment-main p-4">
        {!showFullGallery && !showSwiper ? (

          <div className="responsive-gallery grid grid-cols-3 gap-4">
            {/* Main Image */}
            <div className="col-span-2">
              <img src={images[0]} alt="Main" className="w-full h-full object-cover rounded-lg cursor-pointer" onClick={() => { setShowSwiper(true); setSelectedImage(0); }} />
            </div>
            {images.slice(1, 4).map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Thumbnail ${index}`} className="w-full h-full object-cover rounded-lg cursor-pointer" onClick={() => { setShowSwiper(true); setSelectedImage(index + 1); }} />
              </div>
            ))}

            {/* Show Other Images Tile */}
            <div
              className="relative col-span-1"
              onClick={() => setShowFullGallery(true)}
            >
              {/* Blurred Background */}
              <img
                src={images[5] || images[0]} // Use the first image or any other image as the background
                alt="Blurred Background"
                className="w-full h-full object-cover rounded-lg filter blur-sm"
              />

              {/* Text Overlay */}
              <div
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                <span className="text-white text-lg font-semibold">
                  Show other images
                </span>
              </div>
            </div>

          </div>
        ) : showFullGallery && !showSwiper ? (
            <div>
              <button
                  className="sticky top-4 left-4 bg-gray-800/70 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 transition-all z-50"
                  style={{position: 'sticky'}}
                  onClick={() => {
                    setShowFullGallery(false);
                    setSelectedImage(null);
                  }}
              >
                <FaArrowLeft size={20}/>
              </button>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4 max-w-5xl mx-auto">
                {images.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                          src={image}
                          alt={`Gallery Image ${index}`}
                          className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105"
                          onClick={() => {
                            setShowSwiper(true);
                            setSelectedImage(index);
                          }}
                      />
                    </div>
                ))}
              </div>
            {/*  <div className="max-w-6xl mx-auto p-4">*/}
            {/*    <Gallery*/}
            {/*        photos={images}*/}
            {/*        direction="row"*/}
            {/*        onClick={(event, {index}) => {*/}
            {/*          setShowSwiper(true);*/}
            {/*          setSelectedImage(index);*/}
            {/*        }}*/}
            {/*    />*/}
            {/*  </div>*/}
            </div>
        ) : (
            <div>
              <button
                  onClick={closeSwiper}
                  className="sticky top-4 left-4 bg-gray-800/70 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 transition-all z-50"
                  style={{position: 'sticky'}}
              >
                <FaArrowLeft size={20}/>
              </button>
              <Swiper
                  key={selectedImage ?? 0} // Forces a re-render when selectedImage changes
                  spaceBetween={10}
                  navigation={true}
                  pagination={{
                    type: "fraction",
                    clickable: true,
                    renderFraction: (currentClass, totalClass) => {
                      return `<span class="${currentClass} text-white bg-gray-900/80 px-3 py-1 rounded-md shadow-md text-lg font-semibold">
                                <span class="text-blue-400">${currentClass}</span> / ${totalClass}
                              </span>`;},
                  }}
              loop={true}
              modules={[Navigation, Thumbs, Pagination]}
              thumbs={{ swiper: thumbsSwiper }}
              initialSlide={selectedImage || 0}
              className="gallery-top"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Apartment ${index}`} className="w-full rounded-lg" />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={(swiper: SwiperClass) => setThumbsSwiper(swiper)} // Correctly typed function
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              className="gallery-thumbs mt-4"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Thumbnail ${index}`} className="w-full h-20 object-cover rounded-lg cursor-pointer" onClick={() => setSelectedImage(index)} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        <section className="apartment-description mt-8">
          <div className="container">
            {/*<h2 className="text-3xl font-bold mb-4">{t('apartment.description.title')}</h2>*/}
            <p className="text-lg leading-relaxed">{t('apartment.description')}</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default TheApartment;
