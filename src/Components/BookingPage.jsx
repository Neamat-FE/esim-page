import React from "react";
import Navbar from "./Navbar";
import "./BookingPage.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextInput from "./Textinput";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Accordionitem from "./Accordionitem";

const BookingPage = () => {
  const location = useLocation();
  const { esimData } = location.state || {};

  const validationSchema = Yup.object({
    fName: Yup.string()
      .required("First Name is required")
      .matches(/^[A-Za-z]+$/, "Only alphabets are allowed"),

    lName: Yup.string()
      .required("Last Name is required")
      .matches(/^[A-Za-z]+$/, "Only alphabets are allowed"),

    phone: Yup.string().required("Phone Number is required"),

    email: Yup.string().email("Email in invalid").required("Email is required"),
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const [phone, setPhone] = useState("");

  const handleOnChange = (value) => {
    setPhone(value);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mt-4">
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
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Booking
                      </li>
                      <li className="breadcrumb-item text-color-secondary text-decoration-none">
                        <a href="">Payment</a>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-4"></div>
          </div>
          <div className="col-md-8">
            <div className="row d-flex align-items-center align-content-center mb-4 rounded shadow p-3 mt-4">
              <div className="col-md-3 col-sm-12">
                <div className="img-section">
                  <img
                    src={esimData.operator.image.url}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-7 mt-4 mt-md-0">
                <p className="m-0 text-color-secondary fw-semibold font-size-xl">
                  {esimData.title}
                </p>
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-6">
                    <div className="d-flex align-items-center align-content-center mt-2">
                      <img src="images/global.png" alt="" />
                      <p className="m-0 ms-3 font-size-lg text-color-light fw-normal">
                        Coverage :{" "}
                        <span className="fw-normal text-color-secondary">
                          {esimData.country.title}
                        </span>{" "}
                      </p>
                    </div>
                    <div className="d-flex align-items-center align-content-center mt-2">
                      <img src="images/call-calling.png" alt="" />
                      <p className="m-0 ms-3 font-size-lg text-color-light fw-normal">
                        Call :{" "}
                        <span className="fw-normal text-color-secondary">
                          {esimData.voice ?? "---"}
                        </span>
                      </p>
                    </div>
                    <div className="d-flex align-items-center align-content-center mt-2">
                      <img src="images/calendar.png" alt="" />
                      <p className="m-0 ms-3 font-size-lg text-color-light fw-normal">
                        Validity :{" "}
                        <span className="fw-normal text-color-secondary">
                          {esimData.day ?? "---"} Days
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="col-6 text-end align-content-end">
                    <div className="d-flex align-items-center align-content-center mt-2">
                      <img src="images/data.png" alt="" />
                      <p className="m-0 ms-3 font-size-lg text-color-light fw-normal">
                        Data :{" "}
                        <span className="fw-normal text-color-secondary">
                          {esimData.data ?? "---"}
                        </span>{" "}
                      </p>
                    </div>
                    <div className="d-flex align-items-center align-content-center mt-2">
                      <img src="images/calendar.png" alt="" />
                      <p className="m-0 ms-3 font-size-lg text-color-light fw-normal">
                        Text :{" "}
                        <span className="fw-normal text-color-secondary">
                          {esimData.text ?? "---"}
                        </span>
                      </p>
                    </div>
                    <div className="d-flex align-items-center align-content-center mt-2">
                      <img src="images/price.png" alt="" />
                      <p className="m-0 ms-3 font-size-lg text-color-light fw-normal">
                        Price :{" "}
                        <span className="fw-normal text-color-secondary">
                          BDT {esimData.amount}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-2 text-end mt-4 "></div>
            </div>

            <div className="row shadow mt-3 p-3">
              <div className="title-text ">
                <h5 className="text-color-primary fw-bold">User Information</h5>
              </div>

              <div className="col-md-12 mt-3">
                <Formik
                  initialValues={{
                    fName: "",
                    lName: "",
                    phone: "",
                    email: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values, { resetForm }) => {
                    console.log("Form Submitted:", values);
                    resetForm(); // Clear the form after submission
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="row">
                        <div className="col-md-6">
                          <TextInput
                            label="First Name"
                            name="fName"
                            type="text"
                            placeholder="Enter First name"
                          />
                        </div>

                        <div className="col-md-6">
                          <TextInput
                            label="Last Name"
                            name="lName"
                            type="text"
                            placeholder="Enter Last name"
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          {/* <TextInput
                            label="Contact Number"
                            name="contactNumber"
                            type="number"
                            placeholder="Enter Contact Number"
                          /> */}
                          <label
                            htmlFor="phone"
                            style={{
                              fontSize: 14,
                              fontWeight: "600",
                              marginBottom: 10,
                            }}
                          >
                            Contact Number{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <PhoneInput
                            country={"bd"}
                            name="phone"
                            value={phone}
                            onChange={handleOnChange}
                            enableSearch
                            preferredCountries={["us", "gb", "fr", "in", "de"]}
                            inputClass="form-control-lg"
                            containerStyle={{
                              width: "100%",
                            }}
                            inputStyle={{
                              fontSize: 16,
                              fontWeight: 300,
                              width: "100%",
                            }}
                          />
                        </div>
                        <div className="col-md-6">
                          <TextInput
                            label="Email Address"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>

                      <div className="form-check confirm-info mt-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                          onChange={handleCheckboxChange}
                        />
                        <label
                          className="form-check-label text-color-secondary ms-1"
                          htmlFor="flexCheckDefault"
                        >
                          By clicking , I agree with Flight Expert
                          <span>
                            <a href="" className="mx-2">
                              Privacy Policy
                            </a>
                          </span>
                          and
                          <span>
                            <a href="" className="ms-2">
                              Terms & Conditions
                            </a>
                          </span>
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary mt-4 mb-3"
                        disabled={!isChecked || isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Continue to Payment"}
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="m-4">
              <div className="row shadow p-3 d-flex align-content-center align-items-center">
                <div className="col-4">
                  <img src="images/package.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-8">
                  <p className=" m-0 fw-semibold text-color-primary">
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
                        </span>{" "}
                      </p>
                      <p className="m-0 font-size-md">(1*{esimData.amount})</p>
                    </div>
                  </div>
                </div>
                <div className="">
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
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="container ">
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

export default BookingPage;
