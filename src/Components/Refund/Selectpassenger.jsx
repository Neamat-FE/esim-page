import React from "react";
import "./Selectedpassenger.css";
import { useState } from "react";

const Selectpassenger = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const handleCheckboxChange = (checkboxName) => {
    setSelectedCheckbox((prev) =>
      prev === checkboxName ? null : checkboxName
    );
  };

  return (
    <div className="container">
      <div class="my-5 shadow">
        <div class="row">
          <div class="col m-4">
            <h3>Select Passenger for Refund</h3>
            <form>
              <div class="form-group">
                <h5>Select passenger</h5>
                <div className="d-flex align-items-center">
                  <div className="form-check mt-2 confirm-info me-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="allPassengerCheckbox"
                      checked={selectedCheckbox === "allPassenger"}
                      onChange={() => handleCheckboxChange("allPassenger")}
                    />
                    <label
                      className="form-check-label text-color-secondary ms-2"
                      htmlFor="allPassengerCheckbox"
                    >
                      All Passenger
                    </label>
                  </div>

                  <div className="form-check mt-2 confirm-info me-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="specificPassengerCheckbox"
                      checked={selectedCheckbox === "specificPassenger"}
                      onChange={() => handleCheckboxChange("specificPassenger")}
                    />
                    <label
                      className="form-check-label text-color-secondary ms-2"
                      htmlFor="specificPassengerCheckbox"
                    >
                      Specific Passenger
                    </label>
                  </div>

                  <div className="">
                    <label for="selectSpecificPassenger">
                      Select Specific Passenger
                    </label>
                    <select
                      class="form-control mb-3"
                      id="selectSpecificPassenger"
                    >
                      <option value="">Select Passenger</option>
                      <option value="">Select Passenger-1</option>
                      <option value="">Select Passenger-2</option>
                    </select>
                  </div>
                </div>
                <div>
                  <p>
                    * Refund for specific passenger(s) will result in new PNR
                    creation. Unchanged passengers(s) will remain on the mother
                    PNR
                  </p>
                </div>
              </div>
              <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-outline-secondary me-3">
                  Cancel
                </button>
                <button type="button" class="btn btn-primary">
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selectpassenger;
