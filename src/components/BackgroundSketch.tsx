
import React from 'react';
import { ReactP5Wrapper, P5CanvasInstance } from '@p5-wrapper/react';

function sketch(p: P5CanvasInstance) {
  p.setup = () => {
    const parent = (p as any).canvas.parentElement;
    const width = parent ? parent.offsetWidth : p.windowWidth;
    const height = parent ? parent.offsetHeight : p.windowHeight;
    p.createCanvas(width, height);
    p.noLoop(); // We only need to draw it once
  };

  p.draw = () => {
    p.clear(0, 0, 0, 0); // Clear with a transparent background
    const step = 40; // Distance between grid lines
    
    // Using HSL color mode. This color corresponds to Tailwind's `ring` color.
    p.colorMode(p.HSL);
    p.stroke(244, 45, 51, 0.15); // H, S, L, Alpha
    p.strokeWeight(1);

    // Draw vertical lines
    for (let x = 0; x < p.width; x += step) {
      p.line(x, 0, x, p.height);
    }
    // Draw horizontal lines
    for (let y = 0; y < p.height; y += step) {
      p.line(0, y, p.width, y);
    }
  };

  p.windowResized = () => {
    const parent = (p as any).canvas.parentElement;
    const width = parent ? parent.offsetWidth : p.windowWidth;
    const height = parent ? parent.offsetHeight : p.windowHeight;
    p.resizeCanvas(width, height);
    p.draw(); // Redraw the grid on window resize
  };
}

const BackgroundSketch = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
};

export default BackgroundSketch;
