import react, { useState, useEffect } from "react";
import jsonData from "./esimData.json";
import Pagination from "react-bootstrap/Pagination";
import "./esimItem.css";

const EsimItem = () => {
  const [esimData, setEsimData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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

  return (
    <div>
      {currentData.map((esimItem) => (
        <div
          className="row d-flex align-items-center mb-4 rounded shadow-sm p-3"
          key={esimItem.id}
        >
          <div className="col-md-3">
            <div className="img-section">
              <img
                src={esimItem.country.image.url}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-7">
            <p className="m-0 fw-semibold">{esimItem.title}</p>
            <div className="row d-flex align-items-center">
              <div className="col-md-6">
                <div className="d-flex align-items-center align-content-center mt-2">
                  <img src="images/global.png" alt="" />
                  <p className="m-0 ms-2">
                    Coverage :{" "}
                    <span className="fw-semibold">
                      {esimItem.country.title}
                    </span>{" "}
                  </p>
                </div>
                <div className="d-flex align-items-center align-content-center mt-2">
                  <img src="images/call-calling.png" alt="" />
                  <p className="m-0 ms-2">
                    Call :{" "}
                    <span className="fw-semibold">
                      {esimItem.voice ?? "---"}
                    </span>
                  </p>
                </div>
                <div className="d-flex align-items-center align-content-center mt-2">
                  <img src="images/calendar.png" alt="" />
                  <p className="m-0 ms-2">
                    Validity :{" "}
                    <span className="fw-semibold">
                      {esimItem.day ?? "---"} Days
                    </span>
                  </p>
                </div>
              </div>

              <div className="col-md-6 text-end align-content-end">
                <div className="d-flex align-items-center align-content-center mt-2">
                  <img src="images/data.png" alt="" />
                  <p className="m-0 ms-2">
                    Data :{" "}
                    <span className="fw-semibold">
                      {esimItem.data ?? "---"}
                    </span>{" "}
                  </p>
                </div>
                <div className="d-flex align-items-center align-content-center mt-2">
                  <img src="images/calendar.png" alt="" />
                  <p className="m-0 ms-2">
                    Text :{" "}
                    <span className="fw-semibold">
                      {esimItem.text ?? "---"}
                    </span>
                  </p>
                </div>
                <div className="d-flex align-items-center align-content-center mt-2">
                  <img src="images/price.png" alt="" />
                  <p className="m-0 ms-2">
                    Price :{" "}
                    <span className="fw-semibold">BDT {esimItem.amount}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 text-end">
            <button className="btn btn-danger primary-color-bg mb-md-3 mb-0">
              Select
            </button>
            <button className="btn primary-color-border primary-color">
              View Details
            </button>
          </div>
        </div>
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
            key={number + 1}
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
