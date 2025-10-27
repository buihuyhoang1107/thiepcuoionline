import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Invitation.css';

const Invitation = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="invitation" className="invitation" ref={ref}>
      <div className="container">
        <motion.div
          className="invitation-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div className="invitation-header" variants={itemVariants}>
            <div className="invitation-icon">
              <i className="fas fa-heart"></i>
            </div>
            <h2 className="invitation-title">Thiệp Mời Cưới</h2>
            <div className="invitation-divider"></div>
          </motion.div>

          {/* Main Invitation Card */}
          <motion.div className="invitation-card" variants={itemVariants}>
            <div className="card-header">
              <motion.h3 
                className="couple-names"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {data.couple.groom.name} & {data.couple.bride.name}
              </motion.h3>
              <div className="wedding-date">
                <i className="fas fa-calendar-alt"></i>
                <span>{data.wedding.date}</span>
              </div>
            </div>

            <div className="card-body">
              <motion.p 
                className="invitation-message"
                variants={itemVariants}
              >
                {data.messages.invitation}
              </motion.p>

              <motion.div 
                className="wedding-details"
                variants={itemVariants}
              >
                <div className="detail-item">
                  <div className="detail-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="detail-content">
                    <h4>Giờ tổ chức</h4>
                    <p>{data.wedding.time}</p>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="detail-content">
                    <h4>Địa điểm</h4>
                    <p>{data.wedding.location.name}</p>
                    <p className="address">{data.wedding.location.address}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="parents-info"
                variants={itemVariants}
              >
                <div className="parent-group">
                  <h4>Nhà trai</h4>
                  <p>{data.couple.groom.parent}</p>
                  <p className="groom-name">{data.couple.groom.fullName}</p>
                </div>
                
                <div className="parent-divider">
                  <i className="fas fa-heart"></i>
                </div>
                
                <div className="parent-group">
                  <h4>Nhà gái</h4>
                  <p>{data.couple.bride.parent}</p>
                  <p className="bride-name">{data.couple.bride.fullName}</p>
                </div>
              </motion.div>

              <motion.div 
                className="thank-you-message"
                variants={itemVariants}
              >
                <p>{data.messages.thankYou}</p>
              </motion.div>
            </div>

            <div className="card-footer">
              <motion.div 
                className="decorative-elements"
                variants={itemVariants}
              >
                <div className="decorative-line"></div>
                <i className="fas fa-heart"></i>
                <div className="decorative-line"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* RSVP Section */}
          <motion.div 
            className="rsvp-section"
            variants={itemVariants}
          >
            <h3>Xác nhận tham dự</h3>
            <p>Vui lòng xác nhận tham dự để chúng tôi chuẩn bị tốt nhất</p>
            <motion.button 
              className="btn btn-primary rsvp-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-check-circle"></i>
              Xác nhận tham dự
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Invitation;
