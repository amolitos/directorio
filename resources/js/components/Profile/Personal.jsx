import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useWizard } from 'react-use-wizard';
import StarterKit from '@tiptap/starter-kit';
import HardBreak from '@tiptap/extension-hard-break';
import { EditorContent, useEditor } from '@tiptap/react';
import { toast } from 'react-toastify';
import { metadataProfile } from '../../store/profileSlicer';
import { ImageCropper } from '../UI/ImageCropper';

export function Personal() {
  const { profile, loading } = useSelector((state) => state.profile);
  const [modal, setModal] = useState(false);
  const fileInputRef = useRef(null);
  const previewRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const dispatch = useDispatch();
  const { nextStep } = useWizard();

  const editorInstance = useEditor({
    extensions: [
      StarterKit,
      HardBreak.extend({
        name: 'customHardBreak',
        addKeyboardShortcuts() {
          return {
            Enter: ({ editor }) => editor.commands.setHardBreak(),
          };
        },
      }),
    ],
    content: profile.biography ?? '',
    editorProps: {
      attributes: {
        class: 'form-input min-h-48 max-h-96 overflow-y-auto',
      },
    },
  });

  const handleSelectImage = (e) => {
    const { files } = e.target;

    if (files && files[0]) {
      const blob = URL.createObjectURL(files[0]);
      setSelectedImage({
        src: blob,
        type: files[0].type,
      });
      setModal(true);
    }
  };

  const handleOnResultImage = (blob) => {
    setResultImage(blob);
    previewRef.current.src = URL.createObjectURL(blob);
  };

  const handleSave = async () => {
    const formData = new FormData();
    if (resultImage !== null && resultImage !== undefined) {
      formData.append('photo', resultImage);
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
      <ImageCropper
        modal={modal}
        setModal={setModal}
        image={selectedImage}
        handleOnResultImage={handleOnResultImage}
      />
      <label className="form-label">
        Fotografía
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleSelectImage}
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
          <ul className="list-disc text-sm text-gray-400 ml-3 mb-3">
            <li>
              Una buena imagen es fundamental para dar profesionalidad a tu
              perfil.
            </li>
            <li>El tamaño de archivo máximo es de 1MB.</li>
            <li>Solo formatos .jpg, .jpeg o .png</li>
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
