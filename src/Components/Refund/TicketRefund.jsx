import React, { useState } from "react";
import "./ChangePnr.css";
import { useLocation } from "react-router-dom";

import DatePicker from "react-datepicker";

const TicketRefund = ({ back, data, onSwitchToPnr }) => {
  const location = useLocation();
  const { passengerItem } = location.state || {};

  // Convert single passenger to array format for consistent handling
  const passengerListFix = Array.isArray(data) ? data : data ? [data] : [];

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
    onSwitchToPnr("refundConfirmation");
  };

  const handleBackClick = () => {
    back("refundSelect");
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
      <div className="my-2">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 ">
            <div className="m-2">
              <h3 className="mb-4 font-color-primary fw-semibold font-size-xxxl">
                Ticket Refund
              </h3>
              <div className="row mb-4">
                {/* Booking Details */}
                <div className="col-12">
                  <div className="row align-items-center">
                    <div className="col-md-4 col-12 mb-3 mb-md-0">
                      <div className="card-body">
                        <h6 className="card-title font-size-lg font-color-secondary">
                          Booking Reference / PNR
                        </h6>
                        <p className="card-text fw-semibold font-color-primary fw-bold mt-2">
                          TKJULK
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4 col-12 mb-3 mb-md-0">
                      <div className="card-body">
                        <h6 className="card-title font-size-lg font-color-secondary">
                          Date Of Booking
                        </h6>
                        <p className="card-text fw-semibold font-color-primary fw-bold mt-2">
                          24 Feb 2024
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4 col-12">
                      <div className="card-body">
                        <h6 className="card-title font-size-lg font-color-secondary">
                          Selected Passenger
                        </h6>
                        <p className="card-text fw-semibold font-color-primary fw-bold mt-2">
                          {displayPassengers}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Table Section */}
                <div className="col-12 mt-4">
                  <table className="table table-bordered">
                    <thead className="text-center">
                      <tr className="table-active">
                        <th scope="col">Passenger</th>
                        <th scope="col">Cancellation Fee</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {passengerListFix.length > 0 ? (
                        passengerListFix.map((passenger, index) => (
                          <tr key={index}>
                            <td>{passenger.name || "N/A"}</td>
                            <td>{passenger.cancellationFee || "N/A"}</td>
                            {index === 0 && ( // Apply rowspan only to the first row
                              <td
                                rowSpan={passengerListFix.length}
                                className="align-middle text-center"
                              >
                                <strong className="text-center">
                                  <p className="m-0 mb-2">
                                    Total Cancellation Fee
                                  </p>
                                  {passengerListFix[0].contact ||
                                    passengerListFix.reduce(
                                      (total, p) =>
                                        total +
                                        (Number(p.cancellationFee) || 0),
                                      0
                                    )}
                                </strong>
                              </td>
                            )}
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="3" className="text-center">
                            No Passenger Selected for Refund
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end ">
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
                Confirm Refund
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketRefund;
