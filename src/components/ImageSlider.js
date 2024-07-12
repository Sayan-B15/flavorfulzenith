import React, { useState, useEffect } from 'react';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextSlide((current + 1) % slides.length);
      setTimeout(() => {
        setCurrent(nextSlide);
      }, 5000); // Adjust this value based on transition timing
    }, 500); // Time interval for the slider to change
    return () => clearInterval(interval);
  }, [current, nextSlide, slides.length]);

  return (
    <div className="image-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? 'active' : ''} ${index === nextSlide ? 'next' : ''}`}
        >
          <img src={slide.image} alt={`Slide ${index + 1}`} />
          <div className="slide-text">{slide.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
