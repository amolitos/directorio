import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useWizard } from 'react-use-wizard';
import { toast } from 'react-toastify';
import { fetchProfile, createUpdateProfile } from '../../store/profileSlicer';
import { useDegrees } from '../../hooks/useDegrees';
import { useLocation } from '../../hooks/useLocation';

export function General() {
  const { profile, loading } = useSelector((state) => state.profile);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { degrees } = useDegrees();
  const { states, cities, handleOnChageState } = useLocation(
    profile?.state_id ?? 1
  );
  const dispatch = useDispatch();
  const { nextStep } = useWizard();

  const handleSave = async (form) => {
    try {
      await dispatch(createUpdateProfile({ ...form })).unwrap();
      toast.success('Se guardo la información exitosamente.');
      nextStep();
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  useEffect(() => {
    if (profile) {
      setValue('school', profile.school);
      setValue('professional_id', profile.professional_id);
      setValue('office', profile.office);
      setValue('street', profile.street);
      setValue('suburb', profile.suburb);
    }
  }, [profile, setValue]);

  useEffect(() => {
    setValue('degree_id', profile?.degree_id);
  }, [degrees, profile?.degree_id, setValue]);

  useEffect(() => {
    setValue('state_id', profile?.state_id);
  }, [states, profile?.state_id, setValue]);

  useEffect(() => {
    setValue('city_id', profile?.city_id);
  }, [cities, profile?.city_id, setValue]);

  return (
    <form onSubmit={handleSubmit(handleSave)} className="card p-5">
      <div>
        <label htmlFor="school" className="form-label">
          Escuela
        </label>
        <input
          id="school"
          name="school"
          type="text"
          {...register('school', {
            required: 'El campo es requerido',
          })}
          disabled={loading}
          className="form-input"
        />
        {errors.school && <p className="form-error">{errors.school.message}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
        <div>
          <label htmlFor="nivel_estudio" className="form-label">
            Nivel de estudio
          </label>
          <select
            {...register('degree_id', {
              required: 'El campo es requerido',
            })}
            disabled={loading}
            className="form-input"
          >
            {degrees.map((degree) => (
              <option key={degree.id} value={degree.id}>
                {degree.name}
              </option>
            ))}
          </select>
          {errors.degree_id && (
            <p className="form-error">{errors.degree_id.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="professional_id" className="form-label">
            Cédula profesional
          </label>
          <input
            id="professional_id"
            name="professional_id"
            type="text"
            {...register('professional_id')}
            disabled={loading}
            className="form-input"
          />
          {errors.professional_id && (
            <p className="form-error">{errors.professional_id.message}</p>
          )}
        </div>
      </div>
      <div className="mt-3">
        <label htmlFor="office" className="form-label">
          Despacho
        </label>
        <input
          id="office"
          name="office"
          type="text"
          {...register('office')}
          disabled={loading}
          className="form-input"
        />
        {errors.office && <p className="form-error">{errors.office.message}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
        <div>
          <label htmlFor="street" className="form-label">
            Calle
          </label>
          <input
            id="street"
            name="street"
            type="text"
            {...register('street')}
            disabled={loading}
            className="form-input"
          />
          {errors.street && (
            <p className="form-error">{errors.street.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="suburb" className="form-label">
            Colonia
          </label>
          <input
            id="suburb"
            name="suburb"
            type="text"
            {...register('suburb')}
            disabled={loading}
            className="form-input"
          />
          {errors.suburb && (
            <p className="form-error">{errors.suburb.message}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
        <div>
          <label htmlFor="state_id" className="form-label">
            Estado
          </label>
          <select
            id="state_id"
            {...register('state_id')}
            onChange={handleOnChageState}
            disabled={loading}
            className="form-input"
          >
            {states.map((state) => (
              <option key={state.id} value={state.id}>
                {state.name}
              </option>
            ))}
          </select>
          {errors.state && <p className="form-error">{errors.state.message}</p>}
        </div>
        <div>
          <label htmlFor="city_id" className="form-label">
            City
          </label>
          <select
            id="city_id"
            {...register('city_id', {
              required: 'El city es requerido',
            })}
            disabled={loading}
            className="form-input"
          >
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
          {errors.city_id && (
            <p className="form-error">{errors.city_id.message}</p>
          )}
        </div>
      </div>
      <p className="text-sm text-gray-400 mt-5">
        * La confidencialidad de los datos es muy importante para nosotros,
        cuidaremos bien la información que nos proporcionas.
      </p>
      <button type="submit" disabled={loading} className="btn btn-primary mt-5">
        Guardar
      </button>
    </form>
  );
}
