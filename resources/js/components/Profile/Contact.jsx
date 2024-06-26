import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { createUpdateProfile } from '../../store/profileSlicer';

export function Contact() {
  const { profile, loading } = useSelector((state) => state.profile);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      whatsapp: profile.whatsapp,
      website: profile.website,
      linkedin: profile.linkedin,
      facebook: profile.facebook,
      instagram: profile.instagram,
      twitter: profile.twitter,
    },
  });
  const dispatch = useDispatch();

  const handleSave = async (form) => {
    try {
      await dispatch(createUpdateProfile({ ...profile, ...form })).unwrap();
      window.location.href = '/plans';
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSave)} className="card">
      <p className="text-sm text-gray-400">
        * Poner tu número de WhatsApp de manera pública puede conllevar varios
        riesgos y problemas. El Directorio no se responsabiliza por las personas
        que puedan contactarte.
      </p>
      <div className="mt-5">
        <label htmlFor="whatsapp" className="form-label">
          Número de WhatsApp
        </label>
        <input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          {...register('whatsapp', {
            pattern: {
              value: /^[0-9]+$/,
              message: 'Solo ingresa números',
            },
            minLength: {
              message: 'El número debe tener 10 dígitos',
              value: 10,
            },
            maxLength: {
              message: 'El número debe tener 10 dígitos',
              value: 10,
            },
          })}
          maxLength="10"
          disabled={loading}
          className="form-input"
        />
        {errors.whatsapp && (
          <p className="form-error">{errors.whatsapp.message}</p>
        )}
      </div>
      <div className="mt-3">
        <label htmlFor="website" className="form-label">
          Página web
        </label>
        <input
          id="website"
          name="website"
          type="text"
          {...register('website')}
          disabled={loading}
          className="form-input"
        />
        {errors.website && (
          <p className="form-error">{errors.website.message}</p>
        )}
      </div>
      <div className="mt-3">
        <label htmlFor="linkedin" className="form-label">
          Linkedin
        </label>
        <input
          id="linkedin"
          name="linkedin"
          type="text"
          {...register('linkedin')}
          disabled={loading}
          className="form-input"
        />
        {errors.linkedin && (
          <p className="form-error">{errors.linkedin.message}</p>
        )}
      </div>
      <div className="mt-3">
        <label htmlFor="facebook" className="form-label">
          Facebook
        </label>
        <input
          id="facebook"
          name="facebook"
          type="text"
          {...register('facebook')}
          disabled={loading}
          className="form-input"
        />
        {errors.facebook && (
          <p className="form-error">{errors.facebook.message}</p>
        )}
      </div>
      <div className="mt-3">
        <label htmlFor="instagram" className="form-label">
          Instagram
        </label>
        <input
          id="instagram"
          name="instagram"
          type="text"
          {...register('instagram')}
          disabled={loading}
          className="form-input"
        />
        {errors.instagram && (
          <p className="form-error">{errors.instagram.message}</p>
        )}
      </div>
      <div className="mt-3">
        <label htmlFor="twitter" className="form-label">
          Twitter (X)
        </label>
        <input
          id="twitter"
          name="twitter"
          type="text"
          {...register('twitter')}
          disabled={loading}
          className="form-input"
        />
        {errors.twitter && (
          <p className="form-error">{errors.twitter.message}</p>
        )}
      </div>
      <button type="submit" disabled={loading} className="btn btn-primary mt-5">
        Finalizar
      </button>
    </form>
  );
}
