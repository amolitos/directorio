import React, { useEffect } from 'react';
import { OxxoButton } from './OxxoButton';
import { useCashPayments } from '../../hooks/useCashPayments';

export function CashPayments({ planId }) {
  const { loading, error, cashPayments, fetchCashPayments, handlePayWithOxxo } =
    useCashPayments(planId);

  useEffect(() => {
    fetchCashPayments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading && cashPayments.length === 0) {
    return (
      <p className="font-medium text-sm">Cargando otros metodos de pago...</p>
    );
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div>
      <h4 className="font-bold text-xl">Otros métodos de pago</h4>
      <p className="text-sm text-gray-400 mt-2">
        * Al pagar en efectivo no aplica la promoción de $99
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {cashPayments.map(
          (payment) =>
            payment.type === 'oxxo' && (
              <OxxoButton
                key={payment.id}
                payment={payment}
                loading={loading}
                handlePayWithOxxo={handlePayWithOxxo}
              />
            )
        )}
      </div>
    </div>
  );
}
