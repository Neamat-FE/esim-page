import React from "react";
import Home from "./Components/Home";
import BookingPage from "./Components/BookingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import PaymentPage from "./Components/PaymentPage";
import Selectpassenger from "./Components/Refund/Selectpassenger";
import PnrDetailsPage from "./Components/Refund/PnrDetailsPage";
import PnrRefund from "./Components/Refund/PnrRefund";
import RefundSelect from "./Components/Refund/RefundSelect";
import { Modal } from "react-bootstrap";
import ModalPage from "./Components/ModalPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/select_passenger" element={<Selectpassenger />} />
          <Route path="/pnr_page" element={<PnrDetailsPage />} />
          <Route path="/refund_select" element={<RefundSelect />} />
          <Route path="/pnr_refund" element={<PnrRefund />} />
          <Route path="/modal_page" element={<ModalPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
