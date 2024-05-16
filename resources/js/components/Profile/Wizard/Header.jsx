import React from 'react';
import { Step } from './Step';

export function Header() {
  return (
    <div
      className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5
after:-translate-y-1/2 after:rounded-lg after:bg-gray-100 dark:after:bg-zinc-700 my-2 mb-4"
    >
      <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
        <Step number={0} label="General" />
        <Step number={1} label="Personal" />
        <Step number={2} label="Materias" />
        <Step number={3} label="Servicios" />
        <Step number={4} label="Contacto" />
      </ol>
    </div>
  );
}
