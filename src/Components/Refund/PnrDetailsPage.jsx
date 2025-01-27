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
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-8 shadow">
            <div className="m-4">
              <h3 className="mb-4 font-color-primary fw-semibold font-size-xxxl">
                Ticket Refund
              </h3>
              <div className="row mb-4">
                <div className="col-10 d-flex align align-items-center">
                  <div className="card-body me-5">
                    <h6 className="card-title font-size-lg  font-color-secondary">
                      Booking Reference / PNR
                    </h6>
                    <p className="card-text fw-semibold font-color-primary fw-bold mt-2">
                      TKJULK
                    </p>
                  </div>
                  <div className="card-body me-4">
                    <h6 className="card-title font-size-lg  font-color-secondary">
                      Date Of Booking
                    </h6>
                    <p className="card-text fw-semibold font-color-primary fw-bold mt-2">
                      24 feb 2024
                    </p>
                  </div>
                  <div className="card-body">
                    <h6 className="card-title font-size-lg  font-color-secondary">
                      Selected Passenger
                    </h6>
                    <p className="card-text fw-semibold font-color-primary fw-bold mt-2">
                      {displayPassengers}
                    </p>
                  </div>
                </div>
                <div className="col-2"></div>
              </div>

              <div className="row mt-4 ">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body mt-3">
                      <div className="col-12">
                        <h6 className="card-title font-color-primary fw-semibold font-size-xxl">
                          Chittagong to Dhaka, 24 feb 2024
                        </h6>
                      </div>
                      <div className="row d-flex align-content-center align-items-center">
                        <div className="col-4 mt-3">
                          <p className="font-size-lg font-color-secondary">
                            Depart
                          </p>
                          <h6 className="font-size-xl fw-semibold my-3 font-color-primary">
                            Chittagong(CGP)
                          </h6>
                          <p className="font-size-lg m-0 my-2">
                            Wed, 24 jan, 14:45
                          </p>
                          <p className="font-size-md">
                            Shah Amanat Shah Airport
                          </p>
                        </div>
                        <div className="col-2 mt-3 d-flex flex-column align-items-center justify-content-center">
                          <p className="m-0">1h 0min</p>
                          <img
                            src="images/arrow_line.png"
                            alt=""
                            className="img-fluid"
                          />
                          <p className="m-0">NonStop</p>
                        </div>
                        <div className="col-4 mt-3">
                          <p className="font-size-lg  font-color-secondary">
                            Arrive
                          </p>
                          <h6 className="font-size-xl fw-semibold my-3 font-color-primary">
                            Dhaka(DAC)
                          </h6>
                          <p className="font-size-lg m-0 my-2">
                            Wed, 24 mar, 15.45
                          </p>
                          <p className="font-size-md">
                            Hazrat Shahjalal Int. Airport
                          </p>
                        </div>
                        <div className="col-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="allPassengerCheckbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                          />
                          <label
                            className="form-check-label text-color-secondary ms-1"
                            htmlFor="allPassengerCheckbox"
                          >
                            Select For Change
                          </label>
                        </div>
                      </div>
                      <h6 className="card-title fw-semibold font-size-xl my-2">
                        Select New Travel Details :
                      </h6>
                      <div className="row mt-3">
                        <div className="col-6">
                          <div className="form-group">
                            <label htmlFor="new-departure-date ">
                              New Departure Date
                            </label>
                            <br />
                            {/* <input
                              type="text"
                              className="form-control mt-2"
                              id="new-departure-date"
                              value={newDepartureDate}
                              onChange={handleDepartureDateChange}
                              style={{ height: "48px" }}
                            /> */}
                            <DatePicker
                              type="date"
                              selected={selectedDate}
                              onChange={handleDateChange}
                              dateFormat="MMMM d, yyyy" // Customize the date format (optional)
                              placeholderText="Select a date" // Placeholder text (optional)
                              isClearable={true} // Option to clear the selected date (optional)
                              showMonthDropdown
                              showYearDropdown
                              dropdownMode="select"
                              className="custom-datepicker mt-2 ps-3"
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="form-group">
                            <label htmlFor="booking-class">Booking Class</label>
                            <select
                              className="form-control mt-2"
                              id="booking-class"
                              value={bookingClass}
                              onChange={handleBookingClassChange}
                              style={{ height: "48px" }}
                            >
                              <option value="">Select Booking Class</option>
                              {/* Add options for booking class here */}
                              <option value="economy">Economy</option>
                              <option value="business">Business</option>
                              <option value="first-class">First Class</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="my-4">
                        <hr className="dashed" />
                      </div>
                      <div className="row d-flex align-content-center align-items-center">
                        <div className="col-4 mt-3">
                          <p className="font-size-lg font-color-secondary">
                            Depart
                          </p>
                          <h6 className="font-size-xl fw-semibold my-3 font-color-primary">
                            Chittagong(CGP)
                          </h6>
                          <p className="font-size-lg m-0 my-2">
                            Wed, 24 jan, 14:45
                          </p>
                          <p className="font-size-md">
                            Shah Amanat Shah Airport
                          </p>
                        </div>
                        <div className="col-2 mt-3 d-flex flex-column align-items-center justify-content-center">
                          <p className="m-0">1h 0min</p>
                          <img
                            src="images/arrow_line.png"
                            alt=""
                            className="img-fluid"
                          />
                          <p className="m-0">NonStop</p>
                        </div>
                        <div className="col-4 mt-3">
                          <p className="font-size-lg  font-color-secondary">
                            Arrive
                          </p>
                          <h6 className="font-size-xl fw-semibold my-3 font-color-primary">
                            Dhaka(DAC)
                          </h6>
                          <p className="font-size-lg m-0 my-2">
                            Wed, 24 mar, 15.45
                          </p>
                          <p className="font-size-md">
                            Hazrat Shahjalal Int. Airport
                          </p>
                        </div>
                        <div className="col-2"></div>
                      </div>
                      <div className="col-12">
                        <h6 className="card-title fw-medium font-size-xl my-2">
                          *Change date is not Available for this
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
  );
};

export default PnrDetailsPage;
