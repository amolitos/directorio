import React from 'react';

export function SinResultados() {
  return (
    <div className="h-full flex items-center justify-center text-center p-5">
      <div>
        <i className="fa-solid fa-scale-unbalanced block text-6xl text-zinc-300" />
        <h5 className="font-medium text-2xl mt-4">
          No se encontraron resultados
        </h5>
      </div>
    </div>
  );
}
