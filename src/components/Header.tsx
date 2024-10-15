import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header fixed w-full z-50 py-4 transition-all ${isScrolled ? 'bg-dark' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="header__logo flex items-center text-primary">
          <img src="https://i.ibb.co/YN3XTy6/13-1.png" alt="Brittek Logo" className="w-10 h-10" />
          <span className="text-xl font-bold">Brittek™ Digital</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link to="/about" className="hover:text-primary">About Us</Link>
          <Link to="/services" className="hover:text-primary">Services</Link>
          <Link to="/ai-solutions" className="hover:text-primary">AI Solutions</Link>
          <Link to="/products" className="hover:text-primary">Products</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <a href="mailto:info@brittek.digital" className="hover:text-primary" aria-label="Email Brittek™ Digital">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="tel:+1234567890" className="hover:text-primary" aria-label="Call Brittek™ Digital">
            <i className="fas fa-phone-alt"></i>
          </a>
          <button 
            className="md:hidden p-2 text-primary"
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu fixed inset-0 bg-dark bg-opacity-90 flex flex-col items-center justify-center text-center gap-8 z-40">
          <Link to="/about" onClick={toggleMobileMenu} className="text-xl text-light hover:text-primary">About Us</Link>
          <Link to="/services" onClick={toggleMobileMenu} className="text-xl text-light hover:text-primary">Services</Link>
          <Link to="/ai-solutions" onClick={toggleMobileMenu} className="text-xl text-light hover:text-primary">AI Solutions</Link>
          <Link to="/products" onClick={toggleMobileMenu} className="text-xl text-light hover:text-primary">Products</Link>
          <Link to="/contact" onClick={toggleMobileMenu} className="text-xl text-light hover:text-primary">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
