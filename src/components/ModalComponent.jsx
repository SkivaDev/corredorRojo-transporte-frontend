import React from "react";
import Modal from "react-modal";

const ModalComponent = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="flex items-center justify-center fixed inset-0 z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
      contentLabel="Modal de bienvenida"
      shouldCloseOnOverlayClick={true}
    >
      <div className="bg-white rounded-lg p-7 relative w-[54rem] max-w-full">
        {/* Botón "X" para cerrar */}
        <button
          className="absolute top-0 right-[0.35rem] text-gray-500 hover:text-gray-700 font-bold focus:outline-none text-2xl"
          onClick={closeModal}
        >
          &times;
        </button>
        {/* Imagen en el modal */}
        <img
          src="/src/assets/images/tarifas_rojo.jpg"
          alt="img"
          className="rounded-md"
        />
      </div>
    </Modal>
  );
};

export default ModalComponent;