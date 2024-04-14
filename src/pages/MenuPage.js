import React, { useState } from 'react';
import menupage0 from './menupage0.jpeg'; // Import image for page 0
import menupage1 from './menupage1.jpeg'; // Import image for page 1

const MenuPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTurningPage, setIsTurningPage] = useState(false);

  const handleImageClick = () => {
    if (!isTurningPage) {
      setIsTurningPage(true);
      setTimeout(() => {
        setCurrentPage((prevPage) => (prevPage === 1 ? 0 : prevPage + 1));
        setIsTurningPage(false);
      }, 500); // Adjust the duration of the animation as needed
    }
  };

  return (
    <div className="menu-page">
      <img
        src={currentPage === 0 ? menupage0 : menupage1}
        alt={`Menu Page ${currentPage}`}
        className={isTurningPage ? 'turning' : ''}
        onClick={handleImageClick}
      />
    </div>
  );
};

export default MenuPage;
