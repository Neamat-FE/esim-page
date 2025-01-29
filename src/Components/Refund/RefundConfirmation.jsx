import React from "react";

const RefundConfirmation = ({ onSwitchToPnr, onClose }) => {
  const close = () => {
    onClose(false);
    onSwitchToPnr("refundSelect");
  };
  return (
    <div>
      <div className="d-flex flex-column align-items-center text-center">
        <img src="images/alert.png" alt="" className=" img-fluid mb-4" />
        <h3 className=" font-color-primary fw-semibold font-size-xxxl text-center">
          We’re Sorry!
        </h3>
        <p className="text-color-secondary text-center">
          Please try with manual refund request by filling the required fields
          below{" "}
        </p>
      </div>

      <div className="d-flex justify-content-end m-4">
        <button
          type="button"
          className="btn btn-secondary me-3"
          onClick={close}
        >
          Cancel
        </button>
        <button type="button" className="btn btn-primary">
          Manual Request
        </button>
      </div>
    </div>
  );
};

export default RefundConfirmation;
