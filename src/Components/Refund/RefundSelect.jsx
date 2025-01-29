import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Selectedpassenger.css";

const RefundSelect = ({ onSwitchToPnr, passengerItem }) => {
  const navigate = useNavigate();

  const passengers = [
    { value: "0", name: "Neamat", cancellationFee: "750" },
    { value: "1", name: "Diponkor", cancellationFee: "450" },
    { value: "2", name: "Zakir", cancellationFee: "350" },
    { value: "3", name: "Doe", cancellationFee: "850" },
    { value: "4", name: "John", cancellationFee: "1150" },
  ];

  // const [onSwitchToPnr, setOnSwitchToPnr] = useState(false);

  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const handleCheckboxChange = (checkboxName) => {
    setSelectedCheckbox((prev) =>
      prev === checkboxName ? null : checkboxName
    );
    setSelectedPassenger(checkboxName);
  };

  const [selectedPassenger, setSelectedPassenger] = useState("");
  const [selectedPassengerItem, setSelectedPassengerItem] = useState();
  const handlePassengerChange = (event) => {
    setSelectedPassenger(event.target.value);

    setSelectedPassengerItem(passengers[event.target.selectedIndex - 1]);
  };

  const handleSelectClick = () => {
    navigate("/pnr_refund", {
      state: {
        passengerItem:
          selectedPassenger === "allPassenger"
            ? passengers
            : selectedPassengerItem,
      },
    });
  };

  const handleConfirm = () => {
    onSwitchToPnr("pnrRefund");
    passengerItem(
      selectedPassenger === "allPassenger" ? passengers : selectedPassengerItem
    );

    // handleSelectClick();
    const selectedData = {
      selectedCheckbox,
      selectedPassenger,
    };
  };

  return (
    <div className="container">
      <div className="my-1">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 rounded-3">
            <div className="m-2">
              <h3 className="mb-4 text-color-primary fw-semibold font-size-xxxl">
                Select Passenger for Refund
              </h3>
              <form>
                <div className="form-group">
                  <h5 className="text-color-primary font-size-xxl">
                    Select passenger
                  </h5>
                  <div className="d-flex align-items-center">
                    <div className="form-check mt-2 confirm-info me-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="allPassengerCheckbox"
                        checked={selectedCheckbox === "allPassenger"}
                        onChange={() => handleCheckboxChange("allPassenger")}
                      />
                      <label
                        className="form-check-label text-color-secondary ms-1 font-size-lg"
                        htmlFor="allPassengerCheckbox"
                      >
                        All Passenger
                      </label>
                    </div>

                    <div className="specific-selection d-flex align-items-center justify-content-center">
                      <div className="form-check mt-2 confirm-info me-4">
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
                          className="form-check-label text-color-secondary ms-1 font-size-lg"
                          htmlFor="specificPassengerCheckbox"
                        >
                          Specific Passenger
                        </label>
                      </div>

                      {selectedCheckbox === "specificPassenger" && (
                        <div className="">
                          <label
                            htmlFor="selectSpecificPassenger"
                            className="mb-2"
                          >
                            Select Specific Passenger
                          </label>
                          <select
                            className="form-control mb-3"
                            id="selectSpecificPassenger"
                            disabled={selectedCheckbox !== "specificPassenger"}
                            value={selectedPassenger}
                            onChange={handlePassengerChange}
                            style={{ width: "400px", height: "44px" }}
                          >
                            <option value="">Select Passenger</option>
                            {passengers.map((passenger) => (
                              <option
                                key={passenger.value}
                                value={passenger.value}
                              >
                                {passenger.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-color-secondary">
                      <span className="fw-semibold primary-color font-size-xl">
                        Note :{" "}
                      </span>{" "}
                      * Refund for specific passenger(s) will result in new PNR
                      creation. Unchanged passengers(s) will remain on the
                      mother PNR
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
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
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundSelect;
