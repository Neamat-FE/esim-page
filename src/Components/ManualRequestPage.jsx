import React from "react";

const ManualRequestPage = () => {
  return (
    <div>
      <div className="d-flex flex-column align-items-center text-center">
        <h3 className="mb-4 font-color-primary fw-semibold font-size-xxxl">
          Create Manual Refund Request{" "}
        </h3>
      </div>

      <div className="pnr-info d-flex align-content-center align-items-center m-4 bg-body-secondary">
        <div>
          {" "}
          <p>PNR : AB7JQQ</p>
          <p>City Pair : DEL - BOM</p>
          <p>Flight No : G8-330</p>
        </div>
        <div>
          {" "}
          <p>Travel Date</p>
          <p>13-Apr-2024</p>
          <p>Lead Guest : Mr John Doe </p>
        </div>
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

export default ManualRequestPage;
