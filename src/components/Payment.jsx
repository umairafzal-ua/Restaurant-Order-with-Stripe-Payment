import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import toast, { Toaster } from 'react-hot-toast';

// Load Stripe public key
const stripePromise = loadStripe('pk_test_51Q2tY9HGqjD9uwUKm5OEyPGtGnCcxAzXs0CK2gFVNfq7BmW8NWM2LEwwZ2eOr9Vs8Dq4qSzdBYzIc0WYytyok0BK00IhppgQol');

const CheckoutForm = ({ totalBill }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMessage, setPaymentMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    try {
      // ✅ Call backend
      const response = await fetch('https://restaurant-order-with-stripe-paymen-seven.vercel.app/payments/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: totalBill * 100 }), // Stripe uses cents
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();

      if (!data.clientSecret) {
        throw new Error('No clientSecret returned from backend');
      }

      // ✅ Confirm card payment
      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: { card: cardElement },
      });

      if (result.error) {
        setPaymentMessage(result.error.message);
        toast.error(result.error.message);
      } else if (result.paymentIntent.status === 'succeeded') {
        setPaymentMessage('Payment successful!');
        toast.success('Payment successful!');
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message);
      setPaymentMessage(err.message);
    }

    setIsProcessing(false);
  };

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <CardElement className="border p-4" />

        <button
          type="submit"
          className="mt-4 bg-[#f07d15] text-white px-4 py-2"
          disabled={!stripe || isProcessing}
        >
          {isProcessing ? 'Processing...' : 'Pay Now'}
        </button>

        {paymentMessage && <p>{paymentMessage}</p>}
      </form>
    </>
  );
};

const Payment = ({ totalBill }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm totalBill={totalBill} />
  </Elements>
);

export default Payment;
