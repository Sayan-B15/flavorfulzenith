import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import 'animate.css/animate.min.css';

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
    }, 5000); // Change slide every 5 seconds

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
          <LazyLoad key={index} height={200} once>
            <div
              className={`slide ${index === current ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
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
          </LazyLoad>
        ))}
      </div>
      <button className='right-arrow' onClick={nextSlide}>
        &#10095;
      </button>
    </section>
  );
};

export default ImageSlider;