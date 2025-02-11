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

const PriceElasticity = ({ data }) => {
  if (!data) return null;

  const { rate_elasticity, avg_elasticity } = data;

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
      <h2 style={{ marginBottom: "20px" }}>Price Elasticity Analysis</h2>

      {/* Summary Stats */}
      <div
        style={{
          padding: "15px",
          backgroundColor: "#f8f9fa",
          borderRadius: "6px",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ fontSize: "14px", color: "#666" }}>Average Elasticity</h3>
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
          {avg_elasticity.toFixed(2)}
        </p>
      </div>

      {/* Elasticity Chart */}
      <div style={{ height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={rate_elasticity}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="rate_bucket" />
            <YAxis
              yAxisId="left"
              orientation="left"
              label={{
                value: "Claim Rate (%)",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              label={{
                value: "Elasticity",
                angle: 90,
                position: "insideRight",
              }}
            />
            <Tooltip />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="claim_rate"
              stroke="#8884d8"
              name="Claim Rate"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="elasticity"
              stroke="#82ca9d"
              name="Elasticity"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PriceElasticity;
