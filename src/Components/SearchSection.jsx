import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import "./SearchSection.css";

const SearchSection = () => {
  const [tripType, setTriptype] = useState("");
  function handleTriptype(e) {
    setTriptype(e.target.value);
  }

  const [esimType, setEsimtype] = useState("");
  function handleEsimtype(e) {
    setEsimtype(e.target.value);
  }

  return (
    <div className="container mt-5 searchview">
      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3 tab-button"
      >
        <Tab eventKey="flight" title="Flight">
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
        <Tab eventKey="hotel" title="Hotel">
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
        <Tab eventKey="visa" title="Visa">
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
        <Tab eventKey="esim" title="eSIM">
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

            <div className="col-md-8"></div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default SearchSection;
