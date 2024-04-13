// NormalLayout.js
import React from 'react';

const NormalLayout = ({ children }) => {
  return (
    <div>
      <nav>Normal Navbar</nav>
      <div>{children}</div>
    </div>
  );
};

export default NormalLayout;
