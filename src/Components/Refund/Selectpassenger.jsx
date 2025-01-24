import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Selectedpassenger.css";

const Selectpassenger = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const [selectedPassenger, setSelectedPassenger] = useState("");

  const handleCheckboxChange = (checkboxName) => {
    setSelectedCheckbox((prev) =>
      prev === checkboxName ? null : checkboxName
    );
  };

  const handlePassengerChange = (event) => {
    setSelectedPassenger(event.target.value);
  };

  const handleConfirm = () => {
    handleSelectClick();
    const selectedData = {
      selectedCheckbox,
      selectedPassenger,
     
    };

    console.log("Confirmation data:", selectedData);

  };
    const navigate = useNavigate();
  
    const handleSelectClick = () => {
      navigate("/pnr_page");
    };

  return (
    <div className="container">
      <div className="my-5 shadow">
        <div className="row">
          <div className="col m-4">
            <h3>Select Passenger for Refund</h3>
            <form>
              <div className="form-group">
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
                    <label htmlFor="selectSpecificPassenger">
                      Select Specific Passenger
                    </label>
                    <select
                      className="form-control mb-3"
                      id="selectSpecificPassenger"
                      disabled={selectedCheckbox !== "specificPassenger"}
                      value={selectedPassenger}
                      onChange={handlePassengerChange}
                    >
                      <option value="">Select Passenger</option>
                      <option value="1">Select Passenger-1</option>
                      <option value="2">Select Passenger-2</option>
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
              <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-outline-secondary me-3">
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleConfirm}
                >
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
