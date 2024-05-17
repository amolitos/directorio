import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { toast } from 'react-toastify';
import api from '../../api';

export function Services({ selectedServices, setSelectedServices }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetServices = async () => {
    setLoading(true);

    try {
      const { data } = await api.get('/services');
      setServices(
        data.map((specialty) => ({
          value: specialty.id,
          label: specialty.name,
        }))
      );
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p className="form-label">Servicios</p>
      <Select
        autoFocus
        isMulti
        isClearable={false}
        isLoading={loading}
        options={services}
        value={selectedServices}
        onChange={setSelectedServices}
        placeholder="Servicios"
        className="my-react-select-container"
        classNamePrefix="my-react-select"
      />
    </div>
  );
}
