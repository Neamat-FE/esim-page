import React, { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import "./SearchSection.css";
import countryData from "./esimLocalCountry.json";
import DateView from "./DateView";

const SearchSection = () => {
  const [tripType, setTripType] = useState("");
  const [esimLocalCountryList, setEsimCountry] = useState([]);
  function handleTripType(e) {
    setTripType(e.target.value);
  }

  const [esimType, setEsimType] = useState("");
  function handleEsimType(e) {
    setEsimType(e.target.value);
  }

  useEffect(() => {
    setEsimCountry(countryData.data);
  }, []);

  const locations = [
    { value: "", label: "Select Location", details: "" },
    { value: "coxs-bazar", label: "Cox's Bazar", details: "Cox's Bazar" },
    {
      value: "dhaka",
      label: "Dhaka",
      details: "Hazrat Shahjalal International",
    },
    {
      value: "chittagong",
      label: "Chittagong",
      details: "Shah Amanat International",
    },
    { value: "sylhet", label: "Sylhet", details: "Osmani International" },
  ];

  const [fromLocationDetails, setFromLocationDetails] = useState("");

  const handleFromLocation = (event) => {
    const selectedLocation = locations.find(
      (loc) => loc.value === event.target.value
    );
    setFromLocationDetails(selectedLocation?.details || "");
  };

  const [toLocationDetails, setToLocationDetails] = useState("");
  const handleToLocation = (event) => {
    const selectedLocation = locations.find(
      (loc) => loc.value === event.target.value
    );
    setToLocationDetails(selectedLocation?.details || "");
  };

  const [date, setDate] = useState(null);

  const dayName = date
    ? date.toLocaleDateString("en-US", { weekday: "long" })
    : "Select a date";

  // Booking Class

  const [isExpanded, setIsExpanded] = useState(false);
  const [travelers, setTravelers] = useState({
    adults: 1,
    children: 0,
    kids: 0,
    infants: 0,
  });
  const [bookingClass, setBookingClass] = useState("economy");

  const updateTraveler = (type, increment) => {
    setTravelers((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + (increment ? 1 : -1)),
    }));
  };

  const totalTravelers = Object.values(travelers).reduce((a, b) => a + b, 0);

  return (
    <div className="container mt-5 searchview">
      <Tabs
        defaultActiveKey="esim"
        transition={false}
        id="noanim-tab-example"
        className="mb-3 tab-button active"
      >
        <Tab
          eventKey="flight"
          title={
            <span>
              <img
                src="images/airplane.png"
                alt="Hotel Icon"
                className="me-2"
              />
              Flight
            </span>
          }
        >
          <div className="row ">
            <form className="mt-3 col-md-8 d-flex align-items-center flex-wrap">
              <div className="form-check me-4">
                <input
                  className="form-check-input"
                  type="radio"
                  id="oneWay"
                  name="tripType"
                  value="oneWay"
                  checked={tripType === "oneWay"}
                  onChange={handleTripType}
                />
                <label
                  htmlFor="oneWay"
                  className="form-check-label fw-semibold"
                >
                  One Way
                </label>
              </div>

              <div className="form-check me-4">
                <input
                  className="form-check-input"
                  type="radio"
                  id="roundTrip"
                  name="tripType"
                  value="roundTrip"
                  checked={tripType === "roundTrip"}
                  onChange={handleTripType}
                />
                <label
                  htmlFor="roundTrip"
                  className="form-check-label fw-semibold"
                >
                  Round Trip
                </label>
              </div>

              <div className="form-check me-4">
                <input
                  className="form-check-input"
                  type="radio"
                  id="multiCity"
                  name="tripType"
                  value="multiCity"
                  checked={tripType === "multiCity"}
                  onChange={handleTripType}
                />
                <label
                  htmlFor="multiCity"
                  className="form-check-label fw-semibold"
                >
                  Multi City
                </label>
              </div>
            </form>
          </div>
          <div className="row mt-4">
            <div className="col-md-3 mb-3 mb-md-0">
              <div className="form-group position-relative">
                <div className="card border rounded-4 py-2 ps-4">
                  <small className="text-muted">From</small>
                  <select
                    className="form-select border-0 p-0 fw-bold fs-5"
                    onChange={handleFromLocation}
                  >
                    {locations.map((location) => (
                      <option key={location.value} value={location.value}>
                        {location.label}
                      </option>
                    ))}
                  </select>
                  <small className="text-muted">{fromLocationDetails}</small>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3 mb-md-0">
              <div className="form-group position-relative">
                <div className="card border rounded-4 py-2 ps-4">
                  <small className="text-muted">To</small>
                  <select
                    className="form-select border-0 p-0 fs-5 fw-semibold"
                    onChange={handleToLocation}
                  >
                    {locations.map((location) => (
                      <option key={location.value} value={location.value}>
                        {location.label}
                      </option>
                    ))}
                  </select>
                  <small className="text-muted">{toLocationDetails}</small>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3 mb-md-0">
              <div className="row g-0">
                <div className="col-6">
                  <div className="form-group position-relative">
                    <div className="card border rounded-start-4 rounded-0 py-2 ps-4">
                      <small className="text-muted">
                        Departure{" "}
                        <span>
                          <img
                            src="images/arrow-down-black.png"
                            alt=""
                            className="img-fluid ms-2"
                          />
                        </span>
                      </small>
                      <DateView
                        selectedDate={date}
                        onChange={(selectedDate) => setDate(selectedDate)}
                        minDate={new Date()}
                        maxDate={new Date("2025-12-31")}
                        placeholder="Pick a date"
                      />
                      <small className="text-muted">{dayName}</small>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-group position-relative">
                    <div className="card border rounded-end-4 rounded-0 py-2 ps-4">
                      <small className="text-muted">
                        Return{" "}
                        <span>
                          <img
                            src="images/arrow-down-black.png"
                            alt=""
                            className="img-fluid ms-2"
                          />
                        </span>
                      </small>
                      <DateView
                        selectedDate={date}
                        onChange={(selectedDate) => setDate(selectedDate)}
                        minDate={new Date()}
                        maxDate={new Date("2025-12-31")}
                        placeholder="Pick a date"
                      />
                      <small className="text-muted">{dayName}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3 mb-md-0">
              <div className="card">
                <div
                  className="card-header bg-white py-3 cursor-pointer "
                  onClick={() => setIsExpanded(!isExpanded)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <small className="text-muted">
                        Travelers & Booking Class
                      </small>
                      <p className="mb-0 fw-medium">
                        {totalTravelers} Traveler
                        {totalTravelers !== 1 ? "s" : ""}
                      </p>
                      <small className="text-muted text-capitalize">
                        {bookingClass}
                      </small>
                    </div>
                    <span className="ms-2">{isExpanded ? "▲" : "▼"}</span>
                  </div>
                </div>

                {isExpanded && (
                  <div className="card-body">
                    <div className="mb-4">
                      <h6 className="mb-3">Travelers</h6>

                      {/* Adults */}
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                          <p className="mb-0">Adults</p>
                          <small className="text-muted">
                            12 years and above
                          </small>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                          <button
                            onClick={() => updateTraveler("adults", false)}
                            className="btn btn-outline-secondary rounded-circle p-1"
                            style={{ width: "32px", height: "32px" }}
                            disabled={travelers.adults <= 1}
                          >
                            -
                          </button>
                          <span className="mx-2">{travelers.adults}</span>
                          <button
                            onClick={() => updateTraveler("adults", true)}
                            className="btn btn-outline-secondary rounded-circle p-1"
                            style={{ width: "32px", height: "32px" }}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Children */}
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                          <p className="mb-0">Children</p>
                          <small className="text-muted">
                            5 - under 12 years
                          </small>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                          <button
                            onClick={() => updateTraveler("children", false)}
                            className="btn btn-outline-secondary rounded-circle p-1"
                            style={{ width: "32px", height: "32px" }}
                            disabled={travelers.children <= 0}
                          >
                            -
                          </button>
                          <span className="mx-2">{travelers.children}</span>
                          <button
                            onClick={() => updateTraveler("children", true)}
                            className="btn btn-outline-secondary rounded-circle p-1"
                            style={{ width: "32px", height: "32px" }}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Kids */}
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                          <p className="mb-0">Kids</p>
                          <small className="text-muted">
                            2 - under 5 years
                          </small>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                          <button
                            onClick={() => updateTraveler("kids", false)}
                            className="btn btn-outline-secondary rounded-circle p-1"
                            style={{ width: "32px", height: "32px" }}
                            disabled={travelers.kids <= 0}
                          >
                            -
                          </button>
                          <span className="mx-2">{travelers.kids}</span>
                          <button
                            onClick={() => updateTraveler("kids", true)}
                            className="btn btn-outline-secondary rounded-circle p-1"
                            style={{ width: "32px", height: "32px" }}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Infant */}
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <p className="mb-0">Infant</p>
                          <small className="text-muted">
                            below 2 years (on lap)
                          </small>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                          <button
                            onClick={() => updateTraveler("infants", false)}
                            className="btn btn-outline-secondary rounded-circle p-1"
                            style={{ width: "32px", height: "32px" }}
                            disabled={travelers.infants <= 0}
                          >
                            -
                          </button>
                          <span className="mx-2">{travelers.infants}</span>
                          <button
                            onClick={() => updateTraveler("infants", true)}
                            className="btn btn-outline-secondary rounded-circle p-1"
                            style={{ width: "32px", height: "32px" }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h6 className="mb-3">Booking Class</h6>
                      <div className="d-flex flex-column gap-2">
                        {[
                          "economy",
                          "premium economy",
                          "business",
                          "first class",
                        ].map((className) => (
                          <div className="form-check" key={className}>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="bookingClass"
                              id={className}
                              value={className}
                              checked={bookingClass === className}
                              onChange={(e) => setBookingClass(e.target.value)}
                            />
                            <label
                              className="form-check-label text-capitalize"
                              htmlFor={className}
                            >
                              {className}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setIsExpanded(false)}
                      className="btn btn-danger w-100"
                    >
                      Done
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Tab>
        <Tab
          eventKey="hotel"
          title={
            <span>
              <img src="images/hotel.png" alt="Hotel Icon" className="me-2" />
              Hotel
            </span>
          }
        >
          <div className="row mt-4">
            <div className="col-md-3 mb-3 mb-md-0">
              <FloatingLabel controlId="floatingSelect" label="From">
                <Form.Select aria-label="Floating label select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </FloatingLabel>
            </div>
            <div className="col-md-3 mb-3 mb-md-0">
              <FloatingLabel
                controlId="floatingSelect"
                label="Works with selects"
              >
                <Form.Select aria-label="Floating label select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </FloatingLabel>
            </div>
            <div className="col-md-3 mb-3 mb-md-0">
              <FloatingLabel
                controlId="floatingSelect"
                label="Works with selects"
              >
                <Form.Select aria-label="Floating label select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </FloatingLabel>
            </div>
            <div className="col-md-3">
              <FloatingLabel
                controlId="floatingSelect"
                label="Works with selects"
              >
                <Form.Select aria-label="Floating label select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </FloatingLabel>
            </div>
          </div>
        </Tab>
        <Tab
          eventKey="visa"
          title={
            <span>
              <img src="images/visa.png" alt="Visa Icon" className="me-2" />
              Visa
            </span>
          }
        >
          <div className="row mt-4">
            <div className="col-md-3 mb-3 mb-md-0">
              <FloatingLabel
                controlId="floatingSelect"
                label="Works with selects"
              >
                <Form.Select aria-label="Floating label select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </FloatingLabel>
            </div>
            <div className="col-md-3 mb-3 mb-md-0">
              <FloatingLabel
                controlId="floatingSelect"
                label="Works with selects"
              >
                <Form.Select aria-label="Floating label select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </FloatingLabel>
            </div>
            <div className="col-md-3 mb-3 mb-md-0">
              <FloatingLabel
                controlId="floatingSelect"
                label="Works with selects"
              >
                <Form.Select aria-label="Floating label select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </FloatingLabel>
            </div>
            <div className="col-md-3">
              <FloatingLabel
                controlId="floatingSelect"
                label="Works with selects"
              >
                <Form.Select aria-label="Floating label select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </FloatingLabel>
            </div>
          </div>
        </Tab>
        <Tab
          eventKey="esim"
          title={
            <span>
              <img src="images/esim.png" alt="Esim Icon" className="me-2" />
              eSIM
            </span>
          }
        >
          <form className="mt-4 col-md-8 d-flex align-items-center flex-wrap">
            <div className="form-check me-4">
              <input
                className="form-check-input"
                type="radio"
                id="localEsim"
                name="esimType"
                value="localEsim"
                checked={esimType === "localEsim"}
                onChange={handleEsimType}
              />
              <label
                htmlFor="localEsim"
                className="form-check-label fw-semibold"
              >
                Local eSIM
              </label>
            </div>

            <div className="form-check me-4">
              <input
                className="form-check-input"
                type="radio"
                id="regionalEsim"
                name="esimType"
                value="regionalEsim"
                checked={esimType === "regionalEsim"}
                onChange={handleEsimType}
              />
              <label
                htmlFor="regionalEsim"
                className="form-check-label fw-semibold"
              >
                Regional eSIM
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="globalEsim"
                name="esimType"
                value="globalEsim"
                checked={esimType === "globalEsim"}
                onChange={handleEsimType}
              />
              <label
                htmlFor="globalEsim"
                className="form-check-label fw-semibold"
              >
                Global eSIM
              </label>
            </div>
          </form>
          <div className="row mt-4">
            <div className="col-md-4">
              <div>
                <select
                  className="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                  style={{ backgroundColor: "" }}
                >
                  <option selected>Select Country</option>
                  {esimLocalCountryList.map((item) => (
                    <option key={1} value={2} className="fs-6">
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-md-8"></div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default SearchSection;
