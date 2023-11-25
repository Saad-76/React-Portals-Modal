import React from "react";
import { createPortal } from "react-dom";

import "../App.css";

const Modal = ({ closeModal }) => {
  return createPortal(
    <div className="overlay">
      <div className="modal">
        <h3>Modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, libero.
          Exercitationem quod quam perspiciatis quasi voluptate sint facilis
          quia praesentium pariatur veniam quidem nam, ullam porro eveniet
          molestiae minima eligendi.
        </p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
