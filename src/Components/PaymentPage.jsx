import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import PageHeading from "./PageHeading";
import paymentResponse from "./payment.json";
import savedPaymentResponse from "./savedPayment.json";
import Selectpassenger from "./Refund/Selectpassenger";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const mobileWalletOptions = paymentResponse.options.BDT.filter(
    (optionItem) => optionItem.option_category === "MFS"
  );
  const othersEmiOptions = paymentResponse.options.BDT.filter(
    (optionItem) => optionItem.option_category === "CARDS"
  );

  const location = useLocation();
  const { esimData } = location.state || {};

  const [activeMethod, setActiveMethod] = useState("card");
  const methods = [
    { id: "card", label: "Visa/Master/Amex" },
    { id: "wallet", label: "Mobile Wallet" },
    { id: "others", label: "Others & EMI" },
  ];

  const [selectedCard, setSelectedCard] = useState("visa");

  const [selectedWallet, setSelectedWallet] = useState("bKash");

  const others = ["Visa/Mastercard", "SSL Commerz"];
  const [selectedOthers, setSelectedOthers] = useState("Visa/Mastercard");

  function handlePaymentRedirect(selectedWallet) {
    if (selectedWallet) {
      const walletUrls = {
        bkash: "https://www.bkash.com/",
        nagad: "https://shorturl.at/Ctyk3",
        dbblrct: "https://www.dutchbanglabank.com/",
        sebl: "https://www.southeastbank.com.bd/",
      };

      // Get the URL based on the selected wallet
      const redirectUrl = walletUrls[selectedWallet.code];

      if (redirectUrl) {
        // Redirect to the respective URL

        window.open(redirectUrl, "_blank");
      } else {
        // Alert if no URL is defined for the selected wallet
        alert("Selected wallet does not have a defined URL.");
      }
    } else {
      // Alert if no wallet is selected
      alert("Please select a wallet before proceeding.");
    }
  }

  const handlePaymentOtherRedirect = (selectedOption) => {
    if (selectedOption) {
      // Define URLs for different selections
      const paymentUrls = {
        sebl: "https://www.google.com/",
        dbblnexdeb: "https://www.google.com/",
      };

      // Get the URL for the selected option
      const redirectUrl = paymentUrls[selectedOption.name.toLowerCase()];
      if (redirectUrl) {
        window.open(redirectUrl, "_blank"); // Open the link in a new tab
      } else {
        alert("Selected option does not have a defined URL.");
      }
    } else {
      alert("Please select a payment option.");
    }
  };

  const navigate = useNavigate();

  const handlePnrClick = () => {
    navigate("/select_passenger");
  };
  const handleRefundClick = () => {
    navigate("/pnr_refund");
  };

  // Render dynamic views for each payment method
  const renderCardView = () => (
    <div className="row saved-method">
      <div className="col-md-8">
        <h5 className="my-4 fw-semibold">Saved Payment Method</h5>

        {savedPaymentResponse.data.card.map((card) => (
          <div
            key={card.id}
            className={`border rounded-3 mb-3 ${
              selectedCard === card ? "border-danger" : ""
            }`}
            onClick={() => setSelectedCard(card)}
            style={{ cursor: "pointer", height: "70px" }}
          >
            <div className="mx-4 my-2 d-flex align-items-center align-content-center justify-content-between    justify-content-center">
              <div className="d-flex align-items-center">
                <input
                  type="radio"
                  name="card-selection"
                  className="form-check-input me-3"
                  checked={selectedCard === card}
                  onChange={() => setSelectedCard(card)}
                />
                <img src={card.logo} alt="" className="img-fluid" />
              </div>
              <div className="text-end">
                <div>
                  <span className="text-gray-600 m-0">
                    {card.card_number_masked}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mt-1 m-0 fw-semibold">
                  {card.card_type}
                </p>
              </div>
            </div>
          </div>
        ))}

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
        <button className="btn btn-primary  mb-0 me-3 me-md-0 mt-4">
          Use Card
        </button>
      </div>
    </div>
  );

  const renderWalletView = () => (
    <div>
      <h5 className="my-4 fw-semibold">Mobile Wallet</h5>

      <div className="col-md-8">
        {mobileWalletOptions.map((optionItem) => (
          <div
            key={optionItem.id}
            className={`border rounded-3 mb-3 ${
              selectedWallet === optionItem ? "border-danger" : ""
            }`}
            onClick={() => setSelectedWallet(optionItem)}
            style={{ cursor: "pointer" }}
          >
            <div className="mx-3 my-2 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <label className="d-flex align-items-center w-100 m-0">
                  <input
                    type="radio"
                    name="wallet-selection"
                    className="form-check-input me-3"
                    onChange={() => setSelectedWallet(optionItem)}
                    checked={selectedWallet === optionItem}
                  />
                  <img
                    src={optionItem.logo}
                    alt=""
                    className="img-fluid "
                    style={{ height: "40px" }}
                  />
                  <span className="ms-3 fw-semibold">{optionItem.name}</span>
                </label>
              </div>
            </div>
          </div>
        ))}
        <button
          className="btn btn-primary  mb-0 me-3 me-md-0 mt-2"
          onClick={() => handlePaymentRedirect(selectedWallet)}
        >
          Confirm and pay
        </button>
      </div>
    </div>
  );

  const renderOthersView = () => (
    <div>
      <h5 className="my-4 fw-semibold">Others & EMI</h5>
      <div className="col-md-8">
        {othersEmiOptions.map((other) => (
          <div
            key={other.id}
            className={`border rounded-3 mb-3 ${
              selectedOthers === other ? "border-danger" : ""
            }`}
            onClick={() => setSelectedOthers(other)}
            style={{ cursor: "pointer", height: "64px" }}
          >
            <div className="mx-3 my-2 d-flex align-items-center">
              <div className="">
                <label className="d-flex align-items-center align-content-center w-100 m-0">
                  <input
                    type="radio"
                    name="wallet-selection"
                    className="form-check-input me-3"
                    onChange={() => selectedOthers(other)}
                    checked={selectedOthers === other}
                  />
                  <img
                    src={other.logo}
                    alt=""
                    className="img-fluid"
                    style={{ height: "40px" }}
                  />
                  <span className="ms-3 fw-semibold">{other.name}</span>
                </label>
              </div>
            </div>
          </div>
        ))}
        <button
          className="btn btn-primary  mb-0 me-3 me-md-0 mt-2"
          onClick={() => handlePaymentOtherRedirect(selectedOthers)}
        >
          Confirm and pay
        </button>
      </div>
    </div>
  );

  return (
    <div className="mt-4">
      <Navbar />
      <PageHeading pageTitle="Payment Method" active="Payment" />
      <div className="container my-3">
        <div className="row">
          <div className="col-md-8">
            <div className="shadow p-4 rounded-2">
              <div className="align-items-center mb-4 rounded mt-2">
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

                <div className="">
                  {activeMethod === "card" && renderCardView()}
                  {activeMethod === "wallet" && renderWalletView()}
                  {activeMethod === "others" && renderOthersView()}
                </div>
              </div>
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
        <button
          className="btn btn-primary mb-md-3 mb-0 me-3 me-md-0 mt-4"
          onClick={handlePnrClick}
        >
          Change PNR/Ticket
        </button>
        <button
          className="btn btn-primary mb-md-3 mb-0 ms-3 me-md-0 mt-4"
          onClick={handleRefundClick}
        >
          Refund
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
