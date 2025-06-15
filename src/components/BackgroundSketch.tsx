
import React from 'react';
import { ReactP5Wrapper, P5CanvasInstance } from '@p5-wrapper/react';

function sketch(p: P5CanvasInstance) {
  let zoff = 0;

  p.setup = () => {
    const parent = p.canvas.parentElement;
    const width = parent ? parent.offsetWidth : p.windowWidth;
    const height = parent ? parent.offsetHeight : p.windowHeight;
    p.createCanvas(width, height);
    p.noStroke();
  };

  p.draw = () => {
    p.clear();
    const step = 30; // Distance between dots
    const noiseScale = 0.005; // Scale of noise

    for (let y = 0; y < p.height; y += step) {
      for (let x = 0; x < p.width; x += step) {
        const noiseVal = p.noise(x * noiseScale, y * noiseScale, zoff);
        const diameter = p.map(noiseVal, 0, 1, 0, 4);
        p.fill(255, 255, 255, 100);
        p.circle(x, y, diameter);
      }
    }

    zoff += 0.002; // Animate the noise over time
  };

  p.windowResized = () => {
    const parent = p.canvas.parentElement;
    const width = parent ? parent.offsetWidth : p.windowWidth;
    const height = parent ? parent.offsetHeight : p.windowHeight;
    p.resizeCanvas(width, height);
  };
}

const BackgroundSketch = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
};

export default BackgroundSketch;
