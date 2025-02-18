import React from "react";
import Home from "./Components/Home";
import BookingPage from "./Components/BookingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import PaymentPage from "./Components/PaymentPage";
import Selectpassenger from "./Components/Refund/Selectpassenger";
import PnrDetailsPage from "./Components/Refund/ChangePnr";
import PnrRefund from "./Components/Refund/TicketRefund";
import RefundSelect from "./Components/Refund/RefundSelect";
import { Modal } from "react-bootstrap";
import ModalPage from "./Components/ModalPage";
import ChangePnr from "./Components/Refund/ChangePnr";
import TicketRefund from "./Components/Refund/TicketRefund";
import Addonspage from "./Components/Addons/Addonspage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/select_passenger" element={<Selectpassenger />} />
          <Route path="/change_pnr" element={<ChangePnr />} />
          <Route path="/refund_select" element={<RefundSelect />} />
          <Route path="/ticket_refund" element={<TicketRefund />} />
          <Route path="/modal_page" element={<ModalPage />} />
          <Route path="/addons_page" element={<Addonspage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
