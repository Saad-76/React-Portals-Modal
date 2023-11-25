import React, { useState } from "react";
import Modal from "../src/Portals/Modal";
import "./App.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="App">
    <h1>React Modal Demo</h1>
    <p>
      This is a demo of how to use portals to create a modal component in
      React.
    </p>
    <button onClick={handleModal}>Open Modal</button>

    {modalOpen && <Modal closeModal={() => setModalOpen(false)} />}
  </div>
  );
}

export default App;
