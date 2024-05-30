import React, { useState } from 'react';
import { StateCity } from './StateCity';
import { Specialties } from './Specialties';
import { Services } from './Services';

export function Filters({ loading, fetchResultados, defaultstate }) {
  const [selectedState, setSelectedState] = useState(defaultstate);
  const [selectedCity, setSelectedCity] = useState(0);
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

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
