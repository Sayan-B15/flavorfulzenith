import React from 'react';


function MenuPage() {
  return (
    <div className="main-content"> {/* Add main-content wrapper */}
      
      <h1>Menu</h1>
      <section>
        <h2>Appetizers</h2>
        <ul>
          <li>Appetizer 1 - $10</li>
          <li>Appetizer 2 - $12</li>
          {/* Add more items */}
        </ul>
      </section>
      <section>
        <h2>Main Courses</h2>
        <ul>
          <li>Main Course 1 - $20</li>
          <li>Main Course 2 - $25</li>
          {/* Add more items */}
        </ul>
      </section>
      {/* Add sections for other menu categories */}
    </div>
  );
}

export default MenuPage;
