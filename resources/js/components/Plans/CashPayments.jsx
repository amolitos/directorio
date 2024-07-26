import React, { useEffect } from 'react';
import { OxxoButton } from './OxxoButton';
import { useCashPayments } from '../../hooks/useCashPayments';
import { BankTransferButton } from './BankTransferButton';

export function CashPayments({ planId }) {
  const {
    loading,
    error,
    cashPayments,
    fetchCashPayments,
    handlePayWithOxxo,
    handlePayWithBankTransfer,
  } = useCashPayments(planId);

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

  const renderCashPayment = (payment) => {
    if (payment.type === 'oxxo') {
      return (
        <OxxoButton
          key={payment.id}
          payment={payment}
          loading={loading}
          handlePayWithOxxo={handlePayWithOxxo}
        />
      );
    }

    if (payment.type === 'bank_transfer') {
      return (
        <BankTransferButton
          key={payment.id}
          payment={payment}
          loading={loading}
          handlePayWithBankTransfer={handlePayWithBankTransfer}
        />
      );
    }

    return null;
  };

  return (
    <div>
      <h4 className="font-bold text-2xl">Otros métodos de pago</h4>
      <p className="text-sm text-gray-400 mt-2">
        * El mínimo es por 6 meses de acceso al directorio
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {cashPayments.map((payment) => renderCashPayment(payment))}
      </div>
    </div>
  );
}
