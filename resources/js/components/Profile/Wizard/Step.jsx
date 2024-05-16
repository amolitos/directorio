import React from 'react';
import { useWizard } from 'react-use-wizard';
import { useSelector } from 'react-redux';

export function Step({ number, label }) {
  const { activeStep, goToStep } = useWizard();
  const { profile } = useSelector((state) => state.profile);

  return (
    <button
      onClick={() => goToStep(number)}
      disabled={profile === null}
      type="button"
      className="flex items-center gap-2 p-2"
    >
      <span
        className={`h-6 w-6 bg-primary/20 dark:bg-zinc-400 flex justify-center items-center font-bold text-sm dark:text-gray-600 select-none rounded-full ${
          activeStep === number && '!bg-primary !text-white'
        }`}
      >
        {number + 1}
      </span>
      <span className="hidden sm:block select-none px-1 dark:bg-zinc-900 dark:text-neutral-200">
        {label}
      </span>
    </button>
  );
}
