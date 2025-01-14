import React from "react";
import Navbar from "./Navbar";
import "./BookingPage.css";
import { useLocation } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextInput from "./Textinput";

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

    contactNumber: Yup.number().required("Phone Number is required"),

    email: Yup.string().email("Email in invalid").required("Email is required"),
  });

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6">
                <h3 className="primary-color font-size-xxxl fw-bold">
                  Enter User Details
                </h3>
              </div>
              <div className="col-md-6 text-end d-flex align-content-end">
                <nav
                  style={{ "--bs-breadcrumb-divider": "'>'" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="">eSim Selection</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Booking
                    </li>
                    <li className="breadcrumb-item text-color-secondary text-decoration-none">
                      <a href="">Payment</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>

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
                    contactNumber: "",
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
                          <TextInput
                            label="Contact Number"
                            name="contactNumber"
                            type="number"
                            placeholder="Enter Contact Number"
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

                      <div className="form-check confirm-info">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label text-color-secondary"
                          htmlFor="flexCheckDefault"
                        >
                          By clicking , I agree with Flight Expert{" "}
                          <span>
                            <span>
                              {" "}
                              <a href="#" className="privacy"></a>Privacy Policy
                            </span>
                          </span>{" "}
                          and Terms & Conditions.
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary mt-3"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Continue to Payment"}
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-5">
            <div className="row shadow p-3 d-flex align-content-center align-items-center">
              <div className="col-md-4">
                <img src="images/package.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-md-8">
                <p className="fw-bold">1 GB - 7 Days (Prepaid)</p>
                <p>BDT 567</p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
