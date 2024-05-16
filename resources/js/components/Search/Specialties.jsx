import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { toast } from 'react-toastify';
import api from '../../api';

export function Specialties({ selectedSpecialties, setSelectedSpecialties }) {
  const [specialties, setSpecialties] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetSpecialties = async () => {
    setLoading(true);

    try {
      const { data } = await api.get('/specialties');
      setSpecialties(
        data.map((specialty) => ({
          value: specialty.id,
          label: specialty.name,
        }))
      );
    } catch ({ message }) {
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetSpecialties();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p className="form-label">Specialties</p>
      <Select
        autoFocus
        isMulti
        isClearable={false}
        isLoading={loading}
        options={specialties}
        value={selectedSpecialties}
        onChange={setSelectedSpecialties}
        placeholder="Specialties"
        className="my-react-select-container"
        classNamePrefix="my-react-select"
      />
    </div>
  );
}
