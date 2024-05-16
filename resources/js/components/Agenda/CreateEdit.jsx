import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import { useOutsideClick } from '../../hooks/useOutsideClick';

export function CreateEdit({ modal, setModal, eventos, setEventos, evento }) {
  const [error, setError] = useState(null);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCloseModal = () => {
    setError(null);
    setModal(false);
  };

  const ref = useOutsideClick(handleCloseModal);

  const handleSave = async (form) => {
    if (evento.id === 'new') {
      setEventos([
        ...eventos,
        {
          id: eventos.length + 1,
          title: form.titulo,
          descripcion: form.descripcion,
          date: `${evento.fecha} ${form.hora}`,
        },
      ]);
    } else {
      const index = eventos.findIndex(
        (evt) => parseInt(evt.id, 10) === parseInt(evento.id, 10)
      );
      if (index !== -1) {
        setEventos(() => {
          const nuevoArreglo = [...eventos];
          nuevoArreglo[index] = {
            id: evento.id,
            title: form.titulo,
            descripcion: form.descripcion,
            date: `${evento.fecha} ${form.hora}`,
          };
          return nuevoArreglo;
        });
      }
    }
    setModal(false);
  };

  useEffect(() => {
    if (evento) {
      setValue('titulo', evento.titulo);
      setValue('descripcion', evento.descripcion);
      setValue('hora', evento.hora);
    }
  }, [evento, setValue]);

  return (
    <form id="conferenceForm" onSubmit={handleSubmit(handleSave)}>
      {modal && (
        <div className="modal">
          <div ref={ref} className="modal-body">
            <div className="flex items-center pb-2 border-b border-b-gray-200">
              <h3 className="font-semibold">
                Evento <span>{moment(evento.fecha).format('LL')}</span>
              </h3>
              <button
                onClick={handleCloseModal}
                type="button"
                className="btn border-none ml-auto text-xl"
              >
                <i className="fas fa-times" />
              </button>
            </div>
            {error && (
              <div className="alert alert-danger mt-5" role="alert">
                {error}
              </div>
            )}
            <div className="mt-5">
              <label htmlFor="titulo" className="form-label">
                Título
              </label>
              <input
                id="titulo"
                name="titulo"
                {...register('titulo')}
                type="text"
                className="form-input"
              />
              {errors.titulo && (
                <p className="form-error">{errors.titulo.message}</p>
              )}
            </div>
            <div className="mt-3">
              <label htmlFor="descripcion" className="form-label">
                Descripción
              </label>
              <textarea
                id="descripcion"
                name="descripcion"
                {...register('descripcion')}
                rows={5}
                className="form-input"
              />
              {errors.descripcion && (
                <p className="form-error">{errors.descripcion.message}</p>
              )}
            </div>
            <div className="mt-3">
              <label htmlFor="hora" className="form-label">
                Hora
              </label>
              <input
                id="hora"
                name="hora"
                {...register('hora')}
                type="time"
                className="form-input"
              />
              {errors.hora && (
                <p className="form-error">{errors.hora.message}</p>
              )}
            </div>
            <div className="flex justify-end mt-5">
              <button type="submit" className="btn btn-primary">
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
