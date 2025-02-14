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

const MarketLiquidity = ({ data }) => {
  if (!data) return null;

  const { liquidity_stats, hourly_metrics } = data;

  // Add null checks for the data structure
  if (!liquidity_stats || !hourly_metrics) return null;

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Market Liquidity</h2>

      {/* Liquidity Stats */}
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
            Average Daily Shifts
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {typeof liquidity_stats.avg_daily_shifts === "number"
              ? liquidity_stats.avg_daily_shifts.toFixed(1)
              : "0"}
          </p>
        </div>
        <div
          style={{
            padding: "15px",
            backgroundColor: "#f8f9fa",
            borderRadius: "6px",
          }}
        >
          <h3 style={{ fontSize: "14px", color: "#666" }}>
            Fill Rate Volatility
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {typeof liquidity_stats.fill_rate_volatility === "number"
              ? (liquidity_stats.fill_rate_volatility * 100).toFixed(1) + "%"
              : "0%"}
          </p>
        </div>
        <div
          style={{
            padding: "15px",
            backgroundColor: "#f8f9fa",
            borderRadius: "6px",
          }}
        >
          <h3 style={{ fontSize: "14px", color: "#666" }}>Rate Volatility</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {typeof liquidity_stats.rate_volatility === "number"
              ? liquidity_stats.rate_volatility.toFixed(2)
              : "0"}
          </p>
        </div>
      </div>

      {/* Hourly Metrics Chart */}
      {hourly_metrics && hourly_metrics.length > 0 && (
        <div style={{ height: "300px" }}>
          <h3 style={{ marginBottom: "15px" }}>Hourly Market Activity</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={hourly_metrics}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" tickFormatter={(hour) => `${hour}:00`} />
              <YAxis />
              <Tooltip
                formatter={(value, name) => [
                  value.toFixed(1),
                  name === "fill_rate" ? "Fill Rate %" : "Total Shifts",
                ]}
              />
              <Line
                type="monotone"
                dataKey="total_shifts"
                stroke="#8884d8"
                name="Total Shifts"
              />
              <Line
                type="monotone"
                dataKey="fill_rate"
                stroke="#82ca9d"
                name="Fill Rate %"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default MarketLiquidity;
