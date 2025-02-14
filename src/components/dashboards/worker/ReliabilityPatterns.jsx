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

const ReliabilityPatterns = ({ data }) => {
  if (!data) return null;
  const { reliability_segments, overall_reliability } = data;

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
      <h2 style={{ marginBottom: "20px" }}>Reliability Patterns</h2>

      {/* Overall Metrics */}
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
            Average Completion Rate
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {overall_reliability.avg_completion_rate.toFixed(1)}%
          </p>
        </div>
        <div
          style={{
            padding: "15px",
            backgroundColor: "#f8f9fa",
            borderRadius: "6px",
          }}
        >
          <h3 style={{ fontSize: "14px", color: "#666" }}>No-Show Rate</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {overall_reliability.avg_ncns_rate.toFixed(1)}%
          </p>
        </div>
        <div
          style={{
            padding: "15px",
            backgroundColor: "#f8f9fa",
            borderRadius: "6px",
          }}
        >
          <h3 style={{ fontSize: "14px", color: "#666" }}>Cancellation Rate</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {overall_reliability.avg_cancellation_rate.toFixed(1)}%
          </p>
        </div>
      </div>

      {/* Reliability Segments Chart */}
      <div style={{ height: "300px" }}>
        <h3 style={{ marginBottom: "15px" }}>Reliability by Segment</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={reliability_segments}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="reliability_segment" />
            <YAxis yAxisId="left" orientation="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
            <Bar
              yAxisId="left"
              dataKey="completion_rate"
              fill="#8884d8"
              name="Completion Rate"
            />
            <Bar
              yAxisId="right"
              dataKey="cancellation_rate"
              fill="#82ca9d"
              name="Cancellation Rate"
            />
            <Bar
              yAxisId="right"
              dataKey="ncns_rate"
              fill="#ffc658"
              name="No-Show Rate"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReliabilityPatterns;
