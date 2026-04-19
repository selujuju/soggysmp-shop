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

// 🔑 Remplace par ton Live Client ID PayPal
// → developer.paypal.com > My Apps > Live > Client ID
const PAYPAL_CLIENT_ID = 'AUXJ8QjsvOWxmHvvU614TW8DMHOwXlccQmFBK4-DazNM-DeUJGz2bGVPrHG5UwZzCTRv9wN3PAepRmEu';

export default function PaymentModal({ isOpen, onClose, rank }: PaymentModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 payment-modal">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-6 animate-fade-in-up">
        {/* Close Button */}
        <button
          onClick={onClose}
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
            createOrder={(_data, actions) => {
              return actions.order.create({
                intent: 'CAPTURE',
                purchase_units: [
                  {
                    amount: {
                      value: rank.price.toFixed(2),
                      currency_code: 'EUR',
                    },
                    description: `SOGGYSMP – ${rank.name} rank (one-time)`,
                  },
                ],
              });
            }}
            onApprove={(_data, actions) => {
              return actions.order!.capture().then(() => {
                alert(
                  `✅ Payment confirmed! Your ${rank.name} rank will be activated within a few minutes.\n\nCheck your Discord or contact support if you have any issues.`
                );
                onClose();
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

        {/* Security Note */}
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
      </div>
    </div>
  );
}
