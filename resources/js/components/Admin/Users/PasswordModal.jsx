import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import api from '../../../api';

export function PasswordModal({ modal, setModal, userEdit }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCloseModal = () => {
    reset();
    setError(null);
    setModal(false);
  };

  const ref = useOutsideClick(handleCloseModal);

  const handleSave = async (form) => {
    setLoading(true);

    try {
      await api.patch(`/admin/users/${userEdit}`, form);
      handleCloseModal();
      toast.success('Se cambio la contraseña exitosamente.');
    } catch ({ message }) {
      setError(message);
    }

    setLoading(false);
  };

  return (
    <form id="conferenceForm" onSubmit={handleSubmit(handleSave)}>
      {modal && (
        <div className="modal">
          <div ref={ref} className="modal-body">
            <div className="flex items-center">
              <h3 className="font-semibold text-lg">Cambiar contraseña</h3>
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
            <div className="mt-8">
              <label htmlFor="password" className="form-label">
                Nueva contraseña
              </label>
              <input
                id="password"
                name="password"
                {...register('password')}
                type="password"
                className="form-input"
              />
              {errors.password && (
                <p className="form-error">{errors.password.message}</p>
              )}
            </div>
            <div className="mt-3">
              <label htmlFor="password_confirmation" className="form-label">
                Confirma contraseña
              </label>
              <input
                id="password_confirmation"
                name="password_confirmation"
                {...register('password_confirmation')}
                type="password"
                className="form-input"
              />
              {errors.password_confirmation && (
                <p className="form-error">
                  {errors.password_confirmation.message}
                </p>
              )}
            </div>
            <div className="flex justify-end mt-5">
              <button
                disabled={loading}
                type="submit"
                className="btn btn-primary"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
