
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [variant, setVariant] = useState('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (target.closest('a, button')) {
        setVariant('link');
      } else if (target.closest('img')) {
        setVariant('image');
      } else {
        setVariant('default');
      }
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  if (isTouchDevice) {
    return null;
  }

  const cursorVariants = {
    default: {
      height: 32,
      width: 32,
      backgroundColor: 'hsla(var(--primary), 0)',
      border: '1px solid hsl(var(--primary))',
    },
    link: {
      height: 64,
      width: 64,
      backgroundColor: 'hsla(var(--primary), 0.2)',
      border: '1px solid hsl(var(--primary))',
    },
    image: {
      height: 80,
      width: 80,
      backgroundColor: 'hsl(var(--primary))',
      mixBlendMode: 'difference',
      border: 'none',
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
      style={{
        x: position.x,
        y: position.y,
        translateX: '-50%',
        translateY: '-50%',
      }}
      variants={cursorVariants}
      animate={variant}
      transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.5 }}
    />
  );
};

export default CustomCursor;
