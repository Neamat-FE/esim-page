import React from "react";
import { Row } from "react-bootstrap";

const RefundManualRequest = ({ onClose }) => {
  const close = () => {
    onClose(false);
  };

  return (
    <div className="container">
      <div className="my-2">
        <div className="row">
          <div className="col-md-12">
            <h3 className="mb-4 font-color-primary fw-semibold font-size-xxxl">
              Create Manual Refund Request
            </h3>
          </div>
        </div>

        <div className="row">
          {/* Left Section (PNR Info) */}
          <div className="col-md-8">
            <div className="pnr-info d-flex bg-body-secondary rounded-3 h-100 p-4">
              <div className="row w-100">
                {/* Left Column */}
                <div className="col-md-6">
                  <p className="m-0 fw-bold">PNR : AB7JQQ</p>
                  <p className="m-0 my-2">City Pair : DEL - BOM</p>
                  <p className="m-0">Flight No : G8-330</p>
                </div>
                {/* Right Column */}
                <div className="col-md-6 mt-3 mt-md-0">
                  <p className="m-0 fw-bold">Travel Date</p>
                  <p className="m-0 my-2">13-Apr-2024</p>
                  <p className="m-0">Lead Guest : Neamat</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (Empty or Placeholder) */}
          <div className="col-md-4 d-flex align-items-center justify-content-center mt-2 mt-md-0"></div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6 col-sm-12">
            <div className="form-group" style={{ position: "relative" }}>
              <label htmlFor="booking-class">Select Passenger</label>
              <select
                className="form-control mt-2"
                id="select_passenger"
                style={{
                  height: "48px",
                  appearance: "none", // Hides default dropdown arrow
                  paddingRight: "40px", // Ensures space for the arrow image
                  width: "100%",
                }}
              >
                <option value="">Select Passenger</option>
                <option value="economy">Neamat</option>
                <option value="business">Dip</option>
                <option value="first-class">Zakir</option>
              </select>

              {/* Centered Arrow Image */}
              <img
                src="/images/arrow-circle-up.png" // Ensure correct path
                alt="Dropdown Arrow"
                style={{
                  position: "absolute",
                  right: "15px", // Position to the right
                  top: "50%", // Center vertically
                  transform: "translateY(10%)", // Adjust for perfect centering
                  width: "28px", // Adjust size as needed
                  height: "28px",
                  pointerEvents: "none", // Prevent click interference
                }}
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mt-3 mt-md-0">
            <div className="form-group">
              <label htmlFor="remarks">Enter Remarks</label>
              <input
                type="text"
                className="form-control mt-2"
                id="user_remarks"
                placeholder="Enter your remarks"
                style={{ height: "48px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end my-4">
        <button
          type="button"
          className="btn btn-secondary me-3"
          onClick={close}
        >
          Cancel
        </button>
        <button type="button" className="btn btn-primary">
          Confirm Submit
        </button>
      </div>
    </div>
  );
};

export default RefundManualRequest;
