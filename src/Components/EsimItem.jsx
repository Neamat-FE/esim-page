import React, { useState, useEffect } from "react";
import jsonData from "./esimData.json";
import Pagination from "react-bootstrap/Pagination";
import "./esimItem.css";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Accordionitem from "./Accordionitem";

const EsimItem = () => {
  const [esimData, setEsimData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    // Load JSON data
    setEsimData(jsonData.data);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = esimData.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(esimData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("Accordion toggled!")
    );

    return (
      <button
        type="button"
        style={{
          backgroundColor: "#ffffff",
          border: "none",
          color: "#eb1933",
          padding: "6px",
          borderRadius: "4px",
        }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  return (
    <div>
      {currentData.map((esimItem) => (
        <Accordion key={esimItem.id}>
          <div className="row d-flex align-items-center align-content-center mb-4 rounded shadow-sm p-3">
            <div className="col-md-3 col-sm-12">
              <div className="img-section">
                <img
                  src={esimItem.operator.image.url}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-7 mt-4 mt-md-0">
              <p className="m-0 text-color-secondary fw-semibold font-size-xl">
                {esimItem.title}
              </p>
              <div className="row d-flex align-items-center">
                <div className="col-md-6">
                  <div className="d-flex align-items-center align-content-center mt-2">
                    <img src="images/global.png" alt="" />
                    <p className="m-0 ms-3 font-size-lg text-color-light fw-normal">
                      Coverage :{" "}
                      <span className="fw-normal text-color-secondary">
                        {esimItem.country.title}
                      </span>{" "}
                    </p>
                  </div>
                  <div className="d-flex align-items-center align-content-center mt-2">
                    <img src="images/call-calling.png" alt="" />
                    <p className="m-0 ms-3 font-size-lg text-color-light fw-normal">
                      Call :{" "}
                      <span className="fw-normal text-color-secondary">
                        {esimItem.voice ?? "---"}
                      </span>
                    </p>
                  </div>
                  <div className="d-flex align-items-center align-content-center mt-2">
                    <img src="images/calendar.png" alt="" />
                    <p className="m-0 ms-3 font-size-lg text-color-light fw-normal">
                      Validity :{" "}
                      <span className="fw-normal text-color-secondary">
                        {esimItem.day ?? "---"} Days
                      </span>
                    </p>
                  </div>
                </div>

                <div className="col-md-6 text-end align-content-end">
                  <div className="d-flex align-items-center align-content-center mt-2">
                    <img src="images/data.png" alt="" />
                    <p className="m-0 ms-3 font-size-lg text-color-light fw-normal">
                      Data :{" "}
                      <span className="fw-normal text-color-secondary">
                        {esimItem.data ?? "---"}
                      </span>{" "}
                    </p>
                  </div>
                  <div className="d-flex align-items-center align-content-center mt-2">
                    <img src="images/calendar.png" alt="" />
                    <p className="m-0 ms-3 font-size-lg text-color-light fw-normal">
                      Text :{" "}
                      <span className="fw-normal text-color-secondary">
                        {esimItem.text ?? "---"}
                      </span>
                    </p>
                  </div>
                  <div className="d-flex align-items-center align-content-center mt-2">
                    <img src="images/price.png" alt="" />
                    <p className="m-0 ms-3 font-size-lg text-color-light fw-normal">
                      Price :{" "}
                      <span className="fw-normal text-color-secondary">
                        BDT {esimItem.amount}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-2 text-end">
              <button className="btn btn-danger primary-bg-color mb-md-3 mb-0 me-3 me-md-0 font-size-lg fw-medium">
                Select
              </button>
              <CustomToggle eventKey="0">
                <span className="font-size-xl fw-medium ">Details</span>
                <span className="ms-2">
                  <img src="images/arrow-down.png" alt="" />
                </span>
              </CustomToggle>
            </div>
            <Accordion.Collapse eventKey="0">
              <div className="row mt-3 ">
                <div className="col-12 mt-3">
                  <Accordion.Item eventKey="0">
                    <div
                      className="accordion-header-custom p-3"
                      style={{
                        padding: "10px 15px",
                        borderRadius: "5px",
                        border: "1px solid #ddd",
                      }}
                    >
                      <h6 className="m-0 fw-semibold font-size-lg">
                        Additional Information
                      </h6>
                    </div>
                    <Accordion.Body>
                      <div className="border-bottom pb-3">
                        <p className="fw-semibold m-0 p-0 text-color-secondary">
                          <span>
                            <img
                              src="images/network.png"
                              alt=""
                              className="me-3"
                            />
                          </span>
                          Network
                        </p>
                        <p className="ms-4 ps-3 m-0 p-0 mt-1">Maew</p>
                      </div>
                      <div className="border-bottom pb-3 mt-3">
                        <p className="fw-semibold m-0 p-0 text-color-secondary">
                          <span>
                            <img
                              src="images/plan-type.png"
                              alt=""
                              className="me-3"
                            />
                          </span>
                          Plan Type
                        </p>
                        <p className="ms-4 ps-3 m-0 p-0 mt-1">Data</p>
                      </div>
                      <div className="border-bottom pb-3 mt-3">
                        <p className="fw-semibold m-0 p-0 text-color-secondary">
                          <span>
                            <img
                              src="images/activation-policy.png"
                              alt=""
                              className="me-3"
                            />
                          </span>
                          Activation Policy
                        </p>
                        <p className="ms-4 ps-3 m-0 p-0 mt-1">First-usage</p>
                      </div>
                      <div className="border-bottom mt-3">
                        <p className="fw-semibold m-0 p-0 text-color-secondary">
                          <span>
                            <img
                              src="images/installation.png"
                              alt=""
                              className="me-3"
                            />
                          </span>
                          Installation
                        </p>
                        <p className="ms-4 ps-3 m-0 p-0 mt-1">
                          Scanning the QR Code :
                        </p>
                        <div
                          className="html-content"
                          dangerouslySetInnerHTML={{
                            __html: esimItem.qr_installation,
                          }}
                        />
                      </div>
                      <div className="border-bottom pb-3 mt-3">
                        <p className="fw-semibold m-0 p-0 ">
                          <span>
                            <img
                              src="images/routing.png"
                              alt=""
                              className="me-3"
                            />
                          </span>
                          IP Routing
                        </p>
                        <p className="ms-4 ps-3 m-0 p-0 mt-1">----</p>
                      </div>
                      <div className="border-bottom pb-3 mt-3">
                        <p className="fw-semibold m-0 p-0 ">
                          <span>
                            <img src="images/kyc.png" alt="" className="me-3" />
                          </span>
                          EKYC (Identity Verification)
                        </p>
                        <p className="ms-4 ps-3 m-0 p-0 mt-1">Not Required</p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              </div>
            </Accordion.Collapse>
          </div>
        </Accordion>
      ))}

      <Pagination className="justify-content-end mt-5">
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev
          onClick={() =>
            handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
          }
        />
        {[...Array(totalPages).keys()].map((number) => (
          <Pagination.Item
            key={`pagination-${number + 1}`} // Ensuring unique key for each page
            active={number + 1 === currentPage}
            onClick={() => handlePageChange(number + 1)}
          >
            {number + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() =>
            handlePageChange(
              currentPage < totalPages ? currentPage + 1 : totalPages
            )
          }
        />
        <Pagination.Last onClick={() => handlePageChange(totalPages)} />
      </Pagination>
    </div>
  );
};

export default EsimItem;
