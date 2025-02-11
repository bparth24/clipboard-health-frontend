import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const TimingAnalysis = ({ data }) => {
  if (!data) return null;

  const { hourly_patterns, advance_notice_impact, timing_stats } = data;

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
      <h2 style={{ marginBottom: "20px" }}>Timing Optimization</h2>

      {/* Timing Stats */}
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
            Average Advance Notice
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {timing_stats.avg_advance_notice.toFixed(1)} hours
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
            Median Advance Notice
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {timing_stats.median_advance_notice.toFixed(1)} hours
          </p>
        </div>
      </div>

      {/* Hourly Patterns Chart */}
      <div style={{ marginBottom: "30px" }}>
        <h3 style={{ marginBottom: "15px" }}>Success Rate by Hour</h3>
        <div style={{ height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={hourly_patterns}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour_of_day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="success_rate"
                stroke="#8884d8"
                name="Success Rate %"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Advance Notice Impact Chart */}
      <div>
        <h3 style={{ marginBottom: "15px" }}>Impact of Advance Notice</h3>
        <div style={{ height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={advance_notice_impact}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="notice_bucket" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="fill_rate" fill="#8884d8" name="Fill Rate %" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TimingAnalysis;
