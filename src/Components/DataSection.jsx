import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import EsimItem from "./EsimItem";

const DataSection = () => {
  const [selectedOption, setSelectedOption] = useState("None");

  const handleSelectionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 p-4 shadow-sm br-2 mt-5">
          <div className="range-selector">
            <Form.Label className="fw-bold">Price</Form.Label>
            <Form.Range className="color-primary" />
          </div>

          <div className="mt-2">
            <Form.Label className="fw-bold">Sort By</Form.Label>
            <form className="mt-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="radioOptions"
                  id="radio1"
                  value="cheapest"
                  onChange={handleSelectionChange}
                />
                <label className="form-check-label" htmlFor="radio1">
                  Cheapest
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="radioOptions"
                  id="radio2"
                  value="mostData"
                  onChange={handleSelectionChange}
                />
                <label className="form-check-label" htmlFor="radio2">
                  Most Data
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="radioOptions"
                  id="radio3"
                  value="leastData"
                  onChange={handleSelectionChange}
                />
                <label className="form-check-label" htmlFor="radio3">
                  Least Data
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="radioOptions"
                  id="radio4"
                  value="lowestPrice"
                  onChange={handleSelectionChange}
                />
                <label className="form-check-label" htmlFor="radio4">
                  Lowest Price/GB
                </label>
              </div>
            </form>
          </div>
          <div className="plan-size mt-3">
            <Form.Label className="fw-bold">Plan Size</Form.Label>
            <select
              className="form-select mt-2"
              aria-label="Default select example"
            >
              <option selected>Select Package</option>
              <option value="1">10 GB</option>
              <option value="2">15 Gb</option>
              <option value="3">20 Gb</option>
            </select>
          </div>
          <div className="plan-size mt-3">
            <Form.Label className="fw-bold">Validity</Form.Label>
            <select
              className="form-select mt-2"
              aria-label="Default select example"
            >
              <option selected>Select Validity</option>
              <option value="1">5 Days</option>
              <option value="2">7 Days</option>
              <option value="3">10 Days</option>
            </select>
          </div>

          <div className="mt-3">
            <Form.Label className="fw-bold">Price</Form.Label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Show Plans with Voice/SMS
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-8 p-4 mt-5 shadow-md p-3">
          <EsimItem />
        </div>
      </div>
    </div>
  );
};

export default DataSection;
