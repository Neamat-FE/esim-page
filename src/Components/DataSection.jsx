import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import EsimItem from "./EsimItem";
import esimData from "./esimData.json";
import Accordionitem from "./Accordionitem";
import "./DataSection.css";
import BookingPage from "./BookingPage";

const DataSection = () => {
  const [result, setResult] = useState(esimData.data);

  /*Price Range filter*/

  const lowestValue = esimData.data.reduce(
    (min, item) => Math.min(min, item.amount),
    Infinity
  );

  const maxValue = esimData.data.reduce(
    (max, item) => Math.max(max, item.amount),
    -Infinity
  );
  console.log(maxValue);
  const [priceRange, setPriceRange] = useState(maxValue);

  const handlePriceRange = (e) => {
    setPriceRange(parseInt(e.target.value));
    const priceRangeData = [...esimData.data].filter(
      (item) => item.amount <= e.target.value
    );
    setResult(priceRangeData);
  };

  // Clear Filter

  const handleClearFilter = () => {
    setPriceRange(maxValue);
    setSortby("cheapest");
    setPlanSize("");
    setValidity("");
    setPlans(esimData.data);
  };

  /*Sortby filter*/

  const [sortBy, setSortby] = useState("cheapest");
  const handleSortby = (e) => {
    setSortby(e.target.value);
    const sortByData = [...esimData.data].sort((a, b) => {
      const bDataInMB = parseInt(b.data) * 1024;
      const aDataInMB = parseInt(a.data) * 1024;

      if (e.target.value == "cheapest") {
        return a.amount - b.amount;
      } else if (e.target.value == "mostData") {
        return bDataInMB - aDataInMB;
      } else if (e.target.value == "leastData") {
        return aDataInMB - bDataInMB;
      } else if (e.target.value == "lowestPrice") {
        return a.amount - b.amount;
      }
    });
    setResult(sortByData);
  };

  /*PlanSize filter*/

  const [planSize, setPlanSize] = useState("");

  const handlePlanSize = (e) => {
    setPlanSize(e.target.value);
    console.log(planSize);
    const planSizeData = [...esimData.data].filter(
      (item) => item.data === e.target.value
    );
    setResult(planSizeData);
  };

  // Validity Filter

  const [validity, setValidity] = useState("");

  const handleValidity = (e) => {
    setValidity(e.target.value);
    const validityData = [...esimData.data].filter(
      (item) => item.day === parseInt(e.target.value, 10)
    );
    setResult(validityData);
  };

  // Ascending Descending Condition
  const [plans, setPlans] = useState("");

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;

    const sortedItems = [...esimData.data].sort((a, b) =>
      checked ? a.amount - b.amount : b.amount - a.amount
    );
    setResult(sortedItems);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 p-4 shadow br-2 mt-5 rounded">
          <div className="range-selector">
            <Form.Label className="fw-bold font-size-lg text-color-primary">
              Price
            </Form.Label>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min={lowestValue}
                max={maxValue}
                value={priceRange}
                onChange={handlePriceRange}
                className="slider h-2 rounded-lg appearance-none cursor-pointer w-100"
              />
              <p className="fs-7 font-size-lg fw-bold">
                <span>{lowestValue} tk</span> - <span>{priceRange} tk</span>
              </p>
            </div>
          </div>

          <div className="mt-2">
            <Form.Label className="fw-bold font-size-lg text-color-primary">
              Sort By :
            </Form.Label>
            <form className="mt-2">
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  id="cheapest"
                  value="cheapest"
                  checked={sortBy === "cheapest"}
                  onChange={handleSortby}
                />
                <label
                  className="form-check-label text-color-secondary"
                  htmlFor="cheapest"
                >
                  Cheapest
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  id="mostData"
                  value="mostData"
                  checked={sortBy === "mostData"}
                  onChange={handleSortby}
                />
                <label
                  className="form-check-label text-color-secondary"
                  htmlFor="mostData"
                >
                  Most Data
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  id="leastData"
                  value="leastData"
                  checked={sortBy === "leastData"}
                  onChange={handleSortby}
                />
                <label
                  className="form-check-label text-color-secondary"
                  htmlFor="leastData"
                >
                  Least Data
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="lowestPrice"
                  value="lowestPrice"
                  checked={sortBy === "lowestPrice"}
                  onChange={handleSortby}
                />
                <label
                  className="form-check-label text-color-secondary"
                  htmlFor="lowestPrice"
                >
                  Lowest Price/GB
                </label>
              </div>
            </form>
          </div>
          <div className="plan-size mt-3">
            <Form.Label className="fw-bold font-size-lg text-color-primary">
              Plan Size : {planSize}
            </Form.Label>
            <select
              className="form-select mt-2 text-color-secondary"
              value={planSize}
              onChange={handlePlanSize}
              aria-label="Default select example"
            >
              <option selected>Select Plan</option>
              <option value="1 GB">1 GB</option>
              <option value="2 GB">2 GB</option>
              <option value="3 GB">3 GB</option>
              <option value="5 GB">5 GB</option>
              <option value="7 GB">7 GB</option>
              <option value="10 GB">10 GB</option>
              <option value="15 GB">15 GB</option>
              <option value="20 GB">20 GB</option>
              <option value="25 GB">25 GB</option>
              <option value="30 GB">30 GB</option>
            </select>
          </div>
          <div className="plan-size mt-3">
            <Form.Label className="fw-bold font-size-lg text-color-primary">
              Validity : {validity}
            </Form.Label>
            <select
              value={validity}
              className="form-select mt-2 text-color-secondary"
              onChange={handleValidity}
              aria-label="Default select example"
            >
              <option selected>Select Validity</option>
              <option value="60 Days">60 Days</option>
              <option value="30 Days">30 Days</option>
              <option value="15 Days">15 Days</option>
              <option value="10 Days">10 Days</option>
              <option value="7 Days">7 Days</option>
              <option value="5 Days">5 Days</option>
              <option value="3 Days">3 Days</option>
              <option value="1 Day">1 Day</option>
            </select>
          </div>

          <div className="mt-3">
            <Form.Label className="fw-bold font-size-lg text-color-primary">
              Price
            </Form.Label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                onChange={handleCheckboxChange}
                id="flexCheckDefault"
              />
              <label
                className="form-check-label text-color-secondary"
                htmlFor="flexCheckDefault"
              >
                Show Plans with Voice/SMS
              </label>
            </div>
          </div>
          <div className="mt-4 d-grid">
            <button
              className="btn btn-primary font-size-lg fw-semibold"
              onClick={handleClearFilter}
            >
              Clear Filters
            </button>
          </div>
        </div>
        <div className="col-md-8 p-4 mt-5 shadow-md p-3">
          <EsimItem esimItem={result} />
        </div>
      </div>
    </div>
  );
};

export default DataSection;
