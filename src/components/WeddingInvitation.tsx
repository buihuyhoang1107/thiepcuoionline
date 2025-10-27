import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { TEMPLATE_STYLES } from '../constants';
import { ComponentProps, TemplateType } from '../types';
import Confetti from './Confetti';
import Footer from './Footer';
import Gallery from './Gallery';
import Header from './Header';
import Hero from './Hero';
import Invitation from './Invitation';
import QRCode from './QRCode';
import './WeddingInvitation.css';

const WeddingInvitation: React.FC<ComponentProps> = ({ data }) => {
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [currentTemplate, setCurrentTemplate] = useState<TemplateType>(data.template as TemplateType);

  useEffect(() => {
    // Trigger confetti on page load
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  }, []);

  const currentStyle = TEMPLATE_STYLES[currentTemplate] || TEMPLATE_STYLES.classic;

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
      } as React.CSSProperties}
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