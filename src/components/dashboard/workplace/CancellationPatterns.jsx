import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CancellationPatterns = ({ data }) => {
  if (!data) return null;

  const { deletion_stats, deletion_by_hour } = data;

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        marginBottom: "20px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Cancellation Patterns</h2>

      {/* Deletion Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            padding: "15px",
            backgroundColor: "#f8f9fa",
            borderRadius: "6px",
          }}
        >
          <h3 style={{ fontSize: "14px", color: "#666" }}>
            Average Time to Deletion
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {deletion_stats.avg_time_to_deletion.toFixed(1)} hours
          </p>
        </div>
      </div>

      {/* Hourly Deletion Pattern */}
      <div style={{ height: "300px" }}>
        <h3 style={{ marginBottom: "15px" }}>Deletions by Hour</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={deletion_by_hour}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="posting_hour" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="SHIFT_ID"
              stroke="#8884d8"
              name="Deletions"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CancellationPatterns;
