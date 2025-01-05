import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import EsimItem from "./EsimItem";

const DataSection = () => {
  const [sortBy, setSortby] = useState("");
  function handleSortby(e) {
    setSortby(e.target.value);
  }
  const [planSize, setPlansize] = useState("");
  function handlePlansize(e) {
    setPlansize(e.target.value);
  }

  const [validity, setValidity] = useState("");
  function handleValidity(e) {
    setValidity(e.target.value);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 p-4 shadow-sm br-2 mt-5">
          <div className="range-selector">
            <Form.Label className="fw-bold">Price</Form.Label>
            <Form.Range className="color-primary" />
          </div>

          <div className="mt-2">
            <Form.Label className="fw-bold">Sort By : {sortBy}</Form.Label>
            <form className="mt-2">
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="cheapest"
                  checked={sortBy === "cheapest"}
                  onChange={handleSortby}
                />
                <label className="form-check-label">Cheapest</label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input "
                  type="radio"
                  value="mostData"
                  checked={sortBy === "mostData"}
                  onChange={handleSortby}
                />
                <label className="form-check-label">Most Data</label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="leastData"
                  checked={sortBy === "leastData"}
                  onChange={handleSortby}
                />
                <label className="form-check-label">Least Data</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="lowestPrice"
                  checked={sortBy === "lowestPrice"}
                  onChange={handleSortby}
                />
                <label className="form-check-label" htmlFor="radio4">
                  Lowest Price/GB
                </label>
              </div>
            </form>
          </div>
          <div className="plan-size mt-3">
            <Form.Label className="fw-bold">Plan Size : {planSize}</Form.Label>
            <select
              className="form-select mt-2"
              value={planSize}
              onChange={handlePlansize}
              aria-label="Default select example"
            >
              <option selected>Select Package</option>
              <option value="10 GB">10 GB</option>
              <option value="15 GB">15 Gb</option>
              <option value="20 GB">20 Gb</option>
            </select>
          </div>
          <div className="plan-size mt-3">
            <Form.Label className="fw-bold">Validity : {validity}</Form.Label>
            <select
              className="form-select mt-2"
              onChange={handleValidity}
              aria-label="Default select example"
            >
              <option selected>Select Validity</option>
              <option value="5 days">5 Days</option>
              <option value="7 days">7 Days</option>
              <option value="10 days">10 Days</option>
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
