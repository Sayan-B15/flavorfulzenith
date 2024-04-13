import React, { useEffect, useState } from "react";
import ImageSlider from "../components/ImageSlider";
import pizzaImage from "../images/pizza.webp";
import burgerImage from "../images/burger.webp";
import sushiImage from "../images/sushi.webp";
import restImage from "../pages/restimg.jpg";

const slides = [
  { image: pizzaImage, text: "Delicious Pizza" },
  { image: burgerImage, text: "Tasty Burger" },
  { image: sushiImage, text: "Exquisite Sushi" },
];

const HomePage = () => {
  // State to control the visibility of content
  const [showContent, setShowContent] = useState(false); // Initially false

  // State to keep track of the previous scroll position
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  // Function to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const currentScrollPos = window.pageYOffset;

      // Determine if scrolling down or up
      const isScrollingDown = currentScrollPos > prevScrollPos;

      // Set showContent based on the scroll direction
      setShowContent(isScrollingDown);

      // Update the previous scroll position for the next scroll event
      setPrevScrollPos(currentScrollPos);
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup: Remove event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]); // Depend on prevScrollPos

  return (
    <div className="main-content">
      <div className="slider-container">
        <ImageSlider slides={slides} />
      </div>
      <h2 className="centered-title">Welcome to Flavourful Zenith</h2>
      <div className={`content-below-slider ${showContent ? "show" : ""}`}>
        <div className="left-content">
          <p>
            Flavourful Zenith has been a beacon of culinary delight for four
            decades. A cozy, relaxing space combined with an array of
            palate-pleasing dishes makes it the top choice for every food
            enthusiast in town.<br></br> <br></br> We offer a wide range of cuisines and dishes,
            ensuring that every visitor experiences culinary bliss.<br></br> <br></br> Renowned as
            the premier Mughlai eatery in Kolkata, Flavourful Zenith has
            consistently captured the hearts of our patrons with delectable
            dishes and warm hospitality. It remains the ultimate destination for
            those seeking top-quality cuisine at affordable prices.
          </p>
        </div>
        <div className="right-content">
          <img src={restImage} alt="Restaurant Image" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
