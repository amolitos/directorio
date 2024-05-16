import React, { useState, useEffect } from 'react';
import CreatableSelect from 'react-select/creatable';
import { useWizard } from 'react-use-wizard';
import { toast } from 'react-toastify';
import { sanitizeTag, toSingleArray } from '../../utils/tagHelper';
import api from '../../api';

export function Specialties() {
  const [specialties, setSpecialties] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const { nextStep } = useWizard();

  const handleGetProfileSpecialties = async () => {
    try {
      const { data } = await api.get('profile/specialties');
      setSelectedOptions(
        data.map((pm) => ({
          value: pm.id,
          label: pm.name,
        }))
      );
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

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
      handleGetProfileSpecialties();
    } catch ({ message }) {
      toast.error(message);
      setLoading(false);
    }
  };

  const handleCreateSpecialty = (specialty) => {
    const options = [...selectedOptions, sanitizeTag(specialty)];
    setSelectedOptions(options);
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      await api.post('/profile/specialties', {
        specialties: toSingleArray(selectedOptions),
      });
      toast.success('Se guardo la información exitosamente.');
      nextStep();
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetSpecialties();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="card p-5">
      <p className="text-sm text-gray-400">
        * A continuación describe las materias en las cuales te desempeñas. En
        caso de no encontrar alguna specialty, la puedes añadir.
      </p>
      <div className="mt-5">
        <p className="form-label">Materias</p>
        <CreatableSelect
          autoFocus
          isMulti
          isClearable={false}
          isLoading={loading}
          options={specialties}
          value={selectedOptions}
          onChange={setSelectedOptions}
          onCreateOption={handleCreateSpecialty}
          placeholder="Escribe las materias que desempeñas"
          formatCreateLabel={(input) => `Presiona enter para añadir "${input}"`}
          className="my-react-select-container"
          classNamePrefix="my-react-select"
        />
      </div>
      <button
        onClick={handleSubmit}
        disabled={loading}
        type="button"
        className="btn btn-primary mt-8"
      >
        Guardar
      </button>
    </div>
  );
}
