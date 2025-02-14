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

const SupplyDemand = ({ data }) => {
  if (!data) return null;
  const { day_of_week_balance, overall_metrics } = data;

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
      <h2 style={{ marginBottom: "20px" }}>Supply-Demand Balance</h2>

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
            Average Supply-Demand Ratio
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {(overall_metrics.avg_supply_demand_ratio * 100).toFixed(1)}%
          </p>
        </div>
        <div
          style={{
            padding: "15px",
            backgroundColor: "#f8f9fa",
            borderRadius: "6px",
          }}
        >
          <h3 style={{ fontSize: "14px", color: "#666" }}>Supply Volatility</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {(overall_metrics.supply_volatility * 100).toFixed(1)}%
          </p>
        </div>
      </div>

      {/* Daily Balance Chart */}
      <div style={{ height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={day_of_week_balance}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day_of_week" />
            <YAxis
              yAxisId="left"
              label={{
                value: "Total Shifts",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              label={{ value: "Fill Rate", angle: 90, position: "insideRight" }}
            />
            <Tooltip />
            <Bar
              yAxisId="left"
              dataKey="total_shifts"
              fill="#8884d8"
              name="Total Shifts"
            />
            <Bar
              yAxisId="right"
              dataKey="supply_demand_ratio"
              fill="#82ca9d"
              name="Fill Rate"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SupplyDemand;
