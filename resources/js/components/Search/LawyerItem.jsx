import React from 'react';

export function LawyerItem({ lawyer }) {
  return (
    <a href={lawyer.url} className="card flex items-start gap-5">
      <img
        src={lawyer.photo ? `/storage/${lawyer.photo}` : '/images/user.jpg'}
        alt="Foto de perfil"
        className="w-16 md:w-20 h-16 md:h-20 rounded-full"
      />
      <div className="relative grow">
        {lawyer.verified_at && (
          <div className="absolute top-1 right-1 bg-teal-600 text-sm text-white rounded py-1 px-2">
            <i className="fa-solid fa-check mr-2" />
            VERIFICADO
          </div>
        )}
        <h3 className="font-semibold md:text-xl truncate leading-none">
          {lawyer.name}
        </h3>
        <div className="badge badge-primary mt-2">{lawyer.degree}</div>
        <p className="text-sm md:text-base text-stone-600 dark:text-gray-400 mt-2">
          {`${lawyer.state}, ${lawyer.city}`}
        </p>
      </div>
    </a>
  );
}
