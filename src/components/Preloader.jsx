import { useState, useEffect } from 'react';

export default function Preloader({ onFinish }) {
  const [phase, setPhase] = useState('enter'); // enter → hold → exit

  useEffect(() => {
    const holdTimer = setTimeout(() => setPhase('hold'), 600);
    const exitTimer = setTimeout(() => setPhase('exit'), 1800);
    const doneTimer = setTimeout(() => onFinish(), 2400);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onFinish]);

  const letters = 'AAMSA'.split('');

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-navy-950 flex items-center justify-center transition-opacity duration-500 ${
        phase === 'exit' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Subtle radial glow behind text */}
      <div className="absolute w-64 h-64 bg-electric/10 rounded-full blur-3xl" />

      <div className="relative flex items-center gap-1">
        {letters.map((letter, i) => (
          <span
            key={i}
            className="preloader-letter text-5xl sm:text-7xl font-extrabold tracking-wider text-white"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Loading bar */}
      <div className="absolute bottom-24 w-48 h-[2px] bg-navy-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-electric to-cyan-accent rounded-full transition-all duration-[1600ms] ease-out"
          style={{ width: phase === 'enter' ? '0%' : phase === 'hold' ? '80%' : '100%' }}
        />
      </div>
    </div>
  );
}
