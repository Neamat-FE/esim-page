import React from "react";
import Home from "./Components/Home";
import BookingPage from "./Components/BookingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import PaymentPage from "./Components/PaymentPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
