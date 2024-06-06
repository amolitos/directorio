import React, { useState } from 'react';
import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from 'react-share';
import { useOutsideClick } from '../../hooks/useOutsideClick';

export function SharedButton({ link }) {
  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const ref = useOutsideClick(handleCloseModal);

  return (
    <>
      {modal && (
        <div className="modal">
          <div ref={ref} className="modal-body">
            <button
              onClick={handleCloseModal}
              type="button"
              className="btn border-none text-lg absolute top-1 right-0"
            >
              <i className="fas fa-times" />
            </button>
            <h3 className="font-bold text-lg">Compartir tarjeta digital</h3>
            <p className="mt-4">¿Dónde deseas compartir la tarjeta digital?</p>
            <div className="flex items-center gap-3 flex-wrap mt-6">
              <WhatsappShareButton url={link}>
                <WhatsappIcon size={52} round />
              </WhatsappShareButton>
              <FacebookShareButton url={link}>
                <FacebookIcon size={52} round />
              </FacebookShareButton>
              <FacebookMessengerShareButton url={link}>
                <FacebookMessengerIcon size={52} round />
              </FacebookMessengerShareButton>
              <LinkedinShareButton url={link}>
                <LinkedinIcon size={52} round />
              </LinkedinShareButton>
              <TwitterShareButton url={link}>
                <XIcon size={52} round />
              </TwitterShareButton>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={handleOpenModal}
        type="button"
        className="btn bg-blue-700 border-blue-700 text-white"
      >
        COMPARTIR TARJETA
      </button>
    </>
  );
}
