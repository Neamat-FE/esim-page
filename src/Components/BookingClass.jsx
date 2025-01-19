import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BookingClass = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [travelers, setTravelers] = useState({
    adults: 1,
    children: 0,
    kids: 0,
    infants: 0,
    bookingClass: "Economy",
  });

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCountChange = (type, increment) => {
    setTravelers((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + increment),
    }));
  };

  const handleClassChange = (classType) => {
    setTravelers((prev) => ({
      ...prev,
      bookingClass: classType,
    }));
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-secondary dropdown-toggle"
        type="button"
        onClick={handleToggle}
        data-bs-toggle="dropdown"
        aria-expanded={isOpen}
      >
        {travelers.adults +
          travelers.children +
          travelers.kids +
          travelers.infants}{" "}
        Traveler
        {travelers.adults > 1 ? "s" : ""} - {travelers.bookingClass}
      </button>
      {isOpen && (
        <div className="dropdown-menu p-3 shadow" style={{ width: "300px" }}>
          <div className="mb-3">
            <label>Adults (12 years and above)</label>
            <div className="d-flex justify-content-between align-items-center">
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => handleCountChange("adults", -1)}
              >
                -
              </button>
              <span>{travelers.adults}</span>
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => handleCountChange("adults", 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="mb-3">
            <label>Children (5 years - under 12)</label>
            <div className="d-flex justify-content-between align-items-center">
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => handleCountChange("children", -1)}
              >
                -
              </button>
              <span>{travelers.children}</span>
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => handleCountChange("children", 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="mb-3">
            <label>Kids (2 years - under 5)</label>
            <div className="d-flex justify-content-between align-items-center">
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => handleCountChange("kids", -1)}
              >
                -
              </button>
              <span>{travelers.kids}</span>
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => handleCountChange("kids", 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="mb-3">
            <label>Infants (below 2 years)</label>
            <div className="d-flex justify-content-between align-items-center">
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => handleCountChange("infants", -1)}
              >
                -
              </button>
              <span>{travelers.infants}</span>
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => handleCountChange("infants", 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="mb-3">
            <label>Booking Class</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="class"
                id="economy"
                value="Economy"
                checked={travelers.bookingClass === "Economy"}
                onChange={() => handleClassChange("Economy")}
              />
              <label className="form-check-label" htmlFor="economy">
                Economy
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="class"
                id="premiumEconomy"
                value="Premium Economy"
                checked={travelers.bookingClass === "Premium Economy"}
                onChange={() => handleClassChange("Premium Economy")}
              />
              <label className="form-check-label" htmlFor="premiumEconomy">
                Premium Economy
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="class"
                id="business"
                value="Business"
                checked={travelers.bookingClass === "Business"}
                onChange={() => handleClassChange("Business")}
              />
              <label className="form-check-label" htmlFor="business">
                Business
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="class"
                id="firstClass"
                value="First Class"
                checked={travelers.bookingClass === "First Class"}
                onChange={() => handleClassChange("First Class")}
              />
              <label className="form-check-label" htmlFor="firstClass">
                First Class
              </label>
            </div>
          </div>
          <button
            className="btn btn-primary btn-sm w-100"
            onClick={handleToggle}
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingClass;
