import React, { useEffect, useRef } from 'react';

const AmbientBackground = ({ theme = 'dark' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
    const handleMouseMove = (e) => { mouse.targetX = e.clientX; mouse.targetY = e.clientY; };
    window.addEventListener('mousemove', handleMouseMove);

    const isLight = document.documentElement.classList.contains('light-mode');
    const particleCount = Math.min(Math.floor(width / 18), 85);
    const particles = [];

    const colors = isLight
      ? ['91, 33, 182', '147, 51, 234', '2, 132, 199', '5, 150, 105']
      : ['124, 58, 237', '0, 212, 255', '240, 171, 252', '52, 211, 153'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width, y: Math.random() * height,
        radius: Math.random() * 2.2 + 0.8,
        vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
        alpha: isLight ? Math.random() * 0.3 + 0.1 : Math.random() * 0.55 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // 3 slow orbs
    const orbs = [
      { x: width * 0.2, y: height * 0.3, r: Math.min(width, height) * 0.28, color: isLight ? '91, 33, 182' : '124, 58, 237', speed: 0.0006 },
      { x: width * 0.75, y: height * 0.6, r: Math.min(width, height) * 0.22, color: isLight ? '2, 132, 199' : '0, 212, 255', speed: 0.0009 },
      { x: width * 0.5, y: height * 0.8, r: Math.min(width, height) * 0.18, color: isLight ? '147, 51, 234' : '240, 171, 252', speed: 0.0007 },
    ];

    const render = () => {
      time += 0.01;
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;
      ctx.clearRect(0, 0, width, height);

      const isCurrentLight = document.documentElement.classList.contains('light-mode');

      // Draw slow orbs
      orbs.forEach((orb, i) => {
        const ox = orb.x + Math.sin(time * orb.speed * 1000 + i) * width * 0.04;
        const oy = orb.y + Math.cos(time * orb.speed * 800 + i) * height * 0.04;
        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.r);
        grad.addColorStop(0, `rgba(${orb.color}, ${isCurrentLight ? 0.06 : 0.09})`);
        grad.addColorStop(0.5, `rgba(${orb.color}, ${isCurrentLight ? 0.02 : 0.04})`);
        grad.addColorStop(1, `rgba(${orb.color}, 0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      });

      // Mouse spotlight
      const spotlight = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, Math.max(width, height) * 0.5);
      if (isCurrentLight) {
        spotlight.addColorStop(0, 'rgba(91, 33, 182, 0.07)');
        spotlight.addColorStop(0.5, 'rgba(147, 51, 234, 0.02)');
        spotlight.addColorStop(1, 'rgba(255, 255, 255, 0)');
      } else {
        spotlight.addColorStop(0, 'rgba(124, 58, 237, 0.14)');
        spotlight.addColorStop(0.4, 'rgba(0, 212, 255, 0.05)');
        spotlight.addColorStop(1, 'rgba(0, 0, 0, 0)');
      }
      ctx.fillStyle = spotlight;
      ctx.fillRect(0, 0, width, height);

      // Particles + lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx; p1.y += p1.vy;
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p1.color}, ${p1.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${p1.color}, 0.9)`;
        ctx.fill();
        ctx.shadowBlur = 0;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x, dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const la = (isCurrentLight ? 0.08 : 0.12) * (1 - dist / 140);
            ctx.strokeStyle = isCurrentLight ? `rgba(91, 33, 182, ${la})` : `rgba(124, 58, 237, ${la})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 0 }}
    />
  );
};

export default AmbientBackground;
