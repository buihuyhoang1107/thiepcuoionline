import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { BREAKPOINTS, TEMPLATE_STYLES } from '../../constants';
import { ComponentProps, TemplateType } from '../../types';
import Confetti from '../../components/Confetti';
import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Invitation from '../../components/Invitation';
import QRCode from '../../components/QRCode';
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
        '--main-font': currentStyle.font,
        '--breakpoint-mobile': BREAKPOINTS.MOBILE,
        '--breakpoint-tablet': BREAKPOINTS.TABLET,
        '--breakpoint-desktop': BREAKPOINTS.DESKTOP,
        '--breakpoint-large': BREAKPOINTS.LARGE
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
        <Gallery data={data} />
        <Invitation data={data} />
        <QRCode data={data} />
      </motion.main>
      
      <Footer data={data} />
    </div>
  );
};

export default WeddingInvitation;