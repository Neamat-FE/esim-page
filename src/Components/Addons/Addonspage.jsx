import React from "react";
import Navbar from "../Navbar";
import PageHeading from "../PageHeading";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./addons.css";

const Addonspage = () => {
  const location = useLocation();
  const { esimData } = location.state || {};

  //   Baggage Protection

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [noCompensation, setNoCompensation] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [esimIsExpanded, setEsimIsExpanded] = useState(false);

  const plans = [
    { name: "Basic Service", pay: "BDT 0", coverage: "Free" },
    { name: "Gold Service", pay: "BDT 545", coverage: "16500" },
    { name: "Platinum Service", pay: "BDT 650", coverage: "20500" },
  ];
  const handleSelect = (planName) => {
    setSelectedPlan(planName);
    setNoCompensation(false);
  };
  console.log("selectedPlan", selectedPlan);

  //   end of Baggage Protection

  return (
    <div className="container">
      <Navbar />
      <PageHeading pageTitle="Review Your Booking" active="Booking" />
      <div className="row">
        <div className="col-md-8">
          <h5 className="primary-color  fw-semibold m-0 font-size-xxl addon-title">
            Add Ons
          </h5>
          <div className="baggage shadow p-4 rounded-2 mt-4">
            {/* Clickable Header for Expanding/Collapsing */}
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ cursor: "pointer" }}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div className="d-flex align-items-center">
                <img src="images/add-ons/baggage.png" alt="" className="me-3" />
                <h3 className="m-0 fw-semibold font-color-primary font-size-xxl">
                  Baggage Protection
                </h3>
              </div>
              <img
                src={
                  isExpanded
                    ? "images/add-ons/arrow-circle-up.png"
                    : "images/add-ons/arrow-circle-down.png"
                }
                alt=""
                className="ms-auto"
              />
            </div>

            {/* Expandable Section */}
            {isExpanded && (
              <>
                <div>
                  <hr className="my-4" />
                  <p className="font-color-primary font-size-lg fw-medium">
                    <span className="fw-bold">
                      Lost, delayed or mishandled baggage?
                    </span>{" "}
                    No problem! - Buy Baggage Protection and let BRB quickly
                    find and return your baggage to you, plus get instant
                    updates every step of the way.
                  </p>
                </div>

                {/* Services Section */}
                <div className="services mt-4">
                  {[
                    {
                      imgSrc: "images/add-ons/location-tick.png",
                      title: "Live Tracking",
                      description:
                        "Track your baggage up to 4 days after arrival",
                    },
                    {
                      imgSrc: "images/add-ons/note-remove.png",
                      title: "No Proof Required",
                      description: "No Bills needed to claim compensation",
                    },
                    {
                      imgSrc: "images/add-ons/card-tick.png",
                      title: "Guaranteed Payment",
                      description:
                        "Over and above airline or insurance compensation",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="service-item d-flex align-items-center my-3"
                    >
                      <img
                        src={item.imgSrc}
                        alt={item.title}
                        className="img-fluid me-3"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <div>
                        <p className="m-0 fw-semibold font-color-primary">
                          {item.title}
                        </p>
                        <p className="m-0 pt-2 font-color-primary">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Data Table */}
                <div className="data-table">
                  <p className="font-color-primary font-size-lg fw-semibold mt-3">
                    Select a Plan & Travel with Confidence
                  </p>
                  <table className="table table-bordered mt-3">
                    <thead>
                      <tr>
                        <th className="font-color-primary font-size-md fw-bold">
                          Package Name
                        </th>
                        <th className="font-color-primary font-size-md fw-bold">
                          Pay
                        </th>
                        <th className="font-color-primary font-size-md fw-bold">
                          Coverage
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {plans.map((plan, index) => (
                        <tr key={index}>
                          <td className="ms-3 font-color-primary font-size-md fw-medium">
                            <input
                              type="checkbox"
                              className="form-check-input me-2"
                              checked={selectedPlan === plan.name}
                              onChange={() => handleSelect(plan.name)}
                            />
                            {plan.name}
                          </td>
                          <td className="font-color-primary font-size-md fw-medium">
                            {plan.pay}
                          </td>
                          <td className="font-color-primary font-size-md fw-medium">
                            {plan.coverage}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="mt-3 d-flex align-items-center justify-content-start">
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      checked={noCompensation}
                      onChange={() => {
                        setNoCompensation(!noCompensation);
                        setSelectedPlan(null);
                      }}
                      id="noCompensationCheckbox"
                    />
                    <label
                      className="form-check-label font-color-secondary m-0 fw-medium"
                      htmlFor="noCompensationCheckbox"
                      style={{ lineHeight: "1.5" }}
                    >
                      No, I’ll risk losing my baggage with no compensation.
                    </label>
                  </div>
                </div>

                <p className="font-color-primary font-size-lg mt-3">
                  With Baggage Protection, your luggage is covered. Check the{" "}
                  <span className="fw-semibold primary-color text-decoration-underline">
                    BRB Terms
                  </span>{" "}
                  to see how it works!
                </p>
              </>
            )}
          </div>

          {/* eSIM */}
          <div className="esim shadow p-4 rounded-2 mt-4">
            {/* Clickable Header for Expanding/Collapsing */}
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ cursor: "pointer" }}
              onClick={() => setEsimIsExpanded(!esimIsExpanded)}
            >
              <div className="d-flex align-items-center">
                <img src="images/add-ons/airalo.png" alt="" className="me-3" />
                <h3 className="m-0 fw-semibold font-color-primary font-size-xxl">
                  eSIM
                </h3>
              </div>
              <img
                src={
                  esimIsExpanded
                    ? "images/add-ons/arrow-circle-up.png"
                    : "images/add-ons/arrow-circle-down.png"
                }
                alt=""
                className="ms-auto"
              />
            </div>

            {/* Expandable Section */}
            {esimIsExpanded && (
              <>
                <div>
                  <hr className="my-4" />
                  <p className="font-color-primary font-size-lg fw-medium">
                    Buy eSIM and -Stay Connected, Anytime, Anywhere! No more
                    swapping SIMs- just activate and go!
                  </p>
                </div>

                {/* Services Section */}
                <div className="services mt-4">
                  {[
                    {
                      imgSrc: "images/add-ons/gps-slash.svg",
                      title: "Free Roaming",
                      description:
                        "Track your baggage up to 4 days after arrival",
                    },
                    {
                      imgSrc: "images/add-ons/simcard.svg",
                      title: "Easy Installation",
                      description: "No Bills needed to claim compensation",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="service-item d-flex align-items-center my-3"
                    >
                      <img
                        src={item.imgSrc}
                        alt={item.title}
                        className="img-fluid me-3"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <div>
                        <p className="m-0 fw-semibold font-color-primary">
                          {item.title}
                        </p>
                        <p className="m-0 pt-2 font-color-primary">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Data Table */}
                <div className="data-table">
                  <p className="font-color-primary font-size-lg fw-semibold mt-3">
                    Select an eSIM & Stay Online-
                  </p>
                  <table className="table table-bordered mt-3">
                    <thead>
                      <tr>
                        <th className="font-color-primary font-size-md fw-bold">
                          Package Name
                        </th>
                        <th className="font-color-primary font-size-md fw-bold">
                          Pay
                        </th>
                        <th className="font-color-primary font-size-md fw-bold">
                          Coverage
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {plans.map((plan, index) => (
                        <tr key={index}>
                          <td className="ms-3 font-color-primary font-size-md fw-medium">
                            <input
                              type="checkbox"
                              className="form-check-input me-2"
                              checked={selectedPlan === plan.name}
                              onChange={() => handleSelect(plan.name)}
                            />
                            {plan.name}
                          </td>
                          <td className="font-color-primary font-size-md fw-medium">
                            {plan.pay}
                          </td>
                          <td className="font-color-primary font-size-md fw-medium">
                            {plan.coverage}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="mt-3 d-flex align-items-center justify-content-start">
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      checked={noCompensation}
                      onChange={() => {
                        setNoCompensation(!noCompensation);
                        setSelectedPlan(null);
                      }}
                      id="noCompensationCheckbox"
                    />
                    <label
                      className="form-check-label font-color-secondary m-0 fw-medium"
                      htmlFor="noCompensationCheckbox"
                      style={{ lineHeight: "1.5" }}
                    >
                      No, I’ll risk losing my baggage with no compensation.
                    </label>
                  </div>
                </div>

                <p className="font-color-primary font-size-lg mt-3">
                  With Baggage Protection, your luggage is covered. Check the{" "}
                  <span className="fw-semibold primary-color text-decoration-underline">
                    BRB Terms
                  </span>{" "}
                  to see how it works!
                </p>
              </>
            )}
          </div>
        </div>
        <div className="col-md-4 mt-4 mt-md-0 ">
          <div className="shadow p-4 rounded-2">
            <div className="img-section d-flex align-items-center">
              <div className="col-4">
                <img src="images/package.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-8 ms-3">
                <p className="m-0 fw-semibold text-color-primary">
                  {esimData.title}
                </p>
                <p className="m-0 pt-2 text-color-primary">
                  BDT {esimData.amount}
                </p>
              </div>
            </div>
            <div className="my-1">
              <hr />
            </div>
            <div className="col-12">
              <p className="m-0 font-size-lg fw-semibold text-color-secondary">
                eSIM Price Summary
              </p>
            </div>

            <div className="data-pricing d-flex align-items-center mt-3">
              <div className="col-6">
                <p className="m-0">{esimData.title}</p>
              </div>
              <div className="col-6 text-end">
                <p className="m-0 font-size-md">
                  BDT{" "}
                  <span className="font-size-xl fw-semibold">
                    {esimData.amount}
                  </span>
                </p>
                <p className="m-0 font-size-md">(1*{esimData.amount})</p>
              </div>
            </div>

            <div className="my-1">
              <hr />
            </div>

            <div className="sub-total d-flex align-content-between align-items-center">
              <div className="col-6">
                <p className="m-0">Sub Total</p>
              </div>
              <div className="col-6 text-end">
                <p className="m-0 font-size-md">
                  BDT{" "}
                  <span className="font-size-xl fw-semibold">
                    {esimData.amount}
                  </span>
                </p>
              </div>
            </div>

            <div className="row mt-3">
              <div className="container-fluid secondary-bg-color rounded">
                <div className="paying-price d-flex align-items-center align-content-between py-3">
                  <div className="col-6">
                    <p className="m-0 font-size-xl fw-semibold text-color-secondary">
                      You Pay
                    </p>
                  </div>
                  <div className="col-6 text-end">
                    <p className="m-0 font-size-md">
                      BDT{" "}
                      <span className="font-size-xl fw-semibold">
                        {esimData.amount}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addonspage;
