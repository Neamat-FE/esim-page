import React from "react";

const PnrConfirmation = ({ onSwitchToPnr, onClose }) => {
  const close = () => {
    onClose(false);
    onSwitchToPnr("refundSelect");
  };

  const handleManualRequest = () => {
    onSwitchToPnr("PnrManualRequest");
  };
  return (
    <div>
      <div className="d-flex flex-column align-items-center text-center">
        <img src="images/alert.png" alt="" className=" img-fluid mb-4" />
        <h3 className=" font-color-primary fw-semibold font-size-xxxl text-center">
          We’re Sorry!
        </h3>
        <p className="text-color-secondary text-center mt-3">
          Unable to change, kindly fill in the required fields below to get the
          charges to your email
        </p>
      </div>

      <div className="d-flex justify-content-end my-3 ">
        <button
          type="button"
          className="btn btn-secondary me-3"
          onClick={close}
        >
          Cancel
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleManualRequest}
        >
          Manual Request
        </button>
      </div>
    </div>
  );
};

export default PnrConfirmation;
