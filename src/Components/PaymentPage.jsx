import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import PageHeading from "./PageHeading";

const PaymentPage = () => {
  const location = useLocation();
  const { esimData } = location.state || {};

  const [activeMethod, setActiveMethod] = useState("card");
  const methods = [
    { id: "card", label: "Visa/Master/Amex" },
    { id: "wallet", label: "Mobile Wallet" },
    { id: "others", label: "Others & EMI" },
  ];

  // Render dynamic views for each payment method
  const renderCardView = () => (
    <div className="row saved-method">
      <div className="col-md-8">
        <h5 className="my-4 fw-semibold">Saved Payment Method</h5>
        <div className="border rounded">
          <div className="mx-4 my-2 d-flex align-items-center justify-content-between">
            <div>
              <input
                type="radio"
                name="card-selection"
                id="saved-card"
                defaultChecked
                className="form-check-input me-3"
              />
              <img
                src="images/mastervisa.png"
                alt="Visa"
                className="img-fluid w-50"
              />
            </div>
            <div className="text-end">
              <div>
                <span className="text-gray-600">••••••••••••1111</span>
              </div>
              <p className="text-gray-400 text-sm mt-1 m-0">Visa</p>
            </div>
          </div>
        </div>

        <div className="border rounded mt-3">
          <div className="mx-4 my-3 d-flex align-items-center justify-content-between">
            <div>
              <h5 className="fw-semibold m-0">Pay Using Another Card</h5>
            </div>
            <div className="text-end">
              <img src="images/arrow-down-black.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderWalletView = () => (
    <div>
      <h5 className="my-4 fw-semibold">Mobile Wallet</h5>
      <p>Wallet payment options will be displayed here.</p>
      <div className="col-md-8">
        {["bKash", "Nagad", "Rocket", "Dbbl"].map((wallet) => (
          <div key={wallet} className="border rounded mb-3">
            <div className="mx-3 my-2 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <input
                  type="radio"
                  name="wallet-selection"
                  className="form-check-input me-3"
                />
                <img
                  src="images/payment/jcb.png"
                  alt={wallet}
                  className="img-fluid"
                />
                <span className="ms-3 fw-semibold">{wallet}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderOthersView = () => (
    <div>
      <h5 className="my-4 fw-semibold">Others & EMI</h5>
      <p>Other payment options, including EMI, will be displayed here.</p>
    </div>
  );

  return (
    <div className="mt-4">
      <Navbar />
      <div className="container my-3">
        <PageHeading pageTitle="Payment Method" active="Payment" />

        <div className="row">
          {/* Left Column */}
          <div className="col-md-8">
            <div className="row d-flex align-items-center mb-4 rounded shadow p-3 mt-4">
              {/* Payment Method Buttons */}
              <div className="col-12">
                <div className="gap-2">
                  {methods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setActiveMethod(method.id)}
                      className={`px-2 py-2 rounded border-0 transition-colors font-size-md fw-semibold me-3 ${
                        activeMethod === method.id
                          ? "primary-bg-color text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {method.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Views */}
              <div className="col-12">
                {activeMethod === "card" && renderCardView()}
                {activeMethod === "wallet" && renderWalletView()}
                {activeMethod === "others" && renderOthersView()}
              </div>
            </div>
          </div>

          {/* Right Column - Payment Summary */}
          <div className="col-md-4">
            <div className="m-4">
              <div className="row shadow rounded-2 p-3 d-flex align-content-center align-items-center">
                <div className="col-4">
                  <img src="images/package.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-8">
                  <p className="m-0 fw-semibold text-color-primary">
                    {esimData.title}
                  </p>
                  <p className="m-0 pt-2 text-color-primary">
                    BDT {esimData.amount}
                  </p>
                </div>
                <div className="my-1">
                  <hr />
                </div>
                <div className="col-12">
                  <p className="m-0 font-size-lg fw-semibold text-color-secondary">
                    eSIM Price Summary
                  </p>
                </div>
                <div className="container">
                  <div className="row d-flex align-content-between align-items-center mt-3">
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
                </div>
                <div>
                  <hr />
                </div>
                <div className="container">
                  <div className="row d-flex align-content-between align-items-center">
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
                </div>
                <div className="container">
                  <div className="row d-flex align-content-between align-items-center mt-4 secondary-bg-color py-3 rounded-3">
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
    </div>
  );
};

export default PaymentPage;
