import React from "react";
import Home from "./Components/Home";
import BookingPage from "./Components/BookingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import PaymentPage from "./Components/PaymentPage";
import Selectpassenger from "./Components/Refund/Selectpassenger";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/select_passenger" element={<Selectpassenger />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
