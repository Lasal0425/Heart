"use client";
import React, { useState, useEffect } from 'react';

const HeartAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFinalText, setShowFinalText] = useState(false);

  const handleClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setShowFinalText(true);
      }, 2800);
    }
  };

  const heartPieces = [
    { path: "M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5 C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09", initialX: 10, initialY: 80, initialRotate: -25, targetX: 50, targetY: 35, targetRotate: 0 },
    { path: "M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5 C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09C13.09,3.81,14.76,3,16.5,3 C19.58,3,22,5.42,22,8.5", initialX: 75, initialY: 82, initialRotate: 30, targetX: 50, targetY: 35, targetRotate: 0 },
    { path: "M12,8l4,6l-4,7l-4-7z", initialX: 45, initialY: 85, initialRotate: 15, targetX: 50, targetY: 35, targetRotate: 0 },
    { path: "M8,14l4,7l-2,3z", initialX: 25, initialY: 78, initialRotate: -40, targetX: 50, targetY: 35, targetRotate: 0 },
    { path: "M16,14l-4,7l2,3z", initialX: 65, initialY: 76, initialRotate: 45, targetX: 50, targetY: 35, targetRotate: 0 }
  ];

  return (
    <div 
      className="min-h-screen bg-romantic overflow-hidden cursor-pointer relative"
      onClick={handleClick}
    >
      {/* Main content */}
      <div className="relative w-full min-h-screen flex flex-col z-10">
        {/* Initial text */}
        <div className={`text-center pt-8 pb-4 transition-opacity duration-1000 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 drop-shadow-lg">
            I'm sorry for everything 💔
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 drop-shadow-md">
            I hope this is not the end for us my love...
          </p>
          {!isAnimating && (
            <p className="text-sm text-gray-600 mt-6 animate-pulse">
              ✨ Click anywhere to see how I would make your heart filled again ✨
            </p>
          )}
        </div>

        {/* Heart - Moved higher */}
        <div className="flex-1 flex items-start justify-center px-4 pt-4">
          <div className="relative w-full max-w-lg h-72 mx-auto">
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full z-10" style={{ minHeight: '280px', minWidth: '280px' }}>
              {heartPieces.map((piece, index) => (
                <g
                  key={index}
                  style={{
                    transform: `translate(${isAnimating ? piece.targetX - 50 : piece.initialX - 50}%, ${isAnimating ? piece.targetY - 50 : piece.initialY - 50}%) rotate(${isAnimating ? piece.targetRotate : piece.initialRotate}deg)`,
                    transformOrigin: 'center',
                    transition: 'transform 2.5s ease-in-out, opacity 2.5s ease-in-out',
                    transitionDelay: `${index * 250}ms`,
                    opacity: isAnimating ? 0 : 1
                  }}
                >
                  <path d={piece.path} fill="#ad1457" stroke="#f06292" strokeWidth="0.5" />
                </g>
              ))}
              {/* Complete heart - Positioned higher */}
              <g style={{
                opacity: isAnimating ? 1 : 0,
                transformOrigin: 'center',
                transition: 'opacity 1.5s ease-in-out',
                transitionDelay: '2s'
              }}>
                <defs>
                  <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#ff6b9d'}} />
                    <stop offset="50%" style={{stopColor: '#ff1744'}} />
                    <stop offset="100%" style={{stopColor: '#c2185b'}} />
                  </linearGradient>
                </defs>
                <path
                  d="M50,60l-3.5-3.2C35,45.8,25,37.2,25,27.5C25,20.4,30.9,14.5,38,14.5c3.9,0,7.6,1.8,10,4.6c2.4-2.8,6.1-4.6,10-4.6c7.1,0,13,5.9,13,13c0,9.7-10,18.3-21.5,29.3L50,60z"
                  fill="url(#heartGradient)"
                  className="animate-pulse"
                />
              </g>
            </svg>
          </div>
        </div>

        {/* Final text - More space and better positioning */}
        <div className={`text-center pb-8 px-4 mt-2 transition-all duration-2000 ${showFinalText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 drop-shadow-lg">
            Even shattered hearts can love again ❤️
          </h2>
          <p className="text-lg md:text-xl text-gray-700 drop-shadow-md mb-4">
            And I won't let this shatter again
          </p>
          <p className="text-base md:text-lg text-gray-600 italic">
            Forever and always, my love 💕
          </p>
        </div>
      </div>

      <style jsx>{`
        .bg-romantic {
          background: linear-gradient(135deg, #ffffff 0%, #fce4ec 25%, #f8bbd9 50%, #f48fb1 75%, #f06292 100%);
          background-size: 400% 400%;
          animation: romanticGradient 8s ease-in-out infinite;
        }
        @keyframes romanticGradient {
          0% { 
            background-position: 0% 50%; 
          }
          25% { 
            background-position: 100% 0%; 
          }
          50% { 
            background-position: 100% 100%; 
          }
          75% { 
            background-position: 0% 100%; 
          }
          100% { 
            background-position: 0% 50%; 
          }
        }
      `}</style>
    </div>
  );
};

export default HeartAnimation;