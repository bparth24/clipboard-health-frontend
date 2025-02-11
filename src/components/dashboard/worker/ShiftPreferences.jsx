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

const ShiftPreferences = ({ data }) => {
  if (!data) return null;

  const { slot_preferences, rate_preferences } = data;

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
      <h2 style={{ marginBottom: "20px" }}>Worker Preferences</h2>

      {/* Slot Preferences */}
      <div style={{ marginBottom: "30px" }}>
        <h3 style={{ marginBottom: "15px" }}>Slot Preferences</h3>
        <div style={{ height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={slot_preferences}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="slot" />
              <YAxis yAxisId="left" orientation="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Bar
                yAxisId="left"
                dataKey="worker_count"
                fill="#8884d8"
                name="Worker Count"
              />
              <Bar
                yAxisId="right"
                dataKey="avg_pay_rate"
                fill="#82ca9d"
                name="Avg Pay Rate"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Rate Preferences */}
      <div>
        <h3 style={{ marginBottom: "15px" }}>Rate Impact</h3>
        <div style={{ height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={rate_preferences}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="rate_bucket" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="conversion_rate"
                fill="#8884d8"
                name="Conversion Rate %"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ShiftPreferences;
