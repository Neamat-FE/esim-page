import React, { useState } from "react";
import "./PnrDetailsPage.css";
import { useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";

const PnrDetailsPage = () => {
  const location = useLocation();
  const { passengerItem } = location.state || {};

  // Convert single passenger to array format for consistent handling
  const passengerListFix = Array.isArray(passengerItem)
    ? passengerItem
    : passengerItem
    ? [passengerItem]
    : [];

  const displayPassengers = passengerListFix
    .map((passenger) => passenger.name)
    .join(", ");

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
                  <div className="card-body me-2">
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

                <div className="mt-4">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Passenger</th>
                        <th scope="col">Cancellation Fee</th>
                        <th scope="col">Contact</th>
                      </tr>
                    </thead>
                    <tbody>
                      {passengerListFix.length > 0 ? (
                        passengerListFix.map((passenger, index) => (
                          <tr key={index}>
                            <td>{passenger.name || "N/A"}</td>
                            <td>{passenger.cancellationFee || "N/A"}</td>
                            <td>{passenger.contact || "N/A"}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="3" className="text-center">
                            No passenger data available
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="col-10 d-flex align align-items-center"></div>
                <div className="col-2"></div>
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
