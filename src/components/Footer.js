import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main Footer Content */}
          <div className="footer-main">
            <div className="footer-section">
              <div className="footer-logo">
                <i className="fas fa-heart"></i>
                <span>Thiệp Cưới Online</span>
              </div>
              <p className="footer-description">
                Chia sẻ niềm vui ngày cưới với những người thân yêu
              </p>
              <div className="social-links">
                <motion.a 
                  href="#" 
                  className="social-link"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-facebook-f"></i>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="social-link"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-instagram"></i>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="social-link"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-twitter"></i>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="social-link"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-youtube"></i>
                </motion.a>
              </div>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Thông tin cưới</h4>
              <div className="footer-info">
                <div className="info-item">
                  <i className="fas fa-calendar-alt"></i>
                  <span>{data.wedding.date}</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-clock"></i>
                  <span>{data.wedding.time}</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{data.wedding.location.name}</span>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Cặp đôi</h4>
              <div className="couple-info">
                <div className="couple-item">
                  <i className="fas fa-male"></i>
                  <div>
                    <p className="couple-name">{data.couple.groom.fullName}</p>
                    <p className="couple-parent">{data.couple.groom.parent}</p>
                  </div>
                </div>
                <div className="couple-divider">
                  <i className="fas fa-heart"></i>
                </div>
                <div className="couple-item">
                  <i className="fas fa-female"></i>
                  <div>
                    <p className="couple-name">{data.couple.bride.fullName}</p>
                    <p className="couple-parent">{data.couple.bride.parent}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Liên hệ</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <span>0123 456 789</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>info@thiepcuoi.com</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-globe"></i>
                  <span>www.thiepcuoi.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-bottom-content">
              <p className="copyright">
                © {currentYear} Thiệp Cưới Online. Tất cả quyền được bảo lưu.
              </p>
              <div className="footer-links">
                <a href="#privacy">Chính sách bảo mật</a>
                <a href="#terms">Điều khoản sử dụng</a>
                <a href="#contact">Liên hệ</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Action Button */}
      <motion.button 
        className="floating-action-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className="fas fa-arrow-up"></i>
      </motion.button>
    </footer>
  );
};

export default Footer;
