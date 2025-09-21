const express = require('express');
const Stripe = require('stripe');
const router = express.Router();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // ✅ using env variable

router.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    if (!amount) {
      return res.status(400).json({ error: 'Amount is required' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Stripe error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
