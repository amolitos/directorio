import React from 'react';

export function Skeleton() {
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <div className="flex flex-col gap-5">
      {items.map((i) => (
        <div
          key={i}
          className="animate-pulse card flex items-start gap-5 border-0"
        >
          <div className="w-16 md:w-20 h-16 md:h-20 bg-zinc-400 rounded-full" />
          <div className="grow">
            <div className="w-52 h-3 bg-zinc-400 rounded" />
            <div className="w-20 h-2 bg-zinc-400 rounded mt-3" />
            <div className="w-36 h-2 bg-zinc-400 rounded mt-3" />
          </div>
        </div>
      ))}
    </div>
  );
}
