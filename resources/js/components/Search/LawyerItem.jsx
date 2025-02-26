import React from 'react';

export function LawyerItem({ lawyer }) {
  function capitalizeWords(str) {
    return str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  return (
    <a href={lawyer.url} className="card flex items-start gap-5">
      <img
        src={lawyer.photo ? `/storage/${lawyer.photo}` : '/images/user.jpg'}
        alt="Foto de perfil"
        className="w-16 min-w-16 md:w-20 md:min-w-20 h-16 md:h-20 bg-white object-contain border border-zinc-600 rounded-full"
      />
      <div className="w-full overflow-x-hidden">
        <div className="flex items-center">
          <h3 className="font-semibold md:text-xl truncate">
            {capitalizeWords(lawyer.name)}
          </h3>
        </div>
        <div className="badge badge-primary mt-2">{lawyer.degree}</div>
        <p className="text-sm md:text-base text-stone-600 dark:text-gray-400 mt-2">
          {`${lawyer.state}, ${lawyer.city}`}
        </p>
      </div>
    </a>
  );
}
