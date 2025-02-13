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

const WorkerRetention = ({ data }) => {
  if (!data) return null;
  const { retention_metrics, retention_data } = data;

  // Sort retention data by tenure days for visualization
  const sortedData = [...retention_data]
    .sort((a, b) => b.tenure_days - a.tenure_days)
    .slice(0, 20); // Show top 20 workers

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
      <h2 style={{ marginBottom: "20px" }}>Worker Retention</h2>

      {/* Retention Metrics */}
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
          <h3 style={{ fontSize: "14px", color: "#666" }}>Average Tenure</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {retention_metrics.avg_tenure_days.toFixed(1)} days
          </p>
        </div>
        <div
          style={{
            padding: "15px",
            backgroundColor: "#f8f9fa",
            borderRadius: "6px",
          }}
        >
          <h3 style={{ fontSize: "14px", color: "#666" }}>Median Tenure</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {retention_metrics.median_tenure_days.toFixed(1)} days
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
            Avg Shifts per Worker
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {retention_metrics.avg_shifts_per_worker.toFixed(1)}
          </p>
        </div>
      </div>

      {/* Tenure Distribution Chart */}
      <div style={{ height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sortedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="worker_id" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="tenure_days"
              stroke="#8884d8"
              name="Tenure (days)"
            />
            <Line
              type="monotone"
              dataKey="total_shifts"
              stroke="#82ca9d"
              name="Total Shifts"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WorkerRetention;
