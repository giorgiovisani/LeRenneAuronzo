import React, { useState } from 'react';

interface ImageSliderProps {
  images: string[];
  alt: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-auto rounded shadow-lg overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={alt}
            className="w-full h-auto min-w-full"
          />
        ))}
      </div>
      <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg" onClick={handlePrev}>
        &#9664;
      </button>
      <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg" onClick={handleNext}>
        &#9654;
      </button>
    </div>
  );
};

export default ImageSlider;
