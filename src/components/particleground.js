import React, { useRef, useEffect } from 'react';

function deepExtend(out) {
    out = out || {};
    for (let i = 1; i < arguments.length; i++) {
      const obj = arguments[i];
      if (!obj) continue;
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] === 'object') deepExtend(out[key], obj[key]);
          else out[key] = obj[key];
        }
      }
    }
    return out;
  }
  function connectParticles(particle, particles, canvasRef, options) {
    const { ctx } = canvasRef.current;
    const { proximity, curvedLines, lineColor, lineWidth } = options;
  
    particles.forEach((otherParticle) => {
      if (particle === otherParticle) return;
  
      const distance = Math.sqrt(
        (particle.position.x - otherParticle.position.x) ** 2 +
          (particle.position.y - otherParticle.position.y) ** 2
      );
  
      if (distance > proximity) return;
  
      ctx.beginPath();
      ctx.moveTo(particle.position.x, particle.position.y);
  
      if (curvedLines) {
        ctx.quadraticCurveTo(
          (particle.position.x + otherParticle.position.x) / 2,
          (particle.position.y + otherParticle.position.y) / 2,
          otherParticle.position.x,
          otherParticle.position.y
        );
      } else {
        ctx.lineTo(otherParticle.position.x, otherParticle.position.y);
      }
  
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    });
  }

function Particleground() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const rafRef = useRef(null);
  let mouseX = 0;
  let mouseY = 0;
  let winW;
  let winH;
  let desktop = !navigator.userAgent.match(
    /(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i
  );
  let tiltX = 0;
  let pointerX;
  let pointerY;
  let tiltY = 0;
  let paused = false;

  const options = {
    minSpeedX: 0.1,
    maxSpeedX: 0.7,
    minSpeedY: 0.1,
    maxSpeedY: 0.7,
    directionX: 'center',
    directionY: 'center',
    density: 10000,
    dotColor: '#666666',
    lineColor: '#666666',
    particleRadius: 7,
    lineWidth: 1,
    curvedLines: false,
    proximity: 100,
    parallax: true,
    parallaxMultiplier: 5,
    onInit: () => {},
    onDestroy: () => {}
  };

  function extend(out) {
    out = out || {};
    for (let i = 1; i < arguments.length; i++) {
      const obj = arguments[i];
      if (!obj) continue;
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] === 'object') deepExtend(out[key], obj[key]);
          else out[key] = obj[key];
        }
      }
    }
    return out;
  }

  function Particle(position, speed) {
    this.position = position;
    this.speed = speed;
  }

  Particle.prototype.draw = function () {
    const { ctx } = canvasRef.current;
    ctx.beginPath();
    ctx.arc(
      this.position.x,
      this.position.y,
      options.particleRadius / 2,
      0,
      Math.PI * 2,
      true
    );
    ctx.closePath();
    ctx.fill();
  };

  Particle.prototype.updatePosition = function () {
    const { width, height } = canvasRef.current;
    const { directionX, directionY } = options;

    if (
      this.position.x + this.speed.x > width ||
      this.position.x + this.speed.x < 0
    ) {
      this.speed.x = -this.speed.x;
    }

    if (
      this.position.y + this.speed.y > height ||
      this.position.y + this.speed.y < 0
    ) {
      this.speed.y = -this.speed.y;
    }

    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
  };

  const init = () => {
    const { width, height } = canvasRef.current;
    const canvasSupport = !!canvasRef.current.getContext;

    if (!canvasSupport) return;

    const ctx = canvasRef.current.getContext('2d');
    ctx.fillStyle = options.dotColor;
    ctx.strokeStyle = options.lineColor;
    ctx.lineWidth = options.lineWidth;

    const numParticles = Math.round((width * height) / options.density);

    for (let i = 0; i < numParticles; i++) {
      const position = {
        x: Math.ceil(Math.random() * width),
        y: Math.ceil(Math.random() * height)
      };
      const speed = {
        x: getSpeed(options.directionX),
        y: getSpeed(options.directionY)
    };

    particlesRef.current.push(new Particle(position, speed));
  }

  requestAnimationFrame(update);
  options.onInit();
};

const getSpeed = (direction) => {
  const minSpeedX = options.minSpeedX;
  const maxSpeedX = options.maxSpeedX;
  const minSpeedY = options.minSpeedY;
  const maxSpeedY = options.maxSpeedY;

  switch (direction) {
    case 'top':
      return { x: 0, y: randomFloatFromRange(minSpeedY, maxSpeedY) * -1 };
    case 'top-right':
      return {
        x: randomFloatFromRange(minSpeedX, maxSpeedX),
        y: randomFloatFromRange(minSpeedY, maxSpeedY) * -1
      };
    case 'right':
      return { x: randomFloatFromRange(minSpeedX, maxSpeedX), y: 0 };
    case 'bottom-right':
      return {
        x: randomFloatFromRange(minSpeedX, maxSpeedX),
        y: randomFloatFromRange(minSpeedY, maxSpeedY)
      };
    case 'bottom':
      return { x: 0, y: randomFloatFromRange(minSpeedY, maxSpeedY) };
    case 'bottom-left':
      return {
        x: randomFloatFromRange(minSpeedX, maxSpeedX) * -1,
        y: randomFloatFromRange(minSpeedY, maxSpeedY)
      };
    case 'left':
      return { x: randomFloatFromRange(minSpeedX, maxSpeedX) * -1, y: 0 };
    case 'top-left':
      return {
        x: randomFloatFromRange(minSpeedX, maxSpeedX) * -1,
        y: randomFloatFromRange(minSpeedY, maxSpeedY) * -1
      };
    default:
      return { x: 0, y: 0 };
  }
};

const randomFloatFromRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

const update = () => {
  const { width, height } = canvasRef.current;
  const { parallax, parallaxMultiplier } = options;
  const { ctx } = canvasRef.current;

  rafRef.current = requestAnimationFrame(update);

  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < particlesRef.current.length; i++) {
    const particle = particlesRef.current[i];
    particle.updatePosition();

    if (options.curvedLines) {
      connectParticles(particle, particlesRef.current.slice(i));
    }

    particle.draw();

    if (parallax) {
      const { x, y } = particle.position;
      const newX = x - (pointerX - winW / 2) / (width / parallaxMultiplier);
      const newY = y - (pointerY - winH / 2) / (height / parallaxMultiplier);
      particle.position.x = newX;
      particle.position.y = newY;
    }
  }

  if (!paused) {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(update);
  }
};

useEffect(() => {
  winW = window.innerWidth;
  winH = window.innerHeight;
  canvasRef.current.width = winW;
  canvasRef.current.height = winH;

  init();

  const handleMouseMove = (event) => {
    mouseX = event.pageX;
    mouseY = event.pageY;
    pointerX = event.pageX;
    pointerY = event.pageY;
  };

  const handleDeviceOrientation = (event) => {
    if (event.gamma && event.beta) {
      // Convert degrees to radians
      const gammaRad = (event.gamma * Math.PI) / 180;
      const betaRad = (event.beta * Math.PI) / 180;

      // Set values for tiltX and tiltY based on the orientation of the device
      tiltX = gammaRad;
      tiltY = betaRad;
    }
  };

  const handleResize = () => {
    winW = window.innerWidth;
    winH = window.innerHeight;
    canvasRef.current.width = winW;
    canvasRef.current.height = winH;
  };

  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('deviceorientation', handleDeviceOrientation);
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('deviceorientation', handleDeviceOrientation);
    window.removeEventListener('resize', handleResize);

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    options.onDestroy();
  };
}, []);

return <canvas ref={canvasRef}></canvas>;

}

export default Particleground;

