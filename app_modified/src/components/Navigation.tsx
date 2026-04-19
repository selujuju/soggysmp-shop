import { useState, useEffect } from 'react';
import { Server, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-lg' : 'bg-transparent'
      } rounded-full px-6 py-3`}
    >
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Server className="w-5 h-5 text-[#34d399]" />
          <span className="font-['Space_Grotesk'] font-medium text-lg text-[#111111]">
            SOGGYSMP
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('ranks')}
            className="text-sm font-medium text-[#555555] hover:text-[#111111] transition-colors"
          >
            Ranks
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="text-sm font-medium text-[#555555] hover:text-[#111111] transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('join')}
            className="text-sm font-medium text-[#555555] hover:text-[#111111] transition-colors"
          >
            Join
          </button>
        </div>

        <button
          onClick={() => scrollToSection('ranks')}
          className="hidden md:block bg-[#34d399] hover:bg-[#10b981] text-[#111111] text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 hover:scale-105"
        >
          Play Now
        </button>

        <button
          className="md:hidden text-[#111111]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 glass-nav rounded-2xl p-4 flex flex-col gap-3">
          <button
            onClick={() => scrollToSection('ranks')}
            className="text-sm font-medium text-[#555555] hover:text-[#111111] transition-colors py-2"
          >
            Ranks
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="text-sm font-medium text-[#555555] hover:text-[#111111] transition-colors py-2"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('join')}
            className="text-sm font-medium text-[#555555] hover:text-[#111111] transition-colors py-2"
          >
            Join
          </button>
          <button
            onClick={() => scrollToSection('ranks')}
            className="bg-[#34d399] text-[#111111] text-sm font-medium px-5 py-2 rounded-full"
          >
            Play Now
          </button>
        </div>
      )}
    </nav>
  );
}
