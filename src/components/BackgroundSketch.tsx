
import React from 'react';
import { ReactP5Wrapper, P5CanvasInstance } from '@p5-wrapper/react';

function sketch(p: P5CanvasInstance) {
  let zoff = 0;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
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
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
}

const BackgroundSketch = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 0, width: '100vw', height: '100vh' }}>
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
};

export default BackgroundSketch;
