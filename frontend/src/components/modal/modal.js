import React from "react";
import Instructions from "./instructions";
import closeIcon from "../../assets/Icons/close.png";
import "./modal.css";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const handleWindowClose = (e) => {
    if (e.target.className === "modal display-block") {
      handleClose();
    }

    console.log(e);
  };

  return (
    <div className={showHideClassName} onClick={handleWindowClose}>
      <section className="modal-main">
        {children}
        <Instructions />
        <img
          id="icon-close"
          src={closeIcon}
          onClick={handleClose}
          alt="close"
        />
      </section>
    </div>
  );
};

export default Modal;
