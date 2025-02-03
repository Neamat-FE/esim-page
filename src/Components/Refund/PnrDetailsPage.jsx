import React, { useState } from "react";
import "./PnrDetailsPage.css";
import { useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";

const PnrDetailsPage = () => {
  const location = useLocation();
  const { passengerItem } = location.state || {};

  const displayPassengers = Array.isArray(passengerItem)
    ? passengerItem.map((passenger) => passenger.name).join(", ")
    : passengerItem?.name;

  const [newDepartureDate, setNewDepartureDate] = useState("12/05/2025");
  const [bookingClass, setBookingClass] = useState("");

  const handleDepartureDateChange = (e) => {
    setNewDepartureDate(e.target.value);
  };

  const handleBookingClassChange = (e) => {
    setBookingClass(e.target.value);
  };

  const handleNextClick = () => {
    console.log("Next button clicked");
  };

  const handleBackClick = () => {
    console.log("Back button clicked");
  };

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="container">
      <div className="my-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8 col-12 shadow">
            <div className="m-4">
              <h3 className="mb-4 font-color-primary fw-semibold font-size-xxxl">
                Ticket Refund
              </h3>

              {/* Booking Details */}
              <div className="row mb-4">
                <div className="col-md-10 col-12 d-flex flex-wrap">
                  <div className="card-body me-4">
                    <h6 className="card-title font-size-lg font-color-secondary">
                      Booking Reference / PNR
                    </h6>
                    <p className="card-text fw-bold font-color-primary mt-2">
                      TKJULK
                    </p>
                  </div>
                  <div className="card-body me-4">
                    <h6 className="card-title font-size-lg font-color-secondary">
                      Date Of Booking
                    </h6>
                    <p className="card-text fw-bold font-color-primary mt-2">
                      24 Feb 2024
                    </p>
                  </div>
                  <div className="card-body">
                    <h6 className="card-title font-size-lg font-color-secondary">
                      Selected Passenger
                    </h6>
                    <p className="card-text fw-bold font-color-primary mt-2">
                      {displayPassengers}
                    </p>
                  </div>
                </div>
              </div>

              {/* Flight Details */}
              <div className="row mt-4">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body mt-3">
                      <div className="col-12">
                        <h6 className="card-title font-color-primary fw-semibold font-size-xxl">
                          Chittagong to Dhaka, 24 Feb 2024
                        </h6>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-md-3 col-12 mt-3">
                          <p className="font-size-lg font-color-secondary">
                            Depart
                          </p>
                          <h6 className="font-size-xl fw-semibold my-3 font-color-primary">
                            Chittagong (CGP)
                          </h6>
                          <p className="font-size-lg my-2">
                            Wed, 24 Jan, 14:45
                          </p>
                          <p className="font-size-md">
                            Shah Amanat Shah Airport
                          </p>
                        </div>
                        <div className="col-md-3 col-12 mt-3 text-center">
                          <p className="m-0">1h 0min</p>
                          <img
                            src="images/arrow_line.png"
                            alt="Flight Path"
                            className="img-fluid"
                          />
                          <p className="m-0">NonStop</p>
                        </div>
                        <div className="col-md-3 col-12 mt-3">
                          <p className="font-size-lg font-color-secondary">
                            Arrive
                          </p>
                          <h6 className="font-size-xl fw-semibold my-3 font-color-primary">
                            Dhaka (DAC)
                          </h6>
                          <p className="font-size-lg my-2">
                            Wed, 24 Mar, 15:45
                          </p>
                          <p className="font-size-md">
                            Hazrat Shahjalal Int. Airport
                          </p>
                        </div>
                        <div className="col-md-3 col-12 mt-3 d-flex align-items-center justify-content-center">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="allPassengerCheckbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                          />
                          <label
                            className="form-check-label text-color-secondary ms-2 "
                            htmlFor="allPassengerCheckbox"
                          >
                            Select For Change
                          </label>
                        </div>
                      </div>

                      {/* New Travel Details */}
                      {isChecked && (
                        <div>
                          <h6 className="card-title fw-semibold font-size-xl my-3">
                            Select New Travel Details:
                          </h6>
                          <div className="row mt-3 mb-3">
                            <div className="col-md-6 col-12">
                              <div className="form-group">
                                <label htmlFor="new-departure-date">
                                  New Departure Date
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
                            <div className="col-md-6 col-12">
                              <div className="form-group">
                                <label htmlFor="booking-class">
                                  Booking Class
                                </label>
                                <select
                                  className="form-control mt-2"
                                  id="booking-class"
                                  value={bookingClass}
                                  onChange={handleBookingClassChange}
                                  style={{ height: "48px" }}
                                >
                                  <option value="">Select Booking Class</option>
                                  <option value="economy">Economy</option>
                                  <option value="business">Business</option>
                                  <option value="first-class">
                                    First Class
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="d-flex justify-content-end m-4">
                <button
                  type="button"
                  className="btn btn-secondary me-3"
                  onClick={handleBackClick}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleNextClick}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PnrDetailsPage;
