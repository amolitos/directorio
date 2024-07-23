import { useState } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import api from '../api';

export const useCashPayments = (planId) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cashPayments, setCashPayments] = useState([]);

  const stripe = useStripe();

  const fetchCashPayments = async () => {
    setLoading(true);

    try {
      const { data } = await api.get(`/cash-payments?plan_id=${planId}`);
      setCashPayments(data);
    } catch ({ message }) {
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handlePayWithOxxo = async (cashPaymentId) => {
    if (!stripe) {
      setError('Stripe has not yet loaded.');
      return;
    }

    setLoading(true);

    const { data } = await api.get(`/cash-payments/${cashPaymentId}/intent`);
    const { name, email, secret } = data;
    const { error: stripeError } = await stripe.confirmOxxoPayment(secret, {
      payment_method: {
        billing_details: {
          name,
          email,
        },
      },
    });

    setLoading(false);

    if (stripeError) {
      setError(stripeError.message);
    }
  };

  return { loading, error, cashPayments, fetchCashPayments, handlePayWithOxxo };
};
