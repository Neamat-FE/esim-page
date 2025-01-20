import React, { useState } from "react";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";

const TravelerBookingSelection = () => {
  // State for traveler counts
  const [travelers, setTravelers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  // State for booking class
  const [bookingClass, setBookingClass] = useState("Economy");

  // State for modal visibility
  const [showModal, setShowModal] = useState(false);

  // Update traveler count
  const handleTravelerChange = (type, value) => {
    setTravelers((prev) => ({
      ...prev,
      [type]: Math.max(0, value), // Ensure no negative values
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Travelers: ${JSON.stringify(travelers)}, Booking Class: ${bookingClass}`
    );
    setShowModal(false); // Close modal on submit
  };

  return (
    <div>
      {/* Card to trigger modal */}
      <Col md={12} className="mb-3">
        <div
          className="p-3 border rounded text-center"
          style={{ cursor: "pointer" }}
          onClick={() => setShowModal(true)}
        >
          <h5>Flight Booking</h5>
          <p>Click to select travelers and class</p>
        </div>
      </Col>

      {/* Modal for traveler and booking selection */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Flight Booking Selection</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {/* Traveler selection */}
            <Row className="mb-3">
              <Col md={4}>
                <Form.Group controlId="adults">
                  <Form.Label>Adults (12+ years)</Form.Label>
                  <Form.Control
                    type="number"
                    min="1"
                    value={travelers.adults}
                    onChange={(e) =>
                      handleTravelerChange("adults", parseInt(e.target.value))
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="children">
                  <Form.Label>Children (2-11 years)</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    value={travelers.children}
                    onChange={(e) =>
                      handleTravelerChange("children", parseInt(e.target.value))
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="infants">
                  <Form.Label>Infants (Under 2 years)</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    value={travelers.infants}
                    onChange={(e) =>
                      handleTravelerChange("infants", parseInt(e.target.value))
                    }
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Booking class selection */}
            <Form.Group controlId="bookingClass" className="mb-3">
              <Form.Label>Booking Class</Form.Label>
              <Form.Select
                value={bookingClass}
                onChange={(e) => setBookingClass(e.target.value)}
              >
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
                <option value="First Class">First Class</option>
              </Form.Select>
            </Form.Group>

            {/* Submit button */}
            <Button type="submit" variant="primary" className="w-100">
              Confirm Selection
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TravelerBookingSelection;
