import React from "react";

const MetricCard = ({ title, value, format = "number" }) => {
  const formatValue = (val) => {
    if (format === "percentage") return `${val.toFixed(1)}%`;
    if (format === "currency") return `$${val.toFixed(2)}`;
    return val.toLocaleString();
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        margin: "10px",
      }}
    >
      <h3 style={{ color: "#666", marginBottom: "8px" }}>{title}</h3>
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>
        {formatValue(value)}
      </div>
    </div>
  );
};

export default MetricCard;
