import React from "react";

const Modal = ({ closeModal, isModalVisible }) => {
  if (!isModalVisible) {
    return null;
  }
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h3 className="modal__header-title">About the Page</h3>
          <div className="modal__close">
            <button className="modal__close-btn" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
        <div className="modal__body">
          <span className="modal__welcome">Welcome dear user!</span>
          <p className="modal__text">
            I would like to inform you, that this page was created only for
            recruitment purposes. Your ratings are not stored in any database.
          </p>
          <p className="modal__text">
            <span className="modal__important">Rate your Movie</span> page gets
            all the information from OMDb API. Check it here:{" "}
            <a className="modal__link" href="http://www.omdbapi.com">
              OMDb API
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
