import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateView = ({
  selectedDate,
  onChange,
  minDate,
  maxDate,
  placeholder,
}) => {
  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        minDate={minDate}
        maxDate={maxDate}
        placeholderText={placeholder}
        dateFormat={`dd/MM/yyyy`}
        className="form-control"
      />
    </div>
  );
};

export default DateView;
