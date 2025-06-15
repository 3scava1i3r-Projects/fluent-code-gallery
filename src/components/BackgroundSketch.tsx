
import React from 'react';
import { ReactP5Wrapper, P5CanvasInstance } from '@p5-wrapper/react';

class Particle {
  p: P5CanvasInstance;
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;

  constructor(p: P5CanvasInstance) {
    this.p = p;
    this.x = p.random(p.width);
    this.y = p.random(p.height);
    this.vx = p.random(-0.5, 0.5);
    this.vy = p.random(-0.5, 0.5);
    this.alpha = p.random(50, 150);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > this.p.width) {
      this.vx *= -1;
    }
    if (this.y < 0 || this.y > this.p.height) {
      this.vy *= -1;
    }
  }

  show() {
    this.p.noStroke();
    this.p.fill(255, 255, 255, this.alpha);
    this.p.circle(this.x, this.y, 1.5);
  }
}

function sketch(p: P5CanvasInstance) {
  let particles: Particle[] = [];
  
  const setupParticles = () => {
    const numParticles = Math.floor(p.width / 20);
    particles = [];
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle(p));
    }
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    setupParticles();
  };

  p.draw = () => {
    p.clear();
    
    for (const particle of particles) {
      particle.update();
      particle.show();
    }

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const d = p.dist(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
        if (d < 120) {
          const alpha = p.map(d, 0, 120, 40, 0);
          p.stroke(255, 255, 255, alpha);
          p.line(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
        }
      }
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    setupParticles();
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
