import React, { useState } from "react";

const ESIMSelector = () => {
  const [selectedOption, setSelectedOption] = useState("local");
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div
      style={{ fontFamily: "Arial, sans-serif", padding: "10px" }}
      className="container mt-3"
    >
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <label>
          <input
            type="radio"
            name="esimType"
            value="local"
            checked={selectedOption === "local"}
            onChange={handleOptionChange}
          />
          Local eSIMs
        </label>
        <label>
          <input
            type="radio"
            name="esimType"
            value="regional"
            checked={selectedOption === "regional"}
            onChange={handleOptionChange}
          />
          Regional eSIMs
        </label>
        <label>
          <input
            type="radio"
            name="esimType"
            value="global"
            checked={selectedOption === "global"}
            onChange={handleOptionChange}
          />
          Global eSIMs
        </label>
      </div>

      <div style={{ marginTop: "20px" }}>
        <select
          value={selectedCountry}
          onChange={handleCountryChange}
          style={{
            width: "200px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <option value="">Select Country</option>
          <option value="USA">USA</option>
          <option value="India">India</option>
          <option value="UK">UK</option>
          <option value="Germany">Germany</option>
          <option value="Australia">Australia</option>
        </select>
      </div>
    </div>
  );
};

export default ESIMSelector;
