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

const PostingStrategies = ({ data }) => {
  if (!data) return null;

  const { lead_time_analysis, posting_stats } = data;

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
      <h2 style={{ marginBottom: "20px" }}>Posting Strategies</h2>

      {/* Posting Stats */}
      <div
        style={{
          padding: "15px",
          backgroundColor: "#f8f9fa",
          borderRadius: "6px",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ fontSize: "14px", color: "#666" }}>Average Lead Time</h3>
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
          {posting_stats.avg_lead_time.toFixed(1)} hours
        </p>
      </div>

      {/* Lead Time Analysis Chart */}
      <div style={{ height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={lead_time_analysis}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="lead_time_bucket" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="fill_rate" fill="#8884d8" name="Fill Rate %" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PostingStrategies;
