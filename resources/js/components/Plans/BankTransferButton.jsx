import React from 'react';

export function BankTransferButton({
  payment,
  loading,
  handlePayWithBankTransfer,
}) {
  return (
    <button
      onClick={() => handlePayWithBankTransfer(payment.id)}
      disabled={loading}
      type="button"
      className="bg-blue-600/20 border border-blue-800 rounded-md p-5 md:px-2 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <img
        src="/images/banamex.svg"
        alt="Oxxo"
        width="120px"
        height="auto"
        className="mx-auto mb-2"
      />
      <h6>{payment.title}</h6>
      <h5 className="font-bold text-lg">{`$${payment.price}`}</h5>
    </button>
  );
}
