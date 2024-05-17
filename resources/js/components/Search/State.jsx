import React from 'react';
import { useLocation } from '../../hooks/useLocation';

export function State({ selectedState, setSelectedState }) {
  const { states } = useLocation(selectedState);

  const handleOnChagestate = (event) => {
    const stateId = event.target.value;
    setSelectedState(stateId);
  };

  return (
    <div>
      <label htmlFor="state_id" className="form-label">
        Estado
      </label>
      <select
        id="state_id"
        value={selectedState}
        onChange={handleOnChagestate}
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
  );
}
