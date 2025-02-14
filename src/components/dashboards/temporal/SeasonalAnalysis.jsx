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

const SeasonalAnalysis = ({ data }) => {
  if (!data) return null;

  const { monthly_trends, weekly_trends } = data;

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
      <h2 style={{ marginBottom: "20px" }}>Seasonal Trends</h2>

      {/* Monthly Trends */}
      <div style={{ marginBottom: "30px" }}>
        <h3 style={{ marginBottom: "15px" }}>Monthly Fill Rate</h3>
        <div style={{ height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthly_trends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="fill_rate" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Weekly Trends */}
      <div>
        <h3 style={{ marginBottom: "15px" }}>Weekly Fill Rate</h3>
        <div style={{ height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weekly_trends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week_of_year" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="fill_rate" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SeasonalAnalysis;
