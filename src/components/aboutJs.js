import React, { useEffect, useRef } from 'react';
import Particles from './particleground'; // Import the particleground library

export default function ParticlegroundDemo() {
  const particlesRef = useRef(null);

  useEffect(() => {
    const particles = new Particles(particlesRef.current, {
      dotColor: '#5cbdaa',
      lineColor: '#5cbdaa'
    });

    const intro = document.getElementById('intro');
    intro.style.marginTop = -intro.offsetHeight / 2 + 'px';

    return () => {
      particles.destroy(); // Clean up the particles instance when the component unmounts
    };
  }, []);

  return <div id="particles" ref={particlesRef}></div>;
}
