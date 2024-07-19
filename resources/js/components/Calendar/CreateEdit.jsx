import React, { useEffect } from 'react';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  createAppointment,
  deleteAppointment,
  updateAppointment,
} from '../../store/appointmentSlicer';
import 'moment/dist/locale/es';

export function CreateEdit({ modal, setModal }) {
  const { appointment, error } = useSelector((state) => state.appointments);
  const {
    reset,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    reset({
      title: '',
      description: '',
      hour: '09:00',
    });
    setModal(false);
  };

  const handleSave = async (form) => {
    if (appointment.id === 'new') {
      dispatch(
        createAppointment({
          title: form.title,
          description: form.description,
          start: `${appointment.date} ${form.hour}`,
        })
      );
    } else {
      dispatch(
        updateAppointment({
          id: appointment.id,
          title: form.title,
          description: form.description,
          start: `${appointment.date} ${form.hour}`,
        })
      );
    }
    if (error == null) {
      handleCloseModal();
    }
  };

  const handleDelete = async () => {
    dispatch(deleteAppointment(appointment.id));
    handleCloseModal();
  };

  useEffect(() => {
    setValue('title', appointment.title);
    setValue('description', appointment.description);
    setValue('hour', appointment.hour);
  }, [
    modal,
    appointment.description,
    appointment.hour,
    appointment.title,
    setValue,
  ]);

  return (
    <form id="conferenceForm" onSubmit={handleSubmit(handleSave)}>
      {modal && (
        <div className="modal">
          <div className="modal-body w-full md:w-[640px]">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-xl md:text-3xl mr-auto">
                {moment(appointment.date).locale('es-mx').format('LL')}
              </h3>
              {appointment.id !== 'new' && (
                <button
                  onClick={handleDelete}
                  type="button"
                  className="btn border-none text-lg px-2"
                >
                  <i className="fa-solid fa-trash-can" />
                </button>
              )}
              <button
                onClick={handleCloseModal}
                type="button"
                className="btn border-none text-lg px-2"
              >
                <i className="fas fa-times" />
              </button>
            </div>
            {error && (
              <div className="alert alert-danger mt-5" role="alert">
                {error}
              </div>
            )}
            <div className="mt-8">
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
                rows={3}
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
            <div className="flex mt-5">
              <button type="submit" className="btn btn-primary ml-auto">
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
