import React, { useState, useEffect } from 'react';
import ImageSlider from '../components/ImageSlider';
import SpecialtySection from '../components/SpecialtySection';
import TestimonialSection from '../components/TestimonialSection';
import biriyani from '../images/biriyani.webp';
import pasta from '../images/pasta.webp';
import sushi from '../images/sushi.webp';

const HomePage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  const slides = [
    { image: biriyani, text: 'Experience Culinary Excellence' },
    { image: sushi, text: 'Savor Every Moment' },
    { image: pasta, text: 'Discover Exquisite Flavors' },
  ];

  return (
    <div className="home-page">
      <ImageSlider slides={slides} />
      
      <section className={`welcome-section ${showContent ? 'fade-in' : ''}`}>
        <h2>Welcome to Flavourful Zenith</h2>
        <p>Embark on a culinary journey where every dish tells a story...</p>
      </section>
      
      <SpecialtySection />
      
      <TestimonialSection />
    </div>
  );
};

export default HomePage;
