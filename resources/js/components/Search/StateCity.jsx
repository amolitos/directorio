import React from 'react';
import { useLocation } from '../../hooks/useLocation';

export function StateCity({
  selectedState,
  setSelectedState,
  selectedCity,
  setSelectedCity,
}) {
  const { states, cities, handleOnChageState } = useLocation(selectedState);

  const handleSelectState = (event) => {
    const stateId = event.target.value;
    setSelectedState(stateId);
    handleOnChageState(event);
  };

  const handleSelectCity = (event) => {
    const cityId = event.target.value;
    setSelectedCity(cityId);
  };

  return (
    <>
      <div>
        <label htmlFor="state_id" className="form-label">
          Estado
        </label>
        <select
          id="state_id"
          value={selectedState}
          onChange={handleSelectState}
          className="form-input"
        >
          <option value="0">Cualquiera</option>
          {states.map((state) => (
            <option key={state.id} value={state.id}>
              {state.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="city_id" className="form-label">
          Municipio
        </label>
        <select
          id="city_id"
          value={selectedCity}
          onChange={handleSelectCity}
          className="form-input"
        >
          <option value="0">Cualquiera</option>
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
