import React, { useState, useEffect } from 'react';
import CreatableSelect from 'react-select/creatable';
import { useWizard } from 'react-use-wizard';
import { toast } from 'react-toastify';
import { sanitizeTag, toSingleArray } from '../../utils/tagHelper';
import api from '../../api';

export function Services() {
  const [services, setServices] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const { nextStep } = useWizard();

  const handleGetProfileServices = async () => {
    try {
      const { data } = await api.get('profile/services');
      setSelectedOptions(
        data.map((pm) => ({
          value: pm.id,
          label: pm.name,
        }))
      );
    } catch ({ message }) {
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

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
      handleGetProfileServices();
    } catch (error) {
      toast.error(error);
      setLoading(false);
    }
  };

  const handleCreateService = (specialty) => {
    const options = [...selectedOptions, sanitizeTag(specialty)];
    setSelectedOptions(options);
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      await api.post('/profile/services', {
        services: toSingleArray(selectedOptions),
      });
      toast.success('Se guardo la información exitosamente.');
      nextStep();
    } catch ({ message }) {
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="card p-5">
      <p className="text-sm text-gray-400">
        * A continuación describe los servicios que brindas. Puedes añadir
        nuevos servicios, si no encuentras alguno en el listado opcional. ¡Te
        sugerimos ser muy específico!
      </p>
      <div className="mt-5">
        <p className="form-label">Servicios</p>
        <CreatableSelect
          autoFocus
          isMulti
          isClearable={false}
          isLoading={loading}
          options={services}
          value={selectedOptions}
          onChange={setSelectedOptions}
          onCreateOption={handleCreateService}
          placeholder="Escribe los servicios que brindas"
          formatCreateLabel={(input) => `Presiona enter para añadir "${input}"`}
          className="my-react-select-container"
          classNamePrefix="my-react-select"
        />
      </div>
      <button
        onClick={handleSubmit}
        type="button"
        className="btn btn-primary mt-8"
      >
        Guardar
      </button>
    </div>
  );
}
