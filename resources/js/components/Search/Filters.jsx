import React, { useState } from 'react';
import { State } from './State';
import { Specialties } from './Specialties';
import { Services } from './Services';

export function Filters({ loading, fetchResultados, defaultstate }) {
  const [selectedState, setSelectedState] = useState(defaultstate);
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  const handleSearch = () => {
    const specialties = selectedSpecialties.map((item) => item.value);
    const services = selectedServices.map((item) => item.value);

    fetchResultados({
      state: selectedState,
      specialties,
      services,
    });
  };

  return (
    <div className="flex flex-col gap-5">
      <State
        selectedState={selectedState}
        setSelectedState={setSelectedState}
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
          className="btn btn-primary"
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
