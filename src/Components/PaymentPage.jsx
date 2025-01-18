import React from "react";
import Navbar from "./Navbar";

const PaymentPage = () => {
  return (
    <div className="mt-4">
      <Navbar />
      <div className="container">
        <div className="col-12">
          <div className="col-8">
            <div className="row d-flex align-items-center justify-content-between">
              <div className="col-md-6">
                <h3 className="primary-color font-size-xxxl fw-bold">
                  Enter User Details
                </h3>
              </div>
              <div className="col-md-6 d-flex justify-content-md-end justify-content-start">
                <nav
                  style={{ "--bs-breadcrumb-divider": "'>'" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="">eSim Selection</a>
                    </li>
                    <li className="breadcrumb-item " aria-current="page">
                      Booking
                    </li>
                    <li className="breadcrumb-item active text-color-secondary text-decoration-none">
                      <a href="">Payment</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
