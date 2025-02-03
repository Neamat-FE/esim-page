import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Selectedpassenger.css";

const RefundSelect = ({ onSwitchToPnr, passengerItem }) => {
  const passengers = [
    { value: "0", name: "Neamat", cancellationFee: "750" },
    { value: "1", name: "Diponkor", cancellationFee: "450" },
    { value: "2", name: "Zakir", cancellationFee: "350" },
    { value: "3", name: "Doe", cancellationFee: "850" },
    { value: "4", name: "John", cancellationFee: "1150" },
  ];

  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const [selectedPassengers, setSelectedPassengers] = useState([]);
  const [selectedPassenger, setSelectedPassenger] = useState("");

  const handleCheckboxChange = (checkboxName) => {
    setSelectedCheckbox((prev) =>
      prev === checkboxName ? null : checkboxName
    );
    if (checkboxName === "allPassenger") {
      setSelectedPassengers([]);
    }
  };

  const handlePassengerChange = (event) => {
    const value = event.target.value;
    if (!value) return;

    const passenger = passengers.find((p) => p.value === value);
    if (!selectedPassengers.some((p) => p.value === value)) {
      setSelectedPassengers([...selectedPassengers, passenger]);
    }
    setSelectedPassenger(""); // Reset select after adding
  };

  const removePassenger = (passengerValue) => {
    setSelectedPassengers((prev) =>
      prev.filter((p) => p.value !== passengerValue)
    );
  };

  const handleConfirm = () => {
    onSwitchToPnr("pnrRefund");
    passengerItem(
      selectedCheckbox === "allPassenger" ? passengers : selectedPassengers
    );

    const selectedData = {
      selectedCheckbox,
      selectedPassengers,
    };
  };

  return (
    <div className="container">
      <div className="my-1">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-12 col-12 bg-white rounded-3 p-4">
            <h3 className="mb-4 text-color-primary fw-semibold font-size-xxxl">
              Select Passenger for Refund
            </h3>

            <form>
              <div className="form-group">
                <div className="col-md-12">
                  <h5 className="text-color-primary font-size-xxl">
                    Select Passenger
                  </h5>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-3 col-12">
                    <div className="form-check mt-2 confirm-info">
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
                  </div>

                  <div className="col-md-9 col-12">
                    <div className="row align-items-center">
                      <div className="col-md-5 col-12">
                        <div className="form-check mt-2 confirm-info">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="specificPassengerCheckbox"
                            checked={selectedCheckbox === "specificPassenger"}
                            onChange={() =>
                              handleCheckboxChange("specificPassenger")
                            }
                          />
                          <label
                            className="form-check-label text-color-secondary ms-2"
                            htmlFor="specificPassengerCheckbox"
                          >
                            Specific Passenger
                          </label>
                        </div>
                      </div>

                      {selectedCheckbox === "specificPassenger" && (
                        <div className="col-md-7 col-12 mt-3 mt-md-0">
                          <label
                            htmlFor="selectSpecificPassenger"
                            className="mb-2 d-block"
                          >
                            Select Specific Passenger
                          </label>
                          <select
                            className="form-control"
                            id="selectSpecificPassenger"
                            value={selectedPassenger}
                            onChange={handlePassengerChange}
                            style={{ width: "100%", height: "44px" }}
                          >
                            <option value="">Select Passenger</option>
                            {passengers
                              .filter(
                                (p) =>
                                  !selectedPassengers.some(
                                    (sp) => sp.value === p.value
                                  )
                              )
                              .map((passenger) => (
                                <option
                                  key={passenger.value}
                                  value={passenger.value}
                                >
                                  {passenger.name}
                                </option>
                              ))}
                          </select>

                          <div className="mt-3 d-flex flex-wrap gap-2 ">
                            {selectedPassengers.map((passenger) => (
                              <div
                                key={passenger.value}
                                className="d-flex align-items-center light-bg-color rounded  "
                                style={{ gap: "4px" }} // Adjust spacing between elements
                              >
                                <span className="text-color-secondary ms-2">
                                  {passenger.name}
                                </span>
                                <button
                                  type="button"
                                  className="btn btn-sm rounded-5 border-1"
                                  onClick={() =>
                                    removePassenger(passenger.value)
                                  }
                                >
                                  ✕
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-color-secondary">
                  <span className="fw-semibold primary-color font-size-xl">
                    Note:
                  </span>
                  * Refund for specific passenger(s) will result in new PNR
                  creation. Unchanged passenger(s) will remain on the mother
                  PNR.
                </p>
              </div>

              <div className="d-flex justify-content-end mt-4">
                <button
                  type="button"
                  className="btn btn-outline-secondary me-3"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleConfirm}
                  disabled={
                    selectedCheckbox === "specificPassenger" &&
                    selectedPassengers.length === 0
                  }
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

export default RefundSelect;
