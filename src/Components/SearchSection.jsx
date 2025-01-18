import React, { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import "./SearchSection.css";
import countryData from "./esimLocalCountry.json";
import EsimItem from "./EsimItem";

const SearchSection = () => {
  const [tripType, setTriptype] = useState("");
  const [esimLocalCountryList, setEsimCountry] = useState([]);
  function handleTriptype(e) {
    setTriptype(e.target.value);
  }

  const [esimType, setEsimtype] = useState("");
  function handleEsimtype(e) {
    setEsimtype(e.target.value);
  }

  useEffect(() => {
    setEsimCountry(countryData.data);
  }, []);

  // Select view
  const [locationDetails, setLocationDetails] = useState("");

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

  const handleLocationChange = (event) => {
    const selectedLocation = locations.find(
      (loc) => loc.value === event.target.value
    );
    setLocationDetails(selectedLocation?.details || "");
  };

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
                  onChange={handleTriptype}
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
                  onChange={handleTriptype}
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
                  onChange={handleTriptype}
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
                    onChange={handleLocationChange}
                  >
                    {locations.map((location) => (
                      <option key={location.value} value={location.value}>
                        {location.label}
                      </option>
                    ))}
                  </select>
                  <small className="text-muted">{locationDetails}</small>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3 mb-md-0">
              <div className="form-group position-relative">
                <div className="card border rounded-4 py-2 ps-4">
                  <small className="text-muted">To</small>
                  <select
                    className="form-select border-0 p-0 fs-5 fw-semibold"
                    onChange={handleLocationChange}
                  >
                    {locations.map((location) => (
                      <option key={location.value} value={location.value}>
                        {location.label}
                      </option>
                    ))}
                  </select>
                  <small className="text-muted">{locationDetails}</small>
                </div>
              </div>
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
                onChange={handleEsimtype}
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
                onChange={handleEsimtype}
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
                onChange={handleEsimtype}
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
