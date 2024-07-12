import React, { useState } from 'react';

const menuCategories = ['Starters', 'Main Courses', 'Desserts', 'Beverages'];

const menuItems = {
  Starters: [
    { name: 'Appetizer 1', image: 'https://via.placeholder.com/150x150?text=Appetizer+1', price: '$10' },
    { name: 'Appetizer 2', image: 'https://via.placeholder.com/150x150?text=Appetizer+2', price: '$12' },
    { name: 'Appetizer 3', image: 'https://via.placeholder.com/150x150?text=Appetizer+3', price: '$11' },
    { name: 'Appetizer 4', image: 'https://via.placeholder.com/150x150?text=Appetizer+4', price: '$13' },
    { name: 'Appetizer 5', image: 'https://via.placeholder.com/150x150?text=Appetizer+5', price: '$9' },
  ],
  'Main Courses': [
    { name: 'Main Dish 1', image: 'https://via.placeholder.com/150x150?text=Main+Dish+1', price: '$20' },
    { name: 'Main Dish 2', image: 'https://via.placeholder.com/150x150?text=Main+Dish+2', price: '$22' },
    { name: 'Main Dish 3', image: 'https://via.placeholder.com/150x150?text=Main+Dish+3', price: '$21' },
    { name: 'Main Dish 4', image: 'https://via.placeholder.com/150x150?text=Main+Dish+4', price: '$23' },
    { name: 'Main Dish 5', image: 'https://via.placeholder.com/150x150?text=Main+Dish+5', price: '$24' },
  ],
  Desserts: [
    { name: 'Dessert 1', image: 'https://via.placeholder.com/150x150?text=Dessert+1', price: '$8' },
    { name: 'Dessert 2', image: 'https://via.placeholder.com/150x150?text=Dessert+2', price: '$9' },
    { name: 'Dessert 3', image: 'https://via.placeholder.com/150x150?text=Dessert+3', price: '$7' },
    { name: 'Dessert 4', image: 'https://via.placeholder.com/150x150?text=Dessert+4', price: '$10' },
    { name: 'Dessert 5', image: 'https://via.placeholder.com/150x150?text=Dessert+5', price: '$11' },
  ],
  Beverages: [
    { name: 'Drink 1', image: 'https://via.placeholder.com/150x150?text=Drink+1', price: '$5' },
    { name: 'Drink 2', image: 'https://via.placeholder.com/150x150?text=Drink+2', price: '$6' },
    { name: 'Drink 3', image: 'https://via.placeholder.com/150x150?text=Drink+3', price: '$4' },
    { name: 'Drink 4', image: 'https://via.placeholder.com/150x150?text=Drink+4', price: '$7' },
    { name: 'Drink 5', image: 'https://via.placeholder.com/150x150?text=Drink+5', price: '$8' },
  ],
};

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('Starters');

  return (
    <div className="menu-page">
      <h1>Our Menu</h1>
      <div className="menu-nav">
        {menuCategories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="menu-content">
        {menuItems[activeCategory].map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button className="order-button">Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
