import { Sparkles, Coins, Calendar, Sword, Users, Trophy } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="w-8 h-8 text-[#34d399]" />,
    title: 'Custom Enchantments',
    description: 'Over 50 custom enchantments to elevate your gameplay and make your experience truly unique.',
  },
  {
    icon: <Coins className="w-8 h-8 text-[#3b82f6]" />,
    title: 'Player Economy',
    description: 'A robust, player-driven economy with player shops and a full trading system.',
  },
  {
    icon: <Calendar className="w-8 h-8 text-[#8b5cf6]" />,
    title: 'Weekly Events',
    description: 'Compete in tournaments, build battles, and PvP arenas every week.',
  },
  {
    icon: <Sword className="w-8 h-8 text-[#fbbf24]" />,
    title: 'Competitive PvP',
    description: 'Ranking system, balanced arenas, and rewards for top players.',
  },
  {
    icon: <Users className="w-8 h-8 text-[#34d399]" />,
    title: 'Active Community',
    description: 'Join a welcoming and passionate community with a 24/7 active Discord.',
  },
  {
    icon: <Trophy className="w-8 h-8 text-[#3b82f6]" />,
    title: 'Seasons & Leaderboards',
    description: 'Regular seasons with leaderboards and exclusive rewards to earn.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Space_Grotesk'] text-5xl md:text-7xl font-medium text-[#111111] mb-4">
            Features
          </h2>
          <p className="text-lg text-[#555555] max-w-xl mx-auto">
            Discover everything that makes SOGGYSMP a unique and exciting server.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-[#f4f4f5] rounded-2xl p-8 border border-gray-100"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#111111] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#555555] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
