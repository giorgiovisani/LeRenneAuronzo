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
  const [isSliding, setIsSliding] = useState(false);

  const goToNextReview = () => {
    if (!isSliding) {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        setIsSliding(false);
      }, 500); // Matches the CSS transition
    }
  };

  const goToPreviousReview = () => {
    if (!isSliding) {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentReviewIndex((prevIndex) =>
          prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
        setIsSliding(false);
      }, 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(goToNextReview, 20000);
    return () => clearInterval(interval);
  }, [reviews.length]);


  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative bg-cover bg-center"
      style={{
        backgroundImage: `url('./images/home_background.jpg')`,
      }}
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Reviews Sliding Effect */}
          <div className="relative h-full w-full overflow-hidden">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`absolute left-0 right-0 w-full h-full bg-white/90 p-8 rounded-lg shadow-lg text-left transition-transform duration-1000 ease-in-out opacity-0 ${
                  index === currentReviewIndex
                    ? "translate-x-0 opacity-100"
                    : index > currentReviewIndex
                    ? "translate-x-full opacity-0"
                    : "-translate-x-full opacity-0"
                }`}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">{review.author}</h2>
                <div className="overflow-y-auto h-[60%] sm:h-[70%] mb-6">
                  <p className="text-lg sm:text-xl text-gray-700 mb-4 italic">"{review.recensione}"</p>
                </div>
                <p className="text-sm sm:text-base text-gray-600">
                  <strong>Periodo:</strong> {review.periodo} | <strong>Notti:</strong> {review.notti}
                </p>
              </div>
            ))}
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