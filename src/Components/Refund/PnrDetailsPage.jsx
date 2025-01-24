import React, { useState } from 'react';

const PnrDetailsPage = () => {
  const [newDepartureDate, setNewDepartureDate] = useState("12/05/2025");
  const [bookingClass, setBookingClass] = useState("");

  const handleDepartureDateChange = (e) => {
    setNewDepartureDate(e.target.value);
  };

  const handleBookingClassChange = (e) => {
    setBookingClass(e.target.value);
  };

  const handleNextClick = () => {
    console.log('Next button clicked');
  };

  const handleBackClick = () => {
    console.log('Back button clicked');
  };

  return (
    <>
      <div className="container my-5">
        <h1 className="mb-4">Change PNR/Ticket</h1>

        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Booking Reference / PNR</h5>
                <p className="card-text">TKJULK dhaka city</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Date Of Booking</h5>
                <p className="card-text">24 feb 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Selected Passenger</h5>
                <p className="card-text">Esther, John, Child Two</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Chittagong to Dhaka, 24 feb 2024</h5>
                <p className="card-text">
                  Depart: Chittagong(CGP) Wed, 24 jan, 14:45 - Dhaka(DAC) NonStop
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="new-departure-date">New Departure Date</label>
              <input
                type="text"
                className="form-control"
                id="new-departure-date"
                value={newDepartureDate}
                onChange={handleDepartureDateChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="booking-class">Booking Class</label>
              <select
                className="form-control"
                id="booking-class"
                value={bookingClass}
                onChange={handleBookingClassChange}
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

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Dhaka to Chittagong, 27 feb 2024</h5>
                <p className="card-text">
                  Depart: Dhaka(DAC) Wed, 27 jan, 14:45 - Chittagong(CGP) NonStop
                </p>
                <p className="text-danger">Change date is not available for this.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end mt-4">
          <button type="button" className="btn btn-secondary mr-2" onClick={handleBackClick}>
            Back
          </button>
          <button type="button" className="btn btn-primary" onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default PnrDetailsPage;
