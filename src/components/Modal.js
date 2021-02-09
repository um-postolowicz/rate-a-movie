import React from "react";

const Modal = ({ closeModal, isModalVisible }) => {
  if (!isModalVisible) {
    return null;
  }
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h3 className="modal__header-title">Modal</h3>
          <div className="modal__close">
            <button className="modal__close-btn" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
        <div className="modal__body">Lalala</div>
      </div>
    </div>
  );
};

export default Modal;
