import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ComponentProps } from '../types';
import { ICONS } from '../constants';
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

  const handleNavClick = (targetId: string, e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    const nav = document.querySelector('.nav');
    nav?.classList.remove('active');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    window.history.replaceState(null, '', `#${targetId}`);
  };

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
            <i className={ICONS.HEART}></i>
            <span>Thiệp Cưới</span>
          </motion.div>
          
          <nav className="nav">
            <a href="#home" className="nav-link" onClick={(e) => handleNavClick('home', e)}>
              <i className={ICONS.HOME}></i>
              <span>Trang chủ</span>
            </a>
            <a href="#invitation" className="nav-link" onClick={(e) => handleNavClick('invitation', e)}>
              <i className={ICONS.ENVELOPE}></i>
              <span>Thiệp mời</span>
            </a>
            <a href="#gallery" className="nav-link" onClick={(e) => handleNavClick('gallery', e)}>
              <i className={ICONS.IMAGES}></i>
              <span>Khoảnh khắc</span>
            </a>
            <a href="#qr" className="nav-link" onClick={(e) => handleNavClick('qr', e)}>
              <i className={ICONS.QR_CODE}></i>
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
            <i className={ICONS.BARS}></i>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;