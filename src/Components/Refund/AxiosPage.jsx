import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AxiosPage = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false); // Loader state

  const fetchData = async () => {
    const token = "381768|wHliotFf3X8ia22bYxbcg9JvtUVPQ8RTrG41xImWa86eb837";
    const url =
      "https://api.flightexpert.com/api/flights/v1/add-ons/esim/search?type=global";

    setLoading(true); // Start loading

    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setResponse(res.data.data);
      console.log("Axios data:", res.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <button
        className="btn btn-primary mb-md-3 mb-0 me-md-0"
        onClick={fetchData}
        disabled={loading}
      >
        {loading ? "Loading..." : "Search for Data"}
      </button>

      {loading ? (
        <img
          src="images/processing-loader.gif"
          style={{ width: "120px" }}
          alt="Loading..."
          className="img-fluid"
        />
      ) : response ? (
        response.map((esimData, index) => (
          <div
            key={index}
            className="row d-flex align-items-center align-content-center mb-4 rounded shadow p-3"
          >
            <div className="col-md-3 col-sm-12">
              <div className="img-section">
                <img
                  src={esimData.operator?.image?.url}
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
                <div className="col-7">
                  <div className="d-flex align-items-center align-content-center mt-2">
                    <img src="images/global.png" alt="" />
                    <p className="m-0 ms-3 font-size-lg text-color-light fw-normal">
                      Coverage:{" "}
                      <span className="fw-normal text-color-secondary">
                        {esimData.country.title}
                      </span>{" "}
                    </p>
                  </div>
                  <div className="d-flex align-items-center align-content-center mt-2">
                    <img src="images/call-calling.png" alt="" />
                    <p className="m-0 ms-3 font-size-lg text-color-light fw-normal">
                      Call:{" "}
                      <span className="fw-normal text-color-secondary">
                        {esimData.voice ?? "---"}
                      </span>
                    </p>
                  </div>
                  <div className="d-flex align-items-center align-content-center mt-2">
                    <img src="images/calendar.png" alt="" />
                    <p className="m-0 ms-3 font-size-lg text-color-light fw-normal">
                      Validity:{" "}
                      <span className="fw-normal text-color-secondary">
                        {esimData.day ?? "---"} Days
                      </span>
                    </p>
                  </div>
                </div>

                <div className="col-5 text-end align-content-end">
                  <div className="d-flex align-items-center align-content-center mt-2">
                    <img src="images/data.png" alt="" />
                    <p className="m-0 ms-3 font-size-lg text-color-light fw-normal">
                      Data:{" "}
                      <span className="fw-normal text-color-secondary">
                        {esimData.data ?? "---"}
                      </span>{" "}
                    </p>
                  </div>
                  <div className="d-flex align-items-center align-content-center mt-2">
                    <img src="images/calendar.png" alt="" />
                    <p className="m-0 ms-3 font-size-lg text-color-light fw-normal">
                      Text:{" "}
                      <span className="fw-normal text-color-secondary">
                        {esimData.text ?? "---"}
                      </span>
                    </p>
                  </div>
                  <div className="d-flex align-items-center align-content-center mt-2">
                    <img src="images/price.png" alt="" />
                    <p className="m-0 ms-3 font-size-lg text-color-light fw-normal">
                      Price:{" "}
                      <span className="fw-normal text-color-secondary">
                        BDT {esimData.amount}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-2 text-end mt-4 ">
              <button
                className="btn btn-primary mb-md-3 mb-0 me-3 me-md-0"
                onClick={() => navigate("/booking")}
              >
                Select
              </button>
              <div>
                <span className="font-size-xl fw-medium ">Details</span>
                <span className="ms-2">
                  <img src="images/arrow-down.png" alt="" />
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Click the button to load data...</p>
      )}
    </div>
  );
};

export default AxiosPage;
