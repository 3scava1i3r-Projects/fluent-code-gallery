import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [variant, setVariant] = useState('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);

      const target = e.target as HTMLElement;
      if (target.closest('a, button')) {
        setVariant('link');
      } else if (target.closest('img')) {
        setVariant('image');
      } else {
        setVariant('default');
      }
    };

    const onMouseLeave = () => setIsHidden(true);
    const onMouseEnter = () => setIsHidden(false);

    document.documentElement.addEventListener('mousemove', onMouseMove);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    return () => {
      document.documentElement.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
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
      opacity: 1,
      scale: 1,
    },
    link: {
      height: 64,
      width: 64,
      backgroundColor: 'hsla(var(--primary), 0.2)',
      border: '1px solid hsl(var(--primary))',
      opacity: 1,
      scale: 1,
    },
    image: {
      height: 80,
      width: 80,
      backgroundColor: 'hsl(var(--primary))',
      mixBlendMode: 'difference',
      border: 'none',
      opacity: 1,
      scale: 1,
    },
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          x: position.x,
          y: position.y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        variants={cursorVariants}
        animate={isHidden ? 'hidden' : variant}
        transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.5 }}
      />
    </>
  );
};

export default CustomCursor;
