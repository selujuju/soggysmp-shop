import { useState } from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { X, Shield, Lock } from 'lucide-react';

interface Rank {
  id: string;
  name: string;
  price: number;
  color: string;
}

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  rank: Rank;
}

const PAYPAL_CLIENT_ID = 'AUXJ8QjsvOWxmHvvU614TW8DMHOwXlccQmFBK4-DazNM-DeUJGz2bGVPrHG5UwZzCTRv9wN3PAepRmEu';

export default function PaymentModal({ isOpen, onClose, rank }: PaymentModalProps) {
  const [discordUsername, setDiscordUsername] = useState('');
  const [discordError, setDiscordError] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleClose = () => {
    setDiscordUsername('');
    setDiscordError('');
    setConfirmed(false);
    onClose();
  };

  const validateDiscord = () => {
    if (!discordUsername.trim()) {
      setDiscordError('Please enter your Discord username.');
      return false;
    }
    if (discordUsername.trim().length < 2) {
      setDiscordError('Discord username is too short.');
      return false;
    }
    setDiscordError('');
    return true;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 payment-modal">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={handleClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-6 animate-fade-in-up">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-[#555555]" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div
            className="inline-block px-3 py-1 rounded-full text-white text-xs font-semibold mb-3"
            style={{ backgroundColor: rank.color }}
          >
            {rank.name}
          </div>
          <h3 className="font-['Space_Grotesk'] text-2xl font-medium text-[#111111]">
            Purchase {rank.name} rank
          </h3>
          <p className="text-[#555555] mt-1">
            Amount:{' '}
            <span className="font-bold text-[#111111]">{rank.price}€</span>{' '}
            <span className="text-sm">(one-time payment)</span>
          </p>
        </div>

        {/* Discord Username Field */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-[#111111] mb-1">
            Discord username <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-2 border-2 rounded-xl px-3 py-2 transition-all"
            style={{ borderColor: discordError ? '#ef4444' : discordUsername ? rank.color : '#e5e7eb' }}
          >
            {/* Discord logo */}
            <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#5865F2' }} viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.053a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <input
              type="text"
              placeholder="e.g. selujuju"
              value={discordUsername}
              onChange={(e) => {
                setDiscordUsername(e.target.value);
                if (discordError) setDiscordError('');
              }}
              className="flex-1 outline-none text-sm text-[#111111] bg-transparent"
            />
          </div>
          {discordError && (
            <p className="text-red-500 text-xs mt-1">{discordError}</p>
          )}
          <p className="text-[#555555] text-xs mt-1">
            Your rank will be assigned to this Discord account.
          </p>
        </div>

        {/* PayPal Buttons */}
        <PayPalScriptProvider
          options={{
            clientId: PAYPAL_CLIENT_ID,
            currency: 'EUR',
            intent: 'capture',
          }}
        >
          <PayPalButtons
            style={{
              layout: 'vertical',
              color: 'gold',
              shape: 'pill',
              label: 'pay',
              height: 48,
            }}
            onClick={(_data, actions) => {
              if (!validateDiscord()) return actions.reject();
              return actions.resolve();
            }}
            createOrder={(_data, actions) => {
              return actions.order.create({
                intent: 'CAPTURE',
                purchase_units: [
                  {
                    amount: {
                      value: rank.price.toFixed(2),
                      currency_code: 'EUR',
                    },
                    description: `SOGGYSMP – ${rank.name} rank | Discord: ${discordUsername.trim()}`,
                  },
                ],
              });
            }}
            onApprove={(_data, actions) => {
              return actions.order!.capture().then(() => {
                setConfirmed(true);
              });
            }}
            onError={(err) => {
              console.error('PayPal error:', err);
              alert('An error occurred during payment. Please try again.');
            }}
            onCancel={() => {
              console.log('Payment cancelled by user.');
            }}
          />
        </PayPalScriptProvider>

        {/* Success Message */}
        {confirmed && (
          <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">✅</div>
            <p className="font-semibold text-green-800 text-sm">Payment confirmed!</p>
            <p className="text-green-700 text-xs mt-1">
              Your <strong>{rank.name}</strong> rank will be assigned to <strong>{discordUsername}</strong> shortly.
            </p>
            <button
              onClick={handleClose}
              className="mt-3 px-4 py-2 rounded-full text-white text-xs font-medium"
              style={{ backgroundColor: rank.color }}
            >
              Close
            </button>
          </div>
        )}

        {/* Security Note */}
        {!confirmed && (
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-[#555555]">
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-[#34d399]" />
              <span>Secured by PayPal</span>
            </div>
            <div className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-[#34d399]" />
              <span>256-bit encryption</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
