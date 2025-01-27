import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import '../App.css'; // Import the App.css file

const Reviews: React.FC = () => {
  const { t } = useTranslation();
  const reviews = t('reviews.reviewsList', { returnObjects: true }) as Array<{
    author: string;
    recensione: string;
    periodo: string;
    notti: number;
  }>;

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNextReview = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        setIsTransitioning(false);
      }, 500); // Match the duration of the CSS transition
    }
  };

  const goToPreviousReview = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentReviewIndex((prevIndex) =>
          prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
        setIsTransitioning(false);
      }, 500); // Match the duration of the CSS transition
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextReview();
    }, 20000); // Change review every 20 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [reviews.length]);

  const currentReview = reviews[currentReviewIndex];
  const nextReviewIndex = (currentReviewIndex + 1) % reviews.length;
  const nextReview = reviews[nextReviewIndex];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-8 relative bg-cover bg-center"
      style={{
        backgroundImage: `url('./images/home_background.jpg')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl w-full relative">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeIn">
          {t('reviews.title')}
        </h1>

        {/* Review Card Container */}
        <div className="relative overflow-hidden h-[500px] w-full"> {/* Adjust height as needed */}
          {/* Left Arrow */}
          <div
            className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300 z-20"
            onClick={goToPreviousReview}
          >
            <div className="bg-white/50 p-4 rounded-full shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
          </div>

          {/* Right Arrow */}
          <div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300 z-20"
            onClick={goToNextReview}
          >
            <div className="bg-white/50 p-4 rounded-full shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          {/* Current Review */}
          <div
            className={`absolute inset-0 bg-white/90 p-8 rounded-lg shadow-lg text-left transition-all duration-500 ease-in-out ${
              isTransitioning ? 'opacity-0 -translate-x-full' : 'opacity-100 translate-x-0'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              {currentReview.author}
            </h2>
            <div className="overflow-y-auto h-[300px] sm:h-[350px]"> {/* Scrollable container */}
              <p className="text-lg sm:text-xl text-gray-700 mb-4 italic">
                "{currentReview.recensione}"
              </p>
            </div>
            <p className="text-sm sm:text-base text-gray-600">
              <strong>Periodo:</strong> {currentReview.periodo} |{' '}
              <strong>Notti:</strong> {currentReview.notti}
            </p>
          </div>

          {/* Next Review */}
          <div
            className={`absolute inset-0 bg-white/90 p-8 rounded-lg shadow-lg text-left transition-all duration-500 ease-in-out ${
              isTransitioning ? 'opacity-100 translate-x-0' : 'opacity-100 translate-x-full'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              {nextReview.author}
            </h2>
            <div className="overflow-y-auto h-[300px] sm:h-[350px]"> {/* Scrollable container */}
              <p className="text-lg sm:text-xl text-gray-700 mb-4 italic">
                "{nextReview.recensione}"
              </p>
            </div>
            <p className="text-sm sm:text-base text-gray-600">
              <strong>Periodo:</strong> {nextReview.periodo} |{' '}
              <strong>Notti:</strong> {nextReview.notti}
            </p>
          </div>
        </div>

        {/* Dots for navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentReviewIndex ? 'bg-white' : 'bg-gray-400'
              }`}
              onClick={() => setCurrentReviewIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;