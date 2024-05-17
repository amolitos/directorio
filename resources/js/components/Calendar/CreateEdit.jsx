import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import { useOutsideClick } from '../../hooks/useOutsideClick';

export function CreateEdit({ modal, setModal, events, setEvents, event }) {
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
    if (event.id === 'new') {
      setEvents([
        ...events,
        {
          id: events.length + 1,
          title: form.title,
          description: form.description,
          date: `${event.date} ${form.hour}`,
        },
      ]);
    } else {
      const index = events.findIndex(
        (evt) => parseInt(evt.id, 10) === parseInt(event.id, 10)
      );
      if (index !== -1) {
        setEvents(() => {
          const newArray = [...events];
          newArray[index] = {
            id: event.id,
            title: form.title,
            description: form.description,
            date: `${event.date} ${form.hour}`,
          };
          return newArray;
        });
      }
    }
    setModal(false);
  };

  useEffect(() => {
    if (event) {
      setValue('title', event.title);
      setValue('description', event.description);
      setValue('hour', event.hour);
    }
  }, [event, setValue]);

  return (
    <form id="conferenceForm" onSubmit={handleSubmit(handleSave)}>
      {modal && (
        <div className="modal">
          <div ref={ref} className="modal-body">
            <div className="flex items-center pb-2 border-b border-b-gray-200">
              <h3 className="font-semibold">
                Evento <span>{moment(event.date).format('LL')}</span>
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
              <label htmlFor="title" className="form-label">
                Título
              </label>
              <input
                id="title"
                name="title"
                {...register('title')}
                type="text"
                className="form-input"
              />
              {errors.title && (
                <p className="form-error">{errors.title.message}</p>
              )}
            </div>
            <div className="mt-3">
              <label htmlFor="description" className="form-label">
                Descripción
              </label>
              <textarea
                id="description"
                name="description"
                {...register('description')}
                rows={5}
                className="form-input"
              />
              {errors.description && (
                <p className="form-error">{errors.description.message}</p>
              )}
            </div>
            <div className="mt-3">
              <label htmlFor="hour" className="form-label">
                Hora
              </label>
              <input
                id="hour"
                name="hour"
                {...register('hour')}
                type="time"
                className="form-input"
              />
              {errors.hour && (
                <p className="form-error">{errors.hour.message}</p>
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
