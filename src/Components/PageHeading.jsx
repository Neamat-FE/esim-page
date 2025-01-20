import React from "react";
import { Link } from "react-router-dom";

const PageHeading = ({ pageTitle, active }) => {
  return (
    <div>
      <div className="col-12">
        <div className="col-8">
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-md-6">
              <h3 className="primary-color font-size-xxxl fw-bold">
                {/* Enter User Details */}
                {pageTitle}
              </h3>
            </div>
            <div className="col-md-6 d-flex justify-content-md-end justify-content-start">
              <nav
                style={{ "--bs-breadcrumb-divider": "'>'" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li
                    className={`breadcrumb-item ${
                      active === "eSim Selection" ? "active" : ""
                    }`}
                  >
                    {active === "eSim Selection" ? (
                      "eSim Selection"
                    ) : (
                      <Link to="/esim-selection">eSim Selection</Link>
                    )}
                  </li>
                  <li
                    className={`breadcrumb-item ${
                      active === "Booking" ? "active" : ""
                    }`}
                  >
                    {active === "Booking" ? (
                      "Booking"
                    ) : (
                      <Link to="/booking">Booking</Link>
                    )}
                  </li>
                  <li
                    className={`breadcrumb-item ${
                      active === "Payment" ? "active" : ""
                    }`}
                  >
                    {active === "Payment" ? (
                      "Payment"
                    ) : (
                      <Link to="/payment">Payment</Link>
                    )}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default PageHeading;
