import { Server, MessageCircle, BookOpen, LifeBuoy, ExternalLink } from 'lucide-react';

export default function Footer() {
  const copyServerIP = () => {
    navigator.clipboard.writeText('soggysmp.godlike.club');
    alert('IP copied to clipboard!');
  };

  return (
    <footer id="join" className="bg-[#111111] text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Space_Grotesk'] text-5xl md:text-7xl lg:text-8xl font-medium mb-6">
            Ready to Join?
          </h2>
          <p className="text-[#555555] text-lg mb-8">
            Connect now and start your adventure
          </p>

          <button
            onClick={copyServerIP}
            className="inline-flex items-center gap-3 bg-[#1a1a1a] hover:bg-[#222222] border border-[#333333] rounded-full px-8 py-4 transition-all duration-300 hover:scale-105 group"
          >
            <span className="font-['JetBrains_Mono'] text-xl md:text-2xl text-[#34d399]">
              soggysmp.godlike.club
            </span>
            <ExternalLink className="w-5 h-5 text-[#555555] group-hover:text-white transition-colors" />
          </button>
          <p className="text-sm text-[#555555] mt-3">
            Click to copy the IP
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-t border-[#222222] pt-12">
          <div>
            <h4 className="font-semibold mb-4 text-white">Shop</h4>
            <ul className="space-y-2">
              <li>
                <a href="#ranks" className="text-[#555555] hover:text-[#34d399] transition-colors text-sm">
                  All ranks
                </a>
              </li>
              <li>
                <a href="#" className="text-[#555555] hover:text-[#34d399] transition-colors text-sm">
                  Gift cards
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Community</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-1 text-[#555555] text-sm">
                <MessageCircle className="w-3 h-3" />
                <span>Discord :</span>
                <a
                  href="https://discord.gg/W3qRvyQJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#34d399] transition-colors"
                >
                  https://discord.gg/W3qRvyQJ
                </a>
              </li>
              <li>
                <a href="#" className="text-[#555555] hover:text-[#34d399] transition-colors text-sm">
                  Forum
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#555555] hover:text-[#34d399] transition-colors text-sm flex items-center gap-1">
                  <BookOpen className="w-3 h-3" />
                  Rules
                </a>
              </li>
              <li>
                <a href="#" className="text-[#555555] hover:text-[#34d399] transition-colors text-sm">
                  Wiki
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#555555] hover:text-[#34d399] transition-colors text-sm flex items-center gap-1">
                  <LifeBuoy className="w-3 h-3" />
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-[#555555] hover:text-[#34d399] transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-[#222222] pt-8">
          <div className="flex items-center gap-2">
            <Server className="w-5 h-5 text-[#34d399]" />
            <span className="font-['Space_Grotesk'] font-medium">
              SOGGYSMP
            </span>
          </div>
          <p className="text-[#555555] text-sm">
            © 2026 SOGGYSMP. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-[#555555]">
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}