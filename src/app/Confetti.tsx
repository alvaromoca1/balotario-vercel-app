import React, { useState, useEffect } from 'react';

interface ConfettiPiece {
  left: string;
  top: string;
  animationDuration: string;
  backgroundColor: string;
}

const ConfettiComponent: React.FC = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const newPieces: ConfettiPiece[] = [];
    for (let i = 0; i < 50; i++) {
      newPieces.push({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
      });
    }
    setPieces(newPieces);
    const timer = setTimeout(() => {
      setPieces([]);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {pieces.map((piece, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 rounded-full opacity-70 animate-confetti"
          style={{
            left: piece.left,
            top: piece.top,
            animationDuration: piece.animationDuration,
            backgroundColor: piece.backgroundColor,
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiComponent;