import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer py-8 bg-dark text-light">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="footer__menu flex flex-wrap gap-4">
          <Link to="/about" className="footer__menu-item hover:text-primary">About Us</Link>
          <Link to="/services" className="footer__menu-item hover:text-primary">Services</Link>
          <Link to="/products" className="footer__menu-item hover:text-primary">Products</Link>
          <Link to="/ai-solutions" className="footer__menu-item hover:text-primary">AI Solutions</Link>
          <Link to="/contact" className="footer__menu-item hover:text-primary">Contact</Link>
        </div>
        <div className="footer__social flex gap-4 mt-4 md:mt-0">
          <a href="https://twitter.com/brittekdigital" className="footer__social-link hover:text-primary" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="https://facebook.com/brittekdigital" className="footer__social-link hover:text-primary" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="https://linkedin.com/company/brittekdigital" className="footer__social-link hover:text-primary" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://instagram.com/brittekdigital" className="footer__social-link hover:text-primary" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        </div>
        <button className="scroll-to-top mt-4 md:mt-0 p-2 bg-primary rounded-full hover:bg-secondary" onClick={scrollToTop} aria-label="Scroll to Top">
          <i className="fas fa-arrow-up"></i>
        </button>
        <div className="footer__controls flex items-center gap-4 mt-4 md:mt-0">
          <button className="dark-mode-toggle p-2 rounded-full bg-primary hover:bg-secondary" aria-label="Toggle Dark Mode">
            <i className="fas fa-moon"></i>
          </button>
          <Link to="/contact" className="footer__button px-4 py-2 bg-primary text-dark rounded-lg hover:bg-secondary">Get in Touch</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
