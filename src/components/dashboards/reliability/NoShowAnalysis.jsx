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

const NoShowAnalysis = ({ data }) => {
  if (!data) return null;
  const { overall_metrics, slot_analysis } = data;

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
      <h2 style={{ marginBottom: "20px" }}>No-Show Analysis</h2>

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
          <h3 style={{ fontSize: "14px", color: "#666" }}>Total No-Shows</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {overall_metrics.total_no_shows}
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
            {overall_metrics.no_show_rate.toFixed(1)}%
          </p>
        </div>
      </div>

      {/* Slot Analysis Chart */}
      <div style={{ height: "300px" }}>
        <h3 style={{ marginBottom: "15px" }}>No-Show Rate by Slot</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={slot_analysis}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="slot" />
            <YAxis
              yAxisId="left"
              label={{
                value: "No-Show Rate (%)",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              label={{
                value: "Average Rate ($)",
                angle: 90,
                position: "insideRight",
              }}
            />
            <Tooltip />
            <Bar
              yAxisId="left"
              dataKey="no_show_rate"
              fill="#8884d8"
              name="No-Show Rate"
            />
            <Bar
              yAxisId="right"
              dataKey="avg_rate"
              fill="#82ca9d"
              name="Average Rate"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default NoShowAnalysis;
