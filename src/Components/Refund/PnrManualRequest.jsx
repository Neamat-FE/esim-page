import DatePicker from "react-datepicker";
import React, { useState } from "react";

const PnrManualRequest = ({ onClose }) => {
  const close = () => {
    onClose(false);
  };
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="container">
      <div className="my-2">
        <div className="row">
          <div className="col-md-12">
            <h3 className="mb-4 font-color-primary fw-semibold font-size-xxxl">
              Create Manual Request for PNR/Ticket
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
        </div>

        <div className="row mt-4">
          <div className="col-md-4">
            <div className="form-group" style={{ position: "relative" }}>
              <label htmlFor="booking-class">Choose Category</label>
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
                <option value="">Select Category</option>
                <option value="date-change">Date Change</option>
                <option value="add-traveler">Add Traveler</option>
                <option value="remove-traveler">Remove Traveler</option>
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
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="new-departure-date">
                Departure Date (DEL - BOM)
              </label>
              <br />

              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MMMM d, yyyy"
                placeholderText="Select a date"
                isClearable
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                className="custom-datepicker mt-2 ps-3"
              />
            </div>
          </div>
          <div className="col-md-4 col-12">
            {" "}
            {/* Removed w-100 */}
            <div className="form-group">
              <label htmlFor="new-departure-date">
                Departure Date (BOM - DEL)
              </label>
              <br />
              <div className="w-100">
                {" "}
                {/* Ensures DatePicker fits inside col-md-4 */}
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="MMMM d, yyyy"
                  placeholderText="Select a date"
                  isClearable
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  className="custom-datepicker mt-2 ps-3" // Forces DatePicker to fit
                  width="60px"
                  height="48px"
                  style={{ paddingRight: "0" }} // Removes excess padding from DatePicker
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3 mb-3">
          <div className="col-md-4 col-sm-12">
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
          <div className="col-md-4 col-12">
            <div className="form-group">
              <label htmlFor="booking-class">Select Class</label>
              <select
                className="form-control mt-2"
                id="booking-class"
                style={{ height: "48px" }}
              >
                <option value="">Select Booking Class</option>
                <option value="economy">Economy</option>
                <option value="business">Business</option>
                <option value="first-class">First Class</option>
              </select>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mt-3 mt-md-0">
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

      <div className="d-flex justify-content-end my-4 mt-4">
        <button
          type="button"
          className="btn btn-secondary me-3"
          onClick={close}
        >
          Cancel
        </button>
        <button type="button" className="btn btn-primary">
          Confirm Request Submit
        </button>
      </div>
    </div>
  );
};

export default PnrManualRequest;
