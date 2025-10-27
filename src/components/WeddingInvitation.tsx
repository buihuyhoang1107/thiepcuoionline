import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Hero from './Hero';
import Invitation from './Invitation';
import QRCode from './QRCode';
import Gallery from './Gallery';
import Footer from './Footer';
import Confetti from './Confetti';
import { ComponentProps } from '../types';
import './WeddingInvitation.css';

const WeddingInvitation: React.FC<ComponentProps> = ({ data }) => {
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [currentTemplate, setCurrentTemplate] = useState<string>(data.template || 'classic');

  useEffect(() => {
    // Trigger confetti on page load
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  }, []);

  const templateStyles: Record<string, any> = {
    classic: {
      primary: '#D4AF37',
      secondary: '#8B4513',
      accent: '#FFD700',
      text: '#2C2C2C',
      background: '#FFF8DC',
      font: 'Playfair Display'
    },
    modern: {
      primary: '#E91E63',
      secondary: '#9C27B0',
      accent: '#FF4081',
      text: '#212121',
      background: '#FAFAFA',
      font: 'Poppins'
    },
    romantic: {
      primary: '#FF69B4',
      secondary: '#FF1493',
      accent: '#FFB6C1',
      text: '#4A4A4A',
      background: '#FFF0F5',
      font: 'Dancing Script'
    }
  };

  const currentStyle = templateStyles[currentTemplate] || templateStyles.classic;

  return (
    <div 
      className="wedding-invitation"
      style={{
        '--primary-color': currentStyle.primary,
        '--secondary-color': currentStyle.secondary,
        '--accent-color': currentStyle.accent,
        '--text-color': currentStyle.text,
        '--background-color': currentStyle.background,
        '--main-font': currentStyle.font
      }}
    >
      {showConfetti && <Confetti />}
      
      <Header data={data} />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero data={data} />
        <Invitation data={data} />
        <QRCode data={data} />
        <Gallery data={data} />
      </motion.main>
      
      <Footer data={data} />
    </div>
  );
};

export default WeddingInvitation;
