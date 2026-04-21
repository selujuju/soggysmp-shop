import { X, Shield } from 'lucide-react';

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const rules = [
  {
    category: 'Clients & Mods',
    icon: '🖥️',
    items: [
      'No Hacked Clients',
      'No Movement Mods',
      'No Inventory Mods',
      'No Health Indicators',
      'No Radar',
      'No Freecam',
      'No ESP',
      'No Auto or Easy Place',
      'No Macros or Scripts',
      'No Auto Clicker',
      'No Mouse Tweaks / Scrollers',
      'No Crafting Modifications',
    ],
  },
  {
    category: 'Economy & Trading',
    icon: '💰',
    items: [
      'No IRL Trading',
      'No Invite Rewards',
      'No External Gambling',
      'No Cross-Server Trading',
    ],
  },
  {
    category: 'Gameplay',
    icon: '⚔️',
    items: [
      'No Abusing Bugs',
      'No Attempted Duplicating',
      'No Duplicating Items',
      'No Finding or Using the Seed',
      'No Naked Killings (unless they hit you first)',
      'No Lag Machines',
      'No Alts',
    ],
  },
  {
    category: 'Community',
    icon: '🤝',
    items: [
      'No Staff Impersonation',
      'Use common sense',
      'Report all Bugs, Glitches, and Cheaters',
    ],
  },
];

export default function RulesModal({ isOpen, onClose }: RulesModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#34d399]" />
            </div>
            <div>
              <h2 className="font-['Space_Grotesk'] text-xl font-medium text-[#111111]">
                Server Rules
              </h2>
              <p className="text-xs text-[#555555]">
                Breaking these rules may result in a ban.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-[#555555]" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          {rules.map((section) => (
            <div key={section.category}>
              <h3 className="flex items-center gap-2 font-semibold text-[#111111] mb-3">
                <span>{section.icon}</span>
                <span>{section.category}</span>
              </h3>
              <ul className="space-y-2">
                {section.items.map((rule, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-[#555555]"
                  >
                    <span
                      className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-white text-[10px] font-bold"
                      style={{ backgroundColor: '#34d399' }}
                    >
                      ✕
                    </span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Bottom note */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
            <strong>⚠️ Remember:</strong> Staff decisions are final. If you're unsure whether something is allowed, ask a staff member before doing it.
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 text-center">
          <button
            onClick={onClose}
            className="bg-[#111111] hover:bg-[#333333] text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
          >
            I understand the rules
          </button>
        </div>
      </div>
    </div>
  );
}
