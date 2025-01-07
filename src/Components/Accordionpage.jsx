import React from "react";
import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

const Accordionpage = () => {
  // Accordion
  const [activeAccordion, setActiveAccordion] = useState(null);
  const toggleAccordion = (id) => {
    setActiveAccordion((prevState) => (prevState === id ? null : id));
  };
  return (
    <div>
      {activeAccordion === esimItem.id && (
        <div className="col-12 mt-2">
          <hr className="mb-4" />
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <div
                className="accordion-header-custom p-3"
                style={{
                  backgroundColor: "", // Change to your desired color
                  padding: "10px 15px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              >
                <h6 className="m-0">Additional Information</h6>
              </div>
              <Accordion.Body>
                <div className="border-bottom pb-3">
                  <p className="fw-semibold m-0 p-0 ">
                    <span>
                      <img src="images/network.png" alt="" className="me-3" />
                    </span>
                    Network
                  </p>
                  <p className="ms-4 ps-3 m-0 p-0 mt-1">Maew</p>
                </div>
                <div className="border-bottom pb-3 mt-3">
                  <p className="fw-semibold m-0 p-0 ">
                    <span>
                      <img src="images/plan-type.png" alt="" className="me-3" />
                    </span>
                    Plan Type
                  </p>
                  <p className="ms-4 ps-3 m-0 p-0 mt-1">Data</p>
                </div>
                <div className="border-bottom pb-3 mt-3">
                  <p className="fw-semibold m-0 p-0 ">
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
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      )}
    </div>
  );
};

export default Accordionpage;
