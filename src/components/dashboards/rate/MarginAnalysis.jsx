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

const MarginAnalysis = ({ data }) => {
  if (!data) return null;

  const { current_margins, overall_stats } = data;

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
      <h2 style={{ marginBottom: "20px" }}>Margin Analysis</h2>

      {/* Overall Stats */}
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
          <h3 style={{ fontSize: "14px", color: "#666" }}>Average Margin</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            ${overall_stats.avg_margin.toFixed(2)}
          </p>
        </div>
        <div
          style={{
            padding: "15px",
            backgroundColor: "#f8f9fa",
            borderRadius: "6px",
          }}
        >
          <h3 style={{ fontSize: "14px", color: "#666" }}>Average Margin %</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {overall_stats.avg_margin_percentage.toFixed(1)}%
          </p>
        </div>
      </div>

      {/* Margins by Slot Chart */}
      <div style={{ height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={current_margins}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="slot" />
            <YAxis
              yAxisId="left"
              orientation="left"
              label={{
                value: "Average Margin ($)",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              label={{ value: "Margin %", angle: 90, position: "insideRight" }}
            />
            <Tooltip />
            <Bar
              yAxisId="left"
              dataKey="avg_margin"
              fill="#8884d8"
              name="Average Margin"
            />
            <Bar
              yAxisId="right"
              dataKey="margin_percentage"
              fill="#82ca9d"
              name="Margin %"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MarginAnalysis;
