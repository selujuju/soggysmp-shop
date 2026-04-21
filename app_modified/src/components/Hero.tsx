import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const currentRotateX = useRef(0);
  const currentRotateY = useRef(0);
  const targetRotateX = useRef(0);
  const targetRotateY = useRef(0);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const x = e.clientX / w;
      const y = e.clientY / h;
      targetRotateY.current = (x - 0.5) * 15;
      targetRotateX.current = (0.5 - y) * 15;
    };

    const animate = () => {
      currentRotateX.current += (targetRotateX.current - currentRotateX.current) * 0.1;
      currentRotateY.current += (targetRotateY.current - currentRotateY.current) * 0.1;

      if (heroRef.current) {
        heroRef.current.style.transform = `rotateX(${currentRotateX.current}deg) rotateY(${currentRotateY.current}deg)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  const scrollToRanks = () => {
    const element = document.getElementById('ranks');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#f4f4f5]">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div ref={heroRef} className="hero-content z-10">
        <h1 className="hero-title-half text-left">
          <span className="left">SOGGY</span>
        </h1>
        <h1 className="hero-title-half text-right">
          <span className="right">SMP</span>
        </h1>
      </div>

      <div className="absolute bottom-32 z-10 text-center px-4">
        <h2 className="text-3xl md:text-5xl font-medium text-[#111111] mb-4">
          The Next Evolution of SMP
        </h2>
        <p className="text-lg text-[#555555] max-w-lg mx-auto mb-8">
          Join a thriving community. Build, survive, and conquer on a server crafted for dedicated players.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="https://discord.gg/wQHbmjkh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white text-base font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            {/* Discord icon */}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.053a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
            </svg>
            Join the Server
          </a>
          <button
            onClick={scrollToRanks}
            className="bg-[#111111] hover:bg-[#333333] text-white text-base font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            View Ranks
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-[#555555]" />
      </div>
    </section>
  );
}
