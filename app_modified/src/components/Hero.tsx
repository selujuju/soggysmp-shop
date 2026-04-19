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
        <button
          onClick={scrollToRanks}
          className="bg-[#111111] hover:bg-[#333333] text-white text-base font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
        >
          Join the Server
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-[#555555]" />
      </div>
    </section>
  );
}
