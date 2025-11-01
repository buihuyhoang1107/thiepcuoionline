import { AnimatePresence, motion } from 'framer-motion';
import React, { useMemo, useState } from 'react';
import { ICONS } from '../../constants';
import { birthdayData } from '../../data/birthdayData';
import './BirthdayPage.css';

const BirthdayPage: React.FC = () => {
  const showImg = birthdayData.showImg !== false; // Default true
  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>({});

  // Shuffle mảng để tạo layout ngẫu nhiên như Pinterest
  const shuffledPeople = useMemo(() => {
    return [...birthdayData.people]
      .sort(() => Math.random() - 0.5);
  }, []);

  const logoUrl = birthdayData.logo 
    ? `${process.env.PUBLIC_URL}/${birthdayData.logo}`
    : null;

  const handleImageLoad = (personId: string) => {
    setImageLoaded(prev => ({ ...prev, [personId]: true }));
  };

  return (
    <div className={`birthday-page ${showImg ? 'show-images' : 'hide-images'}`}>
      {/* Animated background particles */}
      <div className="animated-background">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Floating Birthday Icons */}
      <div className="floating-icons">
        {/* Snowflakes */}
        <motion.i 
          className={`${ICONS.BIRTHDAY_CAKE} floating-icon snowflake`}
          animate={{
            y: [0, -100, 0],
            x: [0, 20, 0],
            rotate: [0, 360],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: '10%',
            top: '10%',
            fontSize: '2rem'
          }}
        />
        <motion.i 
          className={`${ICONS.BIRTHDAY_CAKE} floating-icon snowflake`}
          animate={{
            y: [0, -120, 0],
            x: [0, -30, 0],
            rotate: [0, -360],
            opacity: [0.2, 0.7, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 1
          }}
          style={{
            left: '80%',
            top: '15%',
            fontSize: '1.5rem'
          }}
        />
        <motion.i 
          className={`${ICONS.BIRTHDAY_CAKE} floating-icon snowflake`}
          animate={{
            y: [0, -150, 0],
            x: [0, 40, 0],
            rotate: [0, 360],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
          style={{
            left: '50%',
            top: '20%',
            fontSize: '1.8rem'
          }}
        />

        {/* Balloons */}
        <motion.i 
          className={`${ICONS.HEART} floating-icon balloon`}
          animate={{
            y: [0, -200, 0],
            x: [0, 30, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: '15%',
            top: '70%',
            fontSize: '2.5rem',
            color: '#ff6b6b'
          }}
        />
        <motion.i 
          className={`${ICONS.HEART} floating-icon balloon`}
          animate={{
            y: [0, -180, 0],
            x: [0, -25, 0],
            rotate: [0, -10, 10, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          style={{
            left: '75%',
            top: '60%',
            fontSize: '2rem',
            color: '#667eea'
          }}
        />
        <motion.i 
          className={`${ICONS.HEART} floating-icon balloon`}
          animate={{
            y: [0, -220, 0],
            x: [0, 35, 0],
            rotate: [0, 20, -20, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          style={{
            left: '60%',
            top: '80%',
            fontSize: '2.3rem',
            color: '#ffd700'
          }}
        />

        {/* Confetti/Birthday Cake */}
        <motion.i 
          className={`${ICONS.BIRTHDAY_CAKE} floating-icon confetti`}
          animate={{
            y: [0, -100, -200],
            x: [0, 50, 100],
            rotate: [0, 720],
            scale: [1, 1.5, 0.5],
            opacity: [1, 1, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0
          }}
          style={{
            left: '20%',
            bottom: '10%',
            fontSize: '1.5rem'
          }}
        />
        <motion.i 
          className={`${ICONS.BIRTHDAY_CAKE} floating-icon confetti`}
          animate={{
            y: [0, -120, -240],
            x: [0, -40, -80],
            rotate: [0, -720],
            scale: [1, 1.3, 0.3],
            opacity: [1, 1, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeOut",
            delay: 2
          }}
          style={{
            left: '70%',
            bottom: '15%',
            fontSize: '1.3rem'
          }}
        />
        <motion.i 
          className={`${ICONS.BIRTHDAY_CAKE} floating-icon confetti`}
          animate={{
            y: [0, -90, -180],
            x: [0, 60, 120],
            rotate: [0, 540],
            scale: [1, 1.4, 0.4],
            opacity: [1, 1, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeOut",
            delay: 4
          }}
          style={{
            left: '40%',
            bottom: '8%',
            fontSize: '1.6rem'
          }}
        />
      </div>

     

      {/* Header cố định */}
      <motion.div
        className="birthday-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
         {/* Logo cố định ở góc trái trên cùng */}
      <AnimatePresence>
        {logoUrl && (
          <motion.div
            className="birthday-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={logoUrl} alt="Logo" />
          </motion.div>
        )}
      </AnimatePresence>
        <motion.h1
          className="month-title"
          animate={{
            backgroundPosition: ["0%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse" as const,
          }}
        >
          {birthdayData.month} {birthdayData.year}
        </motion.h1>
        <p className="month-subtitle">Chúc mừng sinh nhật những người thân yêu</p>
      </motion.div>

      {/* Pinterest-style Masonry Layout - Tất cả ảnh trong một container */}
      <div className="container">
        <div className="birthday-masonry">
          {shuffledPeople.map((person, index) => {
            const isImageLoaded = imageLoaded[person.id];
            
            return (
              <motion.div
                key={person.id}
                className={`birthday-card ${showImg ? '' : 'no-image'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.2
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                {showImg && (
                  <div className="card-image-wrapper">
                    {!isImageLoaded && (
                      <div className="image-placeholder">
                        <div className="loading-spinner"></div>
                      </div>
                    )}
                    <AnimatePresence>
                      {showImg && (
                        <motion.img
                          src={`${process.env.PUBLIC_URL}/${person.image}`}
                          alt={person.name}
                          className="card-image"
                          loading={index < 12 ? "eager" : "lazy"}
                          initial={{ opacity: 0 }}
                          animate={{ 
                            opacity: isImageLoaded ? 1 : 0
                          }}
                          transition={{ duration: 0.2 }}
                          onLoad={() => handleImageLoad(person.id)}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                )}
                <div className="card-info">
                  <motion.h3 
                    className="card-name"
                    whileHover={{ scale: 1.05 }}
                  >
                    {person.name}
                  </motion.h3>
                  <motion.p 
                    className="card-birthday"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.i 
                      className={ICONS.CALENDAR}
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                    ></motion.i>
                    {person.birthDate}
                    <motion.i 
                      className={ICONS.BIRTHDAY_CAKE}
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.2, 1],
                        y: [0, -5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        delay: 0.5
                      }}
                      style={{ marginLeft: '8px' }}
                    ></motion.i>
                  </motion.p>
                  {!showImg && (
                    <div className="placeholder-icon">
                      <i className={ICONS.BIRTHDAY_CAKE}></i>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BirthdayPage;

