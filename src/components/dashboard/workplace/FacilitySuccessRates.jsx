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

const FacilitySuccessRates = ({ data }) => {
  if (!data) return null;

  const { volume_analysis, overall_stats } = data;

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
      <h2 style={{ marginBottom: "20px" }}>Facility Success Rates</h2>

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
          <h3 style={{ fontSize: "14px", color: "#666" }}>Total Facilities</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {overall_stats.total_facilities}
          </p>
        </div>
        <div
          style={{
            padding: "15px",
            backgroundColor: "#f8f9fa",
            borderRadius: "6px",
          }}
        >
          <h3 style={{ fontSize: "14px", color: "#666" }}>Average Fill Rate</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {overall_stats.avg_fill_rate.toFixed(1)}%
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
            Average Completion Rate
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {overall_stats.avg_completion_rate.toFixed(1)}%
          </p>
        </div>
      </div>

      {/* Volume Analysis Chart */}
      <div style={{ height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={volume_analysis}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="volume_category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="fill_rate" fill="#8884d8" name="Fill Rate %" />
            <Bar
              dataKey="completion_rate"
              fill="#82ca9d"
              name="Completion Rate %"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FacilitySuccessRates;
