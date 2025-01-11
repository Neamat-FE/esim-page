import React, { useState } from "react";

const Accordionitem = () => {
  const [filters, setFilters] = useState({
    priceRange: 50,
    sortBy: "",
    planSize: "",
    validity: "",
  });

  // Filter options
  const sortOptions = [
    { value: "cheapest", label: "Lowest Price" },
    { value: "most-data", label: "Most Data" },
    { value: "least-data", label: "Least Data" },
  ];

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

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      priceRange: 50,
      sortBy: "",
      planSize: "",
      validity: "",
    });
  };

  const styles = {
    container: {
      maxWidth: "300px",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontFamily: "Arial, sans-serif",
    },
    section: {
      marginBottom: "20px",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontWeight: "bold",
      fontSize: "14px",
    },
    select: {
      width: "100%",
      padding: "8px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "14px",
      marginBottom: "12px",
    },
    range: {
      width: "100%",
      marginBottom: "8px",
    },
    rangeLabels: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "12px",
      color: "#666",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
    },
    summary: {
      marginTop: "20px",
      padding: "10px",
      backgroundColor: "#f5f5f5",
      borderRadius: "4px",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.container}>
      {/* Sort Options */}
      <div style={styles.section} className="col-md-4">
        <label style={styles.label}>Sort By</label>
        <select
          name="sortBy"
          value={filters.sortBy}
          onChange={handleFilterChange}
          style={styles.select}
        >
          <option value="">Select sorting option</option>
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div style={styles.section}>
        <label style={styles.label}>Price Range: ${filters.priceRange}</label>
        <input
          type="range"
          name="priceRange"
          min="0"
          max="100"
          value={filters.priceRange}
          onChange={handleFilterChange}
          style={styles.range}
        />
        <div style={styles.rangeLabels}>
          <span>$0</span>
          <span>$100</span>
        </div>
      </div>

      {/* Plan Size */}
      <div style={styles.section}>
        <label style={styles.label}>Plan Size</label>
        <select
          name="planSize"
          value={filters.planSize}
          onChange={handleFilterChange}
          style={styles.select}
        >
          <option value="">Select plan size</option>
          {planSizes.map((size) => (
            <option key={size.value} value={size.value}>
              {size.label}
            </option>
          ))}
        </select>
      </div>

      {/* Validity Period */}
      <div style={styles.section}>
        <label style={styles.label}>Validity Period</label>
        <select
          name="validity"
          value={filters.validity}
          onChange={handleFilterChange}
          style={styles.select}
        >
          <option value="">Select validity period</option>
          {validityPeriods.map((period) => (
            <option key={period.value} value={period.value}>
              {period.label}
            </option>
          ))}
        </select>
      </div>

      {/* Reset Button */}
      <button onClick={resetFilters} style={styles.button}>
        Reset Filters
      </button>

      {/* Selected Filters Summary */}
      <div style={styles.summary}>
        <p>Price: ${filters.priceRange}</p>
        <p>Sort By: {filters.sortBy || "Not selected"}</p>
        <p>
          Plan Size:{" "}
          {filters.planSize ? `${filters.planSize} GB` : "Not selected"}
        </p>
        <p>
          Validity:{" "}
          {filters.validity ? `${filters.validity} Days` : "Not selected"}
        </p>
      </div>
    </div>
  );
};

export default Accordionitem;
