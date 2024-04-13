import React from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Header navigateTo={navigateTo} />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'menu' && <MenuPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
      <Footer />
    </div>
  );
}

export default App;
