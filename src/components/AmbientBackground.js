import React, { useEffect, useRef } from 'react';

const AmbientBackground = ({ theme = 'dark' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking for spotlight
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Create particles
    const particleCount = Math.min(Math.floor(width / 22), 65);
    const particles = [];

    const isLight = document.documentElement.classList.contains('light-mode');

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: isLight ? Math.random() * 0.35 + 0.15 : Math.random() * 0.5 + 0.2,
        color: isLight
          ? (i % 3 === 0 ? '79, 70, 229' : i % 3 === 1 ? '147, 51, 234' : '2, 132, 199')
          : (i % 3 === 0 ? '99, 102, 241' : i % 3 === 1 ? '168, 85, 247' : '14, 165, 233'),
      });
    }

    const render = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const isCurrentLight = document.documentElement.classList.contains('light-mode');

      // Draw mouse spotlight gradient
      const spotlight = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        Math.max(width, height) * 0.45
      );

      if (isCurrentLight) {
        spotlight.addColorStop(0, 'rgba(79, 70, 229, 0.08)');
        spotlight.addColorStop(0.5, 'rgba(147, 51, 234, 0.03)');
        spotlight.addColorStop(1, 'rgba(255, 255, 255, 0)');
      } else {
        spotlight.addColorStop(0, 'rgba(99, 102, 241, 0.12)');
        spotlight.addColorStop(0.5, 'rgba(168, 85, 247, 0.05)');
        spotlight.addColorStop(1, 'rgba(0, 0, 0, 0)');
      }

      ctx.fillStyle = spotlight;
      ctx.fillRect(0, 0, width, height);

      // Draw connecting lines between close particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p1.color}, ${p1.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${p1.color}, 0.8)`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = isCurrentLight ? 0.1 * (1 - dist / 130) : 0.15 * (1 - dist / 130);
            ctx.strokeStyle = isCurrentLight
              ? `rgba(79, 70, 229, ${lineAlpha})`
              : `rgba(147, 197, 253, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default AmbientBackground;
