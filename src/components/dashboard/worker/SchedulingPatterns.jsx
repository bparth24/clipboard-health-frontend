import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SchedulingPatterns = ({ data }) => {
  if (!data) return null;
  const { interval_stats, interval_distribution } = data;

  // Transform interval distribution for chart
  const distributionData = Object.entries(interval_distribution).map(
    ([interval, percentage]) => ({
      interval,
      percentage: Number(percentage),
    })
  );

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
      <h2 style={{ marginBottom: "20px" }}>Scheduling Patterns</h2>

      {/* Interval Stats */}
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
            Average Time Between Shifts
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {Number(interval_stats.mean).toFixed(1)} hours
          </p>
        </div>
        <div
          style={{
            padding: "15px",
            backgroundColor: "#f8f9fa",
            borderRadius: "6px",
          }}
        >
          <h3 style={{ fontSize: "14px", color: "#666" }}>Median Interval</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {Number(interval_stats["50%"]).toFixed(1)} hours
          </p>
        </div>
      </div>

      {/* Interval Distribution Chart */}
      <div style={{ height: "300px" }}>
        <h3 style={{ marginBottom: "15px" }}>
          Time Between Shifts Distribution
        </h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={distributionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="interval" />
            <YAxis
              label={{
                value: "Percentage of Shifts (%)",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
            <Bar dataKey="percentage" fill="#8884d8" name="Percentage" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SchedulingPatterns;
