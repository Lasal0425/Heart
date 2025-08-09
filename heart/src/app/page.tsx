"use client";
import React, { useState, useEffect } from 'react';

// Define the star type
interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkle: number;
}

const HeartAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFinalText, setShowFinalText] = useState(false);
  const [stars, setStars] = useState<Star[]>([]);

  // Generate random stars for background
  useEffect(() => {
    const generateStars = () => {
      const starArray: Star[] = [];
      for (let i = 0; i < 150; i++) {
        starArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2.5 + 0.5,
          opacity: Math.random() * 0.8 + 0.3,
          twinkle: Math.random() * 4 + 2
        });
      }
      setStars(starArray);
    };
    generateStars();
  }, []);

  const handleClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      // Show final text after animation completes
      setTimeout(() => {
        setShowFinalText(true);
      }, 2800);
    }
  };

  // Heart pieces SVG paths - each piece represents part of a broken heart
  const heartPieces = [
    // Top left curve
    { 
      path: "M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5 C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09",
      initialX: 10,
      initialY: 80,
      initialRotate: -25,
      targetX: 50,
      targetY: 50,
      targetRotate: 0
    },
    // Top right curve  
    { 
      path: "M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5 C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09C13.09,3.81,14.76,3,16.5,3 C19.58,3,22,5.42,22,8.5",
      initialX: 75,
      initialY: 82,
      initialRotate: 30,
      targetX: 50,
      targetY: 50,
      targetRotate: 0
    },
    // Middle piece
    { 
      path: "M12,8l4,6l-4,7l-4-7z",
      initialX: 45,
      initialY: 85,
      initialRotate: 15,
      targetX: 50,
      targetY: 50,
      targetRotate: 0
    },
    // Bottom left
    { 
      path: "M8,14l4,7l-2,3z",
      initialX: 25,
      initialY: 78,
      initialRotate: -40,
      targetX: 50,
      targetY: 50,
      targetRotate: 0
    },
    // Bottom right
    { 
      path: "M16,14l-4,7l2,3z",
      initialX: 65,
      initialY: 76,
      initialRotate: 45,
      targetX: 50,
      targetY: 50,
      targetRotate: 0
    }
  ];

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 overflow-hidden cursor-pointer relative"
      onClick={handleClick}
    >
      {/* Enhanced starry background with romantic colors */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDuration: `${star.twinkle}s`,
              background: star.size > 2 ? 
                'linear-gradient(45deg, #fbbf24, #f59e0b, #fde047)' : 
                star.size > 1.5 ? 
                'linear-gradient(45deg, #ec4899, #f472b6)' : 
                '#ffffff',
              boxShadow: star.size > 2 ? 
                '0 0 6px #fbbf24' : 
                star.size > 1.5 ? 
                '0 0 4px #ec4899' : 
                '0 0 2px #ffffff'
            }}
          />
        ))}
      </div>

      {/* Floating rose petals - better distributed */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 opacity-40"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 80 + 10}%`,
              fontSize: `${14 + Math.random() * 10}px`,
              animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            🌸
          </div>
        ))}
        {/* Additional scattered petals */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`petal-${i}`}
            className="absolute text-rose-300 opacity-25"
            style={{
              left: `${Math.random() * 95}%`,
              top: `${Math.random() * 90}%`,
              fontSize: `${10 + Math.random() * 6}px`,
              animation: `float ${4 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.7}s`,
              transform: `rotate(${Math.random() * 180}deg)`,
            }}
          >
            🌺
          </div>
        ))}
      </div>

      {/* Content container with top alignment for text */}
      <div className="relative z-10 w-full min-h-screen flex flex-col">
        
        {/* Initial text - moved to top */}
        <div className={`text-center pt-8 pb-4 transition-opacity duration-1000 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg" style={{ color: '#ffffff' }}>
            I'm sorry for everything 💔
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 drop-shadow-md" style={{ color: '#ffffff' }}>
            This is not the end...
          </p>
          {!isAnimating && (
            <p className="text-sm text-white opacity-70 mt-6 animate-pulse" style={{ color: '#ffffff' }}>
              ✨ Click anywhere to witness the magic ✨
            </p>
          )}
        </div>

        {/* Heart pieces container - centered vertically in remaining space */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="relative w-full max-w-2xl h-96 mx-auto">
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full z-10"
              style={{ minHeight: '400px', minWidth: '400px' }}
            >
              {heartPieces.map((piece, index) => (
                <g
                  key={index}
                  className={`transition-all duration-2500 ease-in-out`}
                  style={{
                    transform: `translate(${
                      isAnimating ? piece.targetX - 50 : piece.initialX - 50
                    }%, ${
                      isAnimating ? piece.targetY - 50 : piece.initialY - 50
                    }%) rotate(${
                      isAnimating ? piece.targetRotate : piece.initialRotate
                    }deg)`,
                    transformOrigin: 'center',
                    transitionDelay: `${index * 250}ms`,
                    opacity: isAnimating ? 0 : 1,
                    transitionProperty: 'transform, opacity',
                  }}
                >
                  <path
                    d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5 C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09C13.09,3.81,14.76,3,16.5,3 C19.58,3,22,5.42,22,8.5c0,3.78-3.4,6.86-8.55,11.54L12,21.35z"
                    fill="#7f1d1d"
                    stroke="#dc2626"
                    strokeWidth="0.5"
                  />
                </g>
              ))}
              
              {/* Complete heart that replaces pieces when they come together */}
              <g
                className={`transition-all duration-1500 ${
                  isAnimating ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transform: 'translate(0%, 0%)',
                  transformOrigin: 'center',
                  transitionDelay: '2s',
                }}
              >
                <defs>
                  <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#ff6b9d', stopOpacity: 1}} />
                    <stop offset="50%" style={{stopColor: '#ff1744', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#c2185b', stopOpacity: 1}} />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M50,75l-3.5-3.2C35,60.8,25,52.2,25,42.5C25,35.4,30.9,29.5,38,29.5c3.9,0,7.6,1.8,10,4.6c2.4-2.8,6.1-4.6,10-4.6c7.1,0,13,5.9,13,13c0,9.7-10,18.3-21.5,29.3L50,75z"
                  fill="url(#heartGradient)"
                  filter="url(#glow)"
                  className="animate-pulse"
                  style={{
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                />
              </g>
            </svg>
          </div>
        </div>

        {/* Final text - positioned at bottom */}
        <div className={`text-center pb-12 transition-all duration-2000 ${showFinalText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg" style={{ color: '#ffffff' }}>
            Even shattered hearts can love again ❤️
          </h2>
          <p className="text-xl md:text-2xl text-white opacity-90 drop-shadow-md mb-4" style={{ color: '#ffffff' }}>
            And I won't let this shatter again
          </p>
          <p className="text-lg text-white opacity-75 italic" style={{ color: '#ffffff' }}>
            Forever and always, my love 💕
          </p>
        </div>
      </div>

      {/* Enhanced floating hearts animation for final state */}
      {showFinalText && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-80"
              style={{
                left: `${15 + i * 7}%`,
                top: `${65 + (i % 3) * 8}%`,
                fontSize: `${16 + Math.random() * 12}px`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                animation: 'float 4s ease-in-out infinite',
                color: i % 3 === 0 ? '#ff6b9d' : i % 3 === 1 ? '#ff1744' : '#ec4899'
              }}
            >
              {i % 4 === 0 ? '💖' : i % 4 === 1 ? '💕' : i % 4 === 2 ? '❤️' : '💘'}
            </div>
          ))}
        </div>
      )}

      {/* Romantic sparkles */}
      {showFinalText && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-yellow-200 opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: '12px',
                animation: `twinkle ${2 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              ✨
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default HeartAnimation;