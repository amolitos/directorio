import React, { useState } from 'react';
import { StateCity } from './StateCity';
import { Specialties } from './Specialties';
import { Services } from './Services';

export function Filters({ loading, fetchResultados, defaultstate }) {
  const [selectedState, setSelectedState] = useState(defaultstate);
  const [selectedCity, setSelectedCity] = useState(0);
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [verified, setVerified] = useState(false);

  const handleToggleFilters = () => {
    const filters = document.getElementById('filters');
    filters.classList.toggle('hidden');
    filters.classList.toggle('flex');
  };

  const handleSearch = () => {
    const specialties = selectedSpecialties.map((item) => item.value);
    const services = selectedServices.map((item) => item.value);

    fetchResultados({
      state: selectedState,
      city: selectedCity,
      specialties,
      services,
      ...(verified ? { verified } : {}),
    });

    handleToggleFilters();
  };

  return (
    <div className="w-full h-full bg-zinc-800 border-b lg:border-r border-stone-700 p-5">
      <button
        onClick={handleToggleFilters}
        disabled={loading}
        type="button"
        className=" btn btn-secondary block lg:hidden"
      >
        <i className="fa-solid fa-gear mr-3" />
        Filtros
      </button>
      <div id="filters" className="hidden lg:flex flex-col gap-5 tablet:mt-5">
        <StateCity
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />
        <Specialties
          selectedSpecialties={selectedSpecialties}
          setSelectedSpecialties={setSelectedSpecialties}
        />
        <Services
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
        />
        <label className="w-fit inline-flex items-center cursor-pointer mt-3">
          <input
            onChange={() => setVerified(!verified)}
            type="checkbox"
            className="sr-only peer"
          />
          <span className="text-neutral-900 dark:text-neutral-300 select-none mr-3">
            Verificados
          </span>
          <div className="relative w-[52px] h-7 bg-zinc-500 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-6 after:h-6 after:transition-all peer-checked:bg-teal-600" />
        </label>
        <div className="grid">
          <button
            onClick={handleSearch}
            disabled={loading}
            type="button"
            className="btn btn-primary mt-5"
          >
            BUSCAR
          </button>
        </div>
      </div>
    </div>
  );
}
