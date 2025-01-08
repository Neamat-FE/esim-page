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

  return (
    <div className="container mt-5 searchview">
      <Tabs
        defaultActiveKey="flight"
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
              Hotel
            </span>
          }
        >
          <div className="row ">
            <form className="mt-3 col-md-8 d-flex align-items-center">
              <div className="form-check me-4">
                <input
                  className="form-check-input"
                  type="radio"
                  value="oneWay"
                  checked={tripType === "oneWay"}
                  onChange={handleTriptype}
                />
                <label className="form-check-label fw-semibold">One Way</label>
              </div>
              <div className="form-check me-4">
                <input
                  className="form-check-input"
                  type="radio"
                  value="roundTrip"
                  checked={tripType === "roundTrip"}
                  onChange={handleTriptype}
                />
                <label className="form-check-label fw-semibold">
                  Round Trip
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="multiCity"
                  checked={tripType === "multiCity"}
                  onChange={handleTriptype}
                />
                <label className="form-check-label fw-semibold">
                  Multi City
                </label>
              </div>
              <div className="col-md-4"></div>
            </form>
          </div>
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
          <form className="mt-3 col-md-8 d-flex align-items-center">
            <div className="form-check me-4">
              <input
                className="form-check-input"
                type="radio"
                value="localEsim"
                checked={esimType === "localEsim"}
                onChange={handleEsimtype}
              />
              <label className="form-check-label fw-semibold">Local eSIM</label>
            </div>
            <div className="form-check me-4">
              <input
                className="form-check-input"
                type="radio"
                value="regionalEsim"
                checked={esimType === "regionalEsim"}
                onChange={handleEsimtype}
              />
              <label className="form-check-label fw-semibold">
                Regional eSIM
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="globalEsim"
                checked={esimType === "globalEsim"}
                onChange={handleEsimtype}
              />
              <label className="form-check-label fw-semibold">
                Global eSIM
              </label>
            </div>
            <div className="col-md-4"></div>
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
