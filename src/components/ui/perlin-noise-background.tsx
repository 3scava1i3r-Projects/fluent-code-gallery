// src/components/ui/perlin-noise-background.tsx

import React, { useRef, useEffect } from 'react';
import { createNoise2D } from 'simplex-noise';
interface PerlinNoiseBackgroundProps {
  className?: string;
}

export const PerlinNoiseBackground: React.FC<PerlinNoiseBackgroundProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const noiseOffset = useRef(0);
  const simplex = createNoise2D();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // --- Configuration based on your p5.js example ---
    const gap = 25; // Spacing between dots
    const dotSizeMultiplier = 0.6; // Max size of a dot relative to the gap
    const xScale = 0.005; // Noise scaling on the x-axis
    const yScale = 0.005; // Noise scaling on the y-axis
    const animationSpeed = 0.0005; // How fast the noise pattern moves

    let parentElement: HTMLElement | null = canvas.parentElement;
    
    const resizeCanvas = () => {
      if (parentElement) {
        canvas.width = parentElement.clientWidth;
        canvas.height = parentElement.clientHeight;
      }
    };
    
    const drawGrid = () => {
      if (!ctx || !canvas) return;
      
      // Use a subtle color from the theme, with transparency
      ctx.fillStyle = 'rgba(128, 128, 128, 0.15)';
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      noiseOffset.current += animationSpeed;

      for (let x = 0; x < canvas.width; x += gap) {
        for (let y = 0; y < canvas.height; y += gap) {
          // Get a noise value between -1 and 1
          const noiseValue = simplex(x * xScale, y * yScale + noiseOffset.current);
          
          // Normalize the noise value to a 0-1 range
          const normalizedNoise = (noiseValue + 1) / 2;
          
          // Calculate diameter based on noise. The dot can be up to `gap * multiplier` wide.
          const diameter = normalizedNoise * gap * dotSizeMultiplier;
          
          // Don't draw tiny dots to keep it clean
          if (diameter > 1) {
            ctx.beginPath();
            ctx.arc(x, y, diameter / 2, 0, 2 * Math.PI, false);
            ctx.fill();
          }
        }
      }
    };

    const animate = () => {
      drawGrid();
      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Initial setup
    resizeCanvas();
    animate();

    // Handle resize
    window.addEventListener('resize', resizeCanvas);

    // Cleanup function to stop animation and remove listener on component unmount
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
};