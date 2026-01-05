import React, { useMemo } from 'react';

const StarryBackground: React.FC = () => {
  // Generate a static array of stars with random properties
  // We use useMemo so they don't re-calculate on every render
  const stars = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`, // 1px to 4px
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 3 + 2}s`, // 2s to 5s
      opacity: Math.random() * 0.7 + 0.3,
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-gradient-to-b from-slate-950 via-[#0a0a2a] to-[#1a1a4a]">
      {/* CSS Injection for custom twinkle keyframe */}
      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.2); }
          }
        `}
      </style>
      
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.3)]"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animation: `twinkle ${star.animationDuration} ease-in-out infinite`,
            animationDelay: star.animationDelay,
          }}
        />
      ))}
      
      {/* Overlay to ensure text readability if needed, though the gradient handles most of it */}
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
};

export default StarryBackground;