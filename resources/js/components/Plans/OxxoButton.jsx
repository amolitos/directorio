import React from 'react';

export function OxxoButton({ payment, loading, handlePayWithOxxo }) {
  return (
    <button
      onClick={() => handlePayWithOxxo(payment.id)}
      disabled={loading}
      type="button"
      className="bg-red-600/20 border border-red-800 rounded-md p-5 md:px-2 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <img
        src="/images/oxxo.png"
        alt="Oxxo"
        width="50px"
        height="auto"
        className="mx-auto mb-2"
      />
      <h6>{payment.title}</h6>
      <h5 className="font-bold text-lg">{`$${payment.price}`}</h5>
    </button>
  );
}
