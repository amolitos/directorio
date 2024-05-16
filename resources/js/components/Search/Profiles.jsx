import React from 'react';

export function Profiles({ profile }) {
  return (
    <a
      href={`/profiles/${profile.id}`}
      className="card flex items-start gap-5 border-0"
    >
      <img
        src={profile.photo ? `/storage/${profile.photo}` : '/images/user.jpg'}
        alt="Foto de profile"
        className="w-16 md:w-20 h-16 md:h-20 rounded-full"
      />
      <div>
        <h3 className="font-semibold md:text-xl truncate leading-none">
          {profile.name}
        </h3>
        <div className="badge badge-primary mt-2">{profile.degree}</div>
        <p className="text-sm md:text-base text-stone-600 dark:text-gray-400 mt-2">
          {`${profile.state}, ${profile.city}`}
        </p>
      </div>
    </a>
  );
}
