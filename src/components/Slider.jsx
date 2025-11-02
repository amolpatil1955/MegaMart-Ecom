import React, { useState, useEffect } from "react";

const Slider = () => {
  const images = [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&w=1200&h=600&fit=crop",
    "https://img.freepik.com/free-photo/handsome-guy-travelling-with-headphone-wearing-straw-hat-smiling-standing-with-backpack-blue_1258-164153.jpg?semt=ais_hybrid&w=740&q=80",
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&w=1200&h=600&fit=crop",
    "https://manuals.plus/wp-content/uploads/2024/06/NOD-141-0251-Bluetooth-Over-Ear-Headphones-Featured-Image.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-8xl rounded-2xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-64 md:h-96 object-fit"
            />
          </div>
        ))}
      </div>
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 px-5 py-3 top-1/2  transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 px-5 py-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
      >
        &#10095;
      </button>
      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
