import React from "react";
import RangeSlider from "react-range-slider-input";
import { numberWithCommas } from "../../Functions/Functions";
import Timer from "../../Timer/Timer";

const EsimFilterSection = ({
  time,
  minPrice,
  highestFarePrice,
  maxPrice,
  setMaxPrice,
  sortBy,
  setSortBy,
  planSize,
  setPlanSize,
  validity,
  setValidity,
  planOption,
  setPlanOption,
  clearFilter,
}) => {
  const handlePrice = (value) => {
    setMaxPrice(value[1]);
  };
  const sortByList = [
    { name: "Cheapest", value: "cheapest" },
    { name: "Most Data", value: "most-data" },
    { name: "Least Data", value: "least-data" },
    { name: "Lowest Price/GB", value: "lowest-price" },
  ];
  const planSizeArray = [
    { name: "30 GB", value: "30 GB" },
    { name: "25 GB", value: "25 GB" },
    { name: "20 GB", value: "20 GB" },
    { name: "15 GB", value: "15 GB" },
    { name: "10 GB", value: "10 GB" },
    { name: "7 GB", value: "7 GB" },
    { name: "5 GB", value: "5 GB" },
    { name: "3 GB", value: "3 GB" },
    { name: "2 GB", value: "2 GB" },
    { name: "1 GB", value: "1 GB" },
  ];
  const validityArray = [
    { name: "60 Days", value: 60 },
    { name: "30 Days", value: 30 },
    { name: "15 Days", value: 15 },
    { name: "10 Days", value: 10 },
    { name: "7 Days", value: 7 },
    { name: "5 Days", value: 5 },
    { name: "3 Days", value: 3 },
    { name: "1 Day", value: 1 },
  ];
  const planList = [{ name: "Show plans with Voice/SMS", value: "voice" }];

  const Filter = () => {
    return (
      <div>
        <div>
          <div className="onewayTipLeft is-radius-16 pt-3 pb-4 is-shadow2  mb-lg-0">
            <div className="py-lg-4 border-bottom">
              <div className="d-flex justify-content-end me-3 d-lg-none">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setOpenFilterModal(false)}
                >
                  <path
                    d="M14 14L6 5"
                    stroke="#657491"
                    strokeWidth="2.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 5L6 14"
                    stroke="#657491"
                    strokeWidth="2.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <Timer time={time} />
            </div>
            <div className="priceRange py-3  border-bottom">
              <div className="priceWrapper px-4 ">
                <div className="price-range-slider">
                  <p className="mb-0 fw-bold">Price</p>
                  <div className="py-3">
                    <RangeSlider
                      className="single-thumb"
                      min={minPrice}
                      max={highestFarePrice}
                      value={[minPrice, maxPrice]}
                      onInput={(value) => handlePrice(value)}
                    />
                  </div>
                  <p className="fw-bold mb-0">
                    {numberWithCommas(minPrice)} tk -{" "}
                    {numberWithCommas(maxPrice)} tk
                  </p>
                </div>
              </div>
            </div>
            <div className="weight py-3 border-bottom">
              <div className="weightFromWrapper px-4 ">
                <p className="mb-2 fw-bold">Sort By</p>
                <div className="weightWrapper ">
                  {sortByList.map((option, i) => (
                    <div
                      className="stops d-flex align-items-center justify-content-between "
                      key={i}
                    >
                      <div className="form-check mb-2">
                        <input
                          checked={sortBy === option.value || false}
                          className="form-check-input"
                          type="radio"
                          value={option.value}
                          id={option.value}
                          onChange={(e) => setSortBy(e.target.value)}
                        />
                        <label
                          className="form-check-label "
                          htmlFor={option.value}
                        >
                          <p className="mb-0 fs-14 fw-normal text-clr-deep">
                            {option.name}
                          </p>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="air-select-input my-3 px-4 ">
              <p className="mb-2 fw-bold">Plan Size</p>
              <select
                className="form-select py-2"
                aria-label="Default select example"
                onChange={(e) => setPlanSize(e.target.value)}
                value={planSize}
              >
                <option value="">Select</option>
                {planSizeArray.map((item, i) => (
                  <option value={item.value} key={i}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="air-select-input my-3 px-4 ">
              <p className="mb-2 fw-bold">Validity (days)</p>
              <select
                className="form-select py-2"
                aria-label="Default select example"
                onChange={(e) => setValidity(e.target.value)}
                value={validity}
              >
                <option value="">Select</option>
                {validityArray.map((item, i) => (
                  <option value={item.value} key={i}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="weight py-3 border-top">
              <div className="weightFromWrapper px-4 ">
                <p className="mb-2 fw-bold">Plan Options</p>
                <div className="weightWrapper ">
                  {planList.map((option, i) => (
                    <div
                      className="stops d-flex align-items-center justify-content-between "
                      key={i}
                    >
                      <div className="form-check mb-2">
                        <input
                          checked={
                            planOption.find((bag) => bag === option.value) ||
                            false
                          }
                          className="form-check-input"
                          type="checkbox"
                          value={option.value}
                          id={option.value}
                          onChange={(e) =>
                            setPlanOption(
                              e.target.checked
                                ? [...planOption, option.value]
                                : [
                                    ...planOption.filter(
                                      (data) => data !== option.value
                                    ),
                                  ]
                            )
                          }
                        />
                        <label
                          className="form-check-label "
                          htmlFor={option.value}
                        >
                          <p className="mb-0 fs-14 fw-normal text-clr-deep">
                            {option.name}
                          </p>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="d-grid mb-4  px-4 border-top pt-4">
              <button
                className="clr-btn  fs-18 fw-600 rounded text-clr-red py-2 transition"
                onClick={clearFilter}
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Filter;
