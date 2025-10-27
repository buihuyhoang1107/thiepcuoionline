import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ConfettiPiece } from '../types';
import './Confetti.css';

const Confetti: React.FC = () => {
  const [confettiPieces, setConfettiPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const pieces: ConfettiPiece[] = [];
    const colors = ['#FFD700', '#FF69B4', '#87CEEB', '#98FB98', '#DDA0DD', '#F0E68C'];
    const shapes: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle'];

    for (let i = 0; i < 50; i++) {
      pieces.push({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        left: Math.random() * 100,
        animationDelay: Math.random() * 3,
        animationDuration: 3 + Math.random() * 2,
        size: 8 + Math.random() * 8
      });
    }

    setConfettiPieces(pieces);
  }, []);

  return (
    <div className="confetti-container">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          className={`confetti-piece confetti-${piece.shape}`}
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.color,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
          }}
          initial={{ 
            y: -100, 
            rotate: 0,
            opacity: 1 
          }}
          animate={{ 
            y: window.innerHeight + 100, 
            rotate: 360,
            opacity: 0 
          }}
          transition={{
            duration: piece.animationDuration,
            delay: piece.animationDelay,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;