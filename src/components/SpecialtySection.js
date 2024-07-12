import React from 'react';
import fish from '../images/fish.webp';
import kofta from '../images/kofta.webp';
import rogan from '../images/rogan.webp';

const specialties = [
  { name: 'Signature Dish 1', image: fish, description: 'A delightful blend of smoky flavors and succulent salmon, kissed by the tandoor’s flames' },
  { name: 'Signature Dish 2', image: kofta, description: 'Our chef\'s special creation, featuring melt in your mouth ’kofta balls swimming’ in a creamy tomato based gravy.' },
  { name: 'Signature Dish 3', image: rogan, description: 'A must-try delicacy that combines tender meat with aromatic spices, creating a rich and flavorful curry.' },
];

const SpecialtySection = () => {
  return (
    <section className="specialty-section">
      <h2>Our Specialties</h2>
      <div className="specialty-grid">
        {specialties.map((dish, index) => (
          <div key={index} className="specialty-item">
            <img src={dish.image} alt={dish.name} />
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialtySection;