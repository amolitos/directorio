import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useWizard } from 'react-use-wizard';
import StarterKit from '@tiptap/starter-kit';
import { EditorContent, useEditor } from '@tiptap/react';
import { toast } from 'react-toastify';
import { metadataProfile } from '../../store/profileSlicer';

export function Personal() {
  const { profile, loading } = useSelector((state) => state.profile);
  const fileInputRef = useRef(null);
  const previewRef = useRef(null);
  const [photo, setFoto] = useState(null);
  const dispatch = useDispatch();
  const { nextStep } = useWizard();

  const CustomStarterKit = StarterKit.configure({
    paragraph: {
      HTMLAttributes: {
        class: 'min-h-[1rem]',
      },
    },
  });

  const editorInstance = useEditor({
    extensions: [CustomStarterKit],
    content: profile.biography ?? '<p></p>',
    editorProps: {
      attributes: { class: 'form-input h-96 max-h-96 overflow-y-auto' },
    },
  });

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    setFoto(file);
    previewRef.current.src = URL.createObjectURL(file);
  };

  const handleSave = async () => {
    const formData = new FormData();
    if (photo !== null && photo !== undefined) {
      formData.append('photo', photo);
    }
    formData.append('biography', editorInstance.getHTML().toString());

    try {
      await dispatch(metadataProfile(formData)).unwrap();
      toast.success('Se guardo la información exitosamente.');
      nextStep();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <form className="card">
      <label className="form-label">
        Fotografía
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFotoChange}
          hidden
        />
      </label>
      <div className="flex flex-col md:flex-row items-center gap-5 border border-gray-500 rounded p-3">
        <img
          ref={previewRef}
          src={profile.photo ? `/storage/${profile.photo}` : '/images/user.jpg'}
          alt="Foto de profile"
          className="w-36 h-36 bg-stone-200 object-contain object-center"
        />
        <div>
          <ul className="list-disc list-inside text-sm text-gray-400 mb-3">
            <li>La imagen es fundamental para darle seriedad a tu profile.</li>
            <li>El tamaño de archivo máximo es de 1MB.</li>
            <li>Solo formatos .jpg, .jpeg o .png</li>
            <li>Dimensiones de 800 (ancho) x 800 píxeles (alto).</li>
          </ul>
          <button
            onClick={() => fileInputRef.current.click()}
            type="button"
            className="btn btn-secondary mobile:w-full"
          >
            {profile.photo ? 'Cambiar' : 'Elegir'} foto de perfil
          </button>
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="biography" className="form-label">
          Currículum académico y/o laboral
        </label>
        <EditorContent editor={editorInstance} />
      </div>
      <button
        onClick={handleSave}
        disabled={loading}
        type="button"
        className="btn btn-primary mt-5"
      >
        Guardar
      </button>
    </form>
  );
}
