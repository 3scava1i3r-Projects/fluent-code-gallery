
import React, { useState, useEffect } from 'react';
import { ReactP5Wrapper, P5CanvasInstance } from '@p5-wrapper/react';

function sketch(p: P5CanvasInstance) {
  let zoff = 0;
  let cursor = { x: -100, y: -100 };

  p.setup = () => {
    const parent = (p as any).canvas.parentElement;
    const width = parent ? parent.offsetWidth : p.windowWidth;
    const height = parent ? parent.offsetHeight : p.windowHeight;
    p.createCanvas(width, height);
    p.loop();
  };
  
  p.updateWithProps = (props: { position?: { x: number, y: number } }) => {
    if (props.position) {
      cursor.x = props.position.x;
      cursor.y = props.position.y;
    }
  };

  p.draw = () => {
    p.clear(0, 0, 0, 0); // Clear with a transparent background

    const radius = 150;
    const step = 8;
    const noiseScale = 0.02;
    zoff += 0.001;

    p.noStroke();
    p.colorMode(p.HSL);

    for (let x_offset = -radius; x_offset < radius; x_offset += step) {
      for (let y_offset = -radius; y_offset < radius; y_offset += step) {
        const x = cursor.x + x_offset;
        const y = cursor.y + y_offset;
        
        const d = p.dist(x, y, cursor.x, cursor.y);
        
        if (d < radius) {
          const noiseVal = p.noise(x * noiseScale, y * noiseScale, zoff);
          const diameter = p.map(noiseVal, 0, 1, 0, 4);
          
          const alpha = p.map(d, 0, radius, 0.4, 0, true);

          p.fill(244, 45, 51, alpha);
          p.circle(x, y, diameter);
        }
      }
    }
  };

  p.windowResized = () => {
    const parent = (p as any).canvas.parentElement;
    const width = parent ? parent.offsetWidth : p.windowWidth;
    const height = parent ? parent.offsetHeight : p.windowHeight;
    p.resizeCanvas(width, height);
  };
}

const BackgroundSketch = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <ReactP5Wrapper sketch={sketch} position={position} />
    </div>
  );
};

export default BackgroundSketch;
