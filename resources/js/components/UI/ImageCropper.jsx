import React, { useRef } from 'react';
import { Cropper, ImageRestriction } from 'react-advanced-cropper';
import ReactModal from 'react-modal';
import 'react-advanced-cropper/dist/style.css';

export function ImageCropper({ modal, setModal, image, handleOnResultImage }) {
  const cropperRef = useRef(null);

  const handleCrop = () => {
    const canvas = cropperRef.current?.getCanvas();
    if (canvas) {
      canvas.toBlob((blob) => {
        handleOnResultImage(blob);
        setModal(false);
      }, 'image/jpeg');
    }
  };

  return (
    <ReactModal
      isOpen={modal}
      overlayClassName="modal"
      className="modal-body"
      ariaHideApp={false}
    >
      <div className="flex items-center justify-between">
        <h4 className="font-bold md:text-lg">Editor multimedia</h4>
        <button
          onClick={() => setModal(false)}
          type="button"
          className="btn border-none text-lg px-2"
        >
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
      <Cropper
        ref={cropperRef}
        src={image && image.src}
        stencilProps={{
          aspectRatio: 1,
          handlers: false,
          lines: false,
          movable: false,
          resizable: false,
          previewClassName: 'border-4 border-blue-600',
        }}
        backgroundWrapperProps={{
          scaleImage: false,
        }}
        imageRestriction={ImageRestriction.stencil}
        className="w-full md:w-[450px] h-[300px] md:h-[450px] mt-5"
      />
      <div className="w-full flex items-center mt-5">
        <button
          onClick={() => cropperRef.current.zoomImage(0.9)}
          type="button"
          className="btn btn-secondary grow"
        >
          <i className="fa-solid fa-magnifying-glass-minus mr-2" />
          Alejar
        </button>
        <button
          onClick={() => cropperRef.current.zoomImage(1.1)}
          type="button"
          className="btn btn-secondary grow"
        >
          <i className="fa-solid fa-magnifying-glass-plus mr-2" />
          Acercar
        </button>
        <button
          onClick={() => cropperRef.current.rotateImage(90)}
          type="button"
          className="btn btn-secondary grow"
        >
          <i className="fa-solid fa-rotate-right mr-2" />
          Rotar
        </button>
      </div>
      <div className="grid mt-5">
        <button onClick={handleCrop} type="button" className="btn btn-primary">
          LISTO
        </button>
      </div>
    </ReactModal>
  );
}
