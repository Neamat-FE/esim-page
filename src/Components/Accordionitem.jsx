import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Accordionitem = () => {
  const [planSize, setPlanSize] = useState("");
  const [validity, setValidity] = useState("");
  const [sortBy, setSortBy] = useState("cheapest");
  const [nameFilter, setNameFilter] = useState("");
  const [priceRange, setPriceRange] = useState(0);

  // Constants
  const MIN_PRICE = 0;
  const MAX_PRICE = 100;

  const planSizes = [
    { value: "10", label: "10 GB" },
    { value: "15", label: "15 GB" },
    { value: "20", label: "20 GB" },
  ];

  const validityPeriods = [
    { value: "5", label: "5 Days" },
    { value: "7", label: "7 Days" },
    { value: "10", label: "10 Days" },
  ];

  const sortOptions = [
    { value: "cheapest", label: "Cheapest First" },
    { value: "most-data", label: "Most Data" },
    { value: "least-data", label: "Least Data" },
    { value: "lowest-price", label: "Lowest Price" },
  ];

  const [phone, setPhone] = useState("");

  const handleOnChange = (value) => {
    setPhone(value);
  };

  return (
    <div className="w-full max-w-2xl p-4 border rounded-lg shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">eSIM Plan Filters</h2>

        {/* Name Filter */}
        <div className="mb-4">
          <label className="block mb-2">Provider Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Search by provider name"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
        </div>

        {/* Price Range Slider */}
        <div className="mb-4">
          <label className="block mb-2">Price Range: ${priceRange}</label>
          <div className="flex items-center gap-2 w-100">
            <span>${MIN_PRICE}</span>
            <input
              type="range"
              min={MIN_PRICE}
              max={MAX_PRICE}
              value={priceRange}
              onChange={(e) => setPriceRange(parseInt(e.target.value))}
              className="w- h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #eb1933 0%, #eb1933 ${
                  (priceRange / MAX_PRICE) * 100
                }%, #e5e7eb ${(priceRange / MAX_PRICE) * 100}%, #eb1933 100%)`,
              }}
            />
            <span>${MAX_PRICE}</span>
          </div>
        </div>

        {/* Plan Size Dropdown */}
        <div className="mb-4">
          <label className="block mb-2">Plan Size</label>
          <select
            className="w-full p-2 border rounded"
            value={planSize}
            onChange={(e) => setPlanSize(e.target.value)}
          >
            <option value="">Select plan size</option>
            {planSizes.map((size) => (
              <option key={size.value} value={size.value}>
                {size.label}
              </option>
            ))}
          </select>
        </div>

        {/* Validity Dropdown */}
        <div className="mb-4">
          <label className="block mb-2">Validity Period</label>
          <select
            className="w-full p-2 border rounded"
            value={validity}
            onChange={(e) => setValidity(e.target.value)}
          >
            <option value="">Select validity period</option>
            {validityPeriods.map((period) => (
              <option key={period.value} value={period.value}>
                {period.label}
              </option>
            ))}
          </select>
        </div>

        {/* Sort By Radio Options */}
        <div className="mb-4">
          <label className="block mb-2">Sort By</label>
          <div className="grid grid-cols-2 gap-4">
            {sortOptions.map((option) => (
              <div key={option.value} className="flex items-center">
                <input
                  type="radio"
                  id={option.value}
                  name="sortBy"
                  value={option.value}
                  checked={sortBy === option.value}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor={option.value}>{option.label}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3>Enter your phone number</h3>
        <PhoneInput
          country={"us"} // Default country
          value={phone} // Controlled input value
          onChange={handleOnChange} // Update state
          enableSearch // Enable country search
          preferredCountries={["us", "gb", "fr", "in", "de"]} // Set preferred countries
        />
      </div>
    </div>
  );
};

export default Accordionitem;
