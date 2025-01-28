// ReusableModal.jsx
import React from "react";
import Modal from "react-modal";

// Bind modal to your appElement for accessibility
Modal.setAppElement("#root");

const ModalPage = ({ isOpen, onClose, title, children, customStyles = {} }) => {
  const defaultStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "20px",
      maxWidth: "900px",
      width: "90%",
      borderRadius: "20px",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{ ...defaultStyles, ...customStyles }}
      contentLabel="Reusable Modal"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        {/* <h2>{title}</h2>
        <button onClick={onClose}>✕</button> */}
      </div>
      <div>{children}</div>
      {/* <div style={{ marginTop: "20px", textAlign: "right" }}>
        <button onClick={onClose}>Close</button>
      </div> */}
    </Modal>
  );
};

export default ModalPage;
