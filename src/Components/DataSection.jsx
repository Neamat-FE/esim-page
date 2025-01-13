import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import EsimItem from "./EsimItem";
import esimData from "./esimData.json";
import Accordionitem from "./Accordionitem";

const DataSection = () => {
  const [result, setResult] = useState(esimData.data);

  const [priceRange, setPriceRange] = useState(0);

  const MIN_PRICE = 0;
  const MAX_PRICE = 50000;

  /*Sortby filter*/

  const [sortBy, setSortby] = useState("");
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
  };

  // Ascending Descending Condition

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
              <span>${MIN_PRICE}</span>
              <input
                type="range"
                min={MIN_PRICE}
                max={MAX_PRICE}
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                className=" h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer w-100"
                style={{
                  background: `linear-gradient(to right, #eb1933 0%, #eb1933 ${
                    (priceRange / MAX_PRICE) * 100
                  }%, #e5e7eb ${
                    (priceRange / MAX_PRICE) * 100
                  }%, #eb1933 100%)`,
                }}
              />
              <span>{priceRange}</span>
            </div>
          </div>

          <div className="mt-2">
            <Form.Label className="fw-bold font-size-lg text-color-primary">
              Sort By : {sortBy}
            </Form.Label>
            <form className="mt-2">
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="cheapest"
                  checked={sortBy === "cheapest"}
                  onChange={handleSortby}
                />
                <label className="form-check-label text-color-secondary">
                  Cheapest
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input "
                  type="radio"
                  value="mostData"
                  checked={sortBy === "mostData"}
                  onChange={handleSortby}
                />
                <label className="form-check-label text-color-secondary">
                  Most Data
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="leastData"
                  checked={sortBy === "leastData"}
                  onChange={handleSortby}
                />
                <label className="form-check-label text-color-secondary">
                  Least Data
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="lowestPrice"
                  checked={sortBy === "lowestPrice"}
                  onChange={handleSortby}
                />
                <label
                  className="form-check-label text-color-secondary"
                  htmlFor="radio4"
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
              className="form-select mt-2 text-color-secondary"
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
        </div>
        <div className="col-md-8 p-4 mt-5 shadow-md p-3">
          <EsimItem esimItem={result} />
        </div>
        <div className=" mt-4">
          <Accordionitem />
        </div>
      </div>
    </div>
  );
};

export default DataSection;
