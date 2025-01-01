import React, { useState } from "react";

const TripType = () => {
  const [tripType, setTripType] = useState("oneWay");

  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  return (
    <div className="trip-type-selector container mt-5">
      <div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="tripType"
            id="oneWay"
            value="oneWay"
            checked={tripType === "oneWay"}
            onChange={handleTripTypeChange}
          />
          <label className="form-check-label" htmlFor="oneWay">
            One Way
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="tripType"
            id="roundTrip"
            value="roundTrip"
            checked={tripType === "roundTrip"}
            onChange={handleTripTypeChange}
          />
          <label className="form-check-label" htmlFor="roundTrip">
            Round Trip
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="tripType"
            id="multiCity"
            value="multiCity"
            checked={tripType === "multiCity"}
            onChange={handleTripTypeChange}
          />
          <label className="form-check-label" htmlFor="multiCity">
            Multicity
          </label>
        </div>
      </div>
      <p className="selected-trip-type mt-3">
        <strong>Selected Trip Type:</strong> {tripType}
      </p>
    </div>
  );
};

export default TripType;
