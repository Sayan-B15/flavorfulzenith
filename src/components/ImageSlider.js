import React, { useState, useEffect } from 'react';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3500); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <button className='left-arrow' onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slide-wrapper">
        {slides.map((slide, index) => (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <>
                <div className="text">{slide.text}</div>
                <img 
                  src={slide.image} 
                  alt='dish' 
                  className='image' 
                />
              </>
            )}
          </div>
        ))}
      </div>
      <button className='right-arrow' onClick={nextSlide}>
        &#10095;
      </button>
    </section>
  );
};

export default ImageSlider;
