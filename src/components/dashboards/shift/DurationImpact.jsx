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

const DurationImpact = ({ data }) => {
  if (!data) return null;

  const { duration_metrics, correlation } = data;

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
      <h2 style={{ marginBottom: "20px" }}>Duration Impact Analysis</h2>

      {/* Correlation Stats */}
      <div
        style={{
          padding: "15px",
          backgroundColor: "#f8f9fa",
          borderRadius: "6px",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ fontSize: "14px", color: "#666" }}>
          Duration-Fill Rate Correlation
        </h3>
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
          {correlation.duration_vs_fill_rate.toFixed(3)}
        </p>
      </div>

      {/* Duration Metrics Chart */}
      <div style={{ height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={duration_metrics}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="duration_bucket" />
            <YAxis yAxisId="left" orientation="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Bar
              yAxisId="left"
              dataKey="fill_rate"
              fill="#8884d8"
              name="Fill Rate %"
            />
            <Bar
              yAxisId="right"
              dataKey="completion_rate"
              fill="#82ca9d"
              name="Completion Rate %"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DurationImpact;
