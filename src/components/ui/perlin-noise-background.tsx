// src/components/ui/perlin-noise-background.tsx

import React, { useRef, useEffect, useState } from 'react';
import { createNoise2D } from 'simplex-noise';

interface PerlinNoiseBackgroundProps {
  className?: string;
  color?: string; // CSS color, defaults to theme-aware
  mouseInteraction?: boolean; // Enable mouse-based interactivity
  animationSpeed?: number; // Speed of animation, 0 to pause
  dotSizeMultiplier?: number; // Max dot size relative to gap
}

export const PerlinNoiseBackground: React.FC<PerlinNoiseBackgroundProps> = ({
  className,
  color = 'hsl(var(--muted) / 0.1)',
  mouseInteraction = true,
  animationSpeed = 0.0025,
  dotSizeMultiplier = 0.6
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const noiseOffset = useRef(0);
  const [mousePos, setMousePos] = useState({ x: -1, y: -1 });
  const simplex = createNoise2D();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // --- Configuration ---
    const gap = 25; // Spacing between dots
    const xScale = 0.005; // Noise scaling on the x-axis
    const yScale = 0.005; // Noise scaling on the y-axis

    let parentElement: HTMLElement | null = canvas.parentElement;

    const resizeCanvas = () => {
      if (parentElement) {
        canvas.width = parentElement.clientWidth;
        canvas.height = parentElement.clientHeight;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const drawGrid = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (animationSpeed > 0) {
        noiseOffset.current += animationSpeed;
      }

      for (let x = 0; x < canvas.width; x += gap) {
        for (let y = 0; y < canvas.height; y += gap) {
          // Get a noise value between -1 and 1
          const noiseValue = simplex(x * xScale, y * yScale + noiseOffset.current);

          // Normalize the noise value to a 0-1 range
          const normalizedNoise = (noiseValue + 1) / 2;

          // Calculate diameter based on noise
          const diameter = normalizedNoise * gap * dotSizeMultiplier;

          // Calculate opacity based on noise
          let opacity = normalizedNoise * 0.2 + 0.05; // Base 0.05-0.25

          // Mouse interaction: increase opacity based on proximity
          if (mouseInteraction && mousePos.x >= 0 && mousePos.y >= 0) {
            const dist = Math.sqrt((x - mousePos.x) ** 2 + (y - mousePos.y) ** 2);
            const maxDist = 200; // pixels
            const proximity = Math.max(0, 1 - dist / maxDist);
            opacity += proximity * 0.3; // Add up to 0.3 for close mouse
          }

          // Don't draw tiny dots to keep it clean
          if (diameter > 1) {
            // For now, use gray with dynamic opacity - making color prop fully dynamic would require HSL parsing
            ctx.fillStyle = `rgba(128, 128, 128, ${opacity})`;
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

    // Handle mouse interaction
    if (mouseInteraction) {
      canvas.addEventListener('mousemove', handleMouseMove);
    }

    // Handle resize
    window.addEventListener('resize', resizeCanvas);

    // Cleanup function to stop animation and remove listeners on component unmount
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      if (mouseInteraction) {
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [color, mouseInteraction, animationSpeed, dotSizeMultiplier]);

  return <canvas ref={canvasRef} className={className} />;
};
