import React from "react";
import BookingPage from "./Components/BookingPage";

const Route = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Route;
