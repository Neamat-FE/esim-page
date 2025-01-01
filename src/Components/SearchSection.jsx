import React from "react";
import Nav from "react-bootstrap/Nav";

const SearchSection = () => {
  return (
    <div className="container mt-5">
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Flight</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Hotel</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Visa</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">eSIM</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default SearchSection;
