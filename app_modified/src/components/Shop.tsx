import { useState } from 'react';
import { Crown, Star, Zap, Gem, Check, Shield, Lock } from 'lucide-react';
import PaymentModal from './PaymentModal';

interface Rank {
  id: string;
  name: string;
  price: number;
  color: string;
  bgColor: string;
  icon: React.ReactNode;
  perks: string[];
  popular?: boolean;
}

const ranks: Rank[] = [
  {
    id: 'vip',
    name: 'VIP',
    price: 2.5,
    color: '#34d399',
    bgColor: 'bg-emerald-50',
    icon: <Star className="w-8 h-8" />,
    perks: [
      'VIP prefix in chat',
      'Access to /top',
      '2 extra homes',
      'daily VIP kit',
    ],
  },
  {
    id: 'mvp',
    name: 'MVP',
    price: 5,
    color: '#3b82f6',
    bgColor: 'bg-blue-50',
    icon: <Zap className="w-8 h-8" />,
    perks: [
      'All VIP perks',
      'MVP prefix in chat',
      'Access to /rename',
      '5 extra homes',
      'daily MVP kit',
    ],
    popular: true,
  },
  {
    id: 'legend',
    name: 'LEGEND',
    price: 10,
    color: '#8b5cf6',
    bgColor: 'bg-purple-50',
    icon: <Gem className="w-8 h-8" />,
    perks: [
      'All MVP perks',
      'LEGEND prefix in chat',
      'Access to /vault',
      '10 extra homes',
      'daily LEGEND kit',
      'Acces to a special salon in discord',
    ],
  },
  {
    id: 'god',
    name: 'GOD',
    price: 20,
    color: '#fbbf24',
    bgColor: 'bg-amber-50',
    icon: <Crown className="w-8 h-8" />,
    perks: [
      'All LEGEND perks',
      'GOD prefix in chat',
      'you will be venerated',
      'Unlimited homes',
      'daily GOD kit',
      'Exclusive Discord role',
      'Priority support',
    ],
  },
];

export default function Shop() {
  const [selectedRank, setSelectedRank] = useState<Rank | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const handlePurchase = (rank: Rank) => {
    setSelectedRank(rank);
    setIsPaymentModalOpen(true);
  };

  return (
    <section id="ranks" className="py-24 px-4 bg-[#f4f4f5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Space_Grotesk'] text-5xl md:text-7xl font-medium text-[#111111] mb-4">
            Choose Your Rank
          </h2>
          <p className="text-lg text-[#555555] max-w-xl mx-auto">
            Unlock exclusive perks and support the server by choosing the rank that suits you best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ranks.map((rank, index) => (
            <div
              key={rank.id}
              className={`relative bg-white rounded-3xl p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                rank.popular ? 'ring-2 ring-[#3b82f6] ring-offset-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {rank.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#3b82f6] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  POPULAR
                </div>
              )}

              <div
                className={`w-16 h-16 rounded-2xl ${rank.bgColor} flex items-center justify-center mb-4`}
                style={{ color: rank.color }}
              >
                {rank.icon}
              </div>

              <h3
                className="font-['Space_Grotesk'] text-2xl font-medium mb-2"
                style={{ color: rank.color }}
              >
                {rank.name}
              </h3>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-[#111111]">{rank.price}€</span>
                <span className="text-[#555555] text-sm">one-time</span>
              </div>

              <ul className="space-y-3 mb-8">
                {rank.perks.map((perk, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#555555]">
                    <Check className="w-4 h-4 text-[#34d399] mt-0.5 flex-shrink-0" />
                    {perk}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePurchase(rank)}
                className="w-full py-3 rounded-xl font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: rank.color }}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-sm text-[#555555]">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#34d399]" />
            <span>Secure payment</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#34d399]" />
            <span>256-bit SSL</span>
          </div>
        </div>
      </div>

      {selectedRank && (
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
          rank={selectedRank}
        />
      )}
    </section>
  );
}
