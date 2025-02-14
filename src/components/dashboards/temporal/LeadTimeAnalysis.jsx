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

const LeadTimeAnalysis = ({ data }) => {
  if (!data) return null;

  const { lead_time_conversion, lead_time_stats } = data;

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
      <h2 style={{ marginBottom: "20px" }}>Lead Time Analysis</h2>

      {/* Stats Cards */}
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
          <h3 style={{ fontSize: "14px", color: "#666" }}>Average Lead Time</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {lead_time_stats.overall_avg_lead_time.toFixed(1)} hours
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
            Claimed Shifts Lead Time
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {lead_time_stats.claimed_avg_lead_time.toFixed(1)} hours
          </p>
        </div>
      </div>

      {/* Conversion Rate Chart */}
      <div style={{ height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={lead_time_conversion}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="lead_time_bucket" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="view_to_claim_rate"
              fill="#8884d8"
              name="Claim Rate %"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LeadTimeAnalysis;
