import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ComponentProps } from '../types';
import './Header.css';

const Header: React.FC<ComponentProps> = ({ data }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <div className="header-content">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <i className="fas fa-heart"></i>
            <span>Thiệp Cưới</span>
          </motion.div>
          
          <nav className="nav">
            <a href="#home" className="nav-link">
              <i className="fas fa-home"></i>
              <span>Trang chủ</span>
            </a>
            <a href="#invitation" className="nav-link">
              <i className="fas fa-envelope"></i>
              <span>Thiệp mời</span>
            </a>
            <a href="#gallery" className="nav-link">
              <i className="fas fa-images"></i>
              <span>Khoảnh khắc</span>
            </a>
            <a href="#qr" className="nav-link">
              <i className="fas fa-qrcode"></i>
              <span>Chuyển khoản</span>
            </a>
          </nav>

          <motion.button 
            className="menu-toggle"
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const nav = document.querySelector('.nav');
              nav?.classList.toggle('active');
            }}
          >
            <i className="fas fa-bars"></i>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;