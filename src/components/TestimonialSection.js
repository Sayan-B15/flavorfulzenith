import React, { useState, useEffect } from 'react';
import mico from '../images/mico.png';
import michael from '../images/michael.webp'
import sarah from '../images/sarah.webp'

const testimonials = [
  { 
    text: "Woof WOOF Woof Woof !", 
    author: "Mico",
    image: mico
  },
  { 
    text: "Flavourful Zenith never disappoints. Absolutely fantastic!", 
    author: "Sarah M.",
    image: sarah
  },
  { 
    text: "A culinary journey that I'll never forget.", 
    author: "Michael R.",
    image: michael
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current => (current + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial ${index === current ? 'active' : ''}`}
          >
            <div className="testimonial-content">
              <img src={testimonial.image} alt={testimonial.author} className="testimonial-image" />
              <p className="testimonial-text">"{testimonial.text}"</p>
              <span className="testimonial-author">- {testimonial.author}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;