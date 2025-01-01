import React from "react";
import Form from "react-bootstrap/Form";

const DataSection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 p-4 shadow-sm br-2">
          <div className="range-selector">
            <Form.Label className="fw-bold">Price</Form.Label>
            <Form.Range className="color-primary" />
          </div>
          <div className="sort-by">
            <Form>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="2"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="2"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form>
          </div>
        </div>
        <div className="col-md-8"></div>
      </div>
    </div>
  );
};

export default DataSection;
