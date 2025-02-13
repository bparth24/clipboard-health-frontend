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

const BookingPatterns = ({ data }) => {
  if (!data) return null;
  const { overall_metrics, worker_metrics } = data;

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
      <h2 style={{ marginBottom: "20px" }}>Worker Booking Patterns</h2>

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
            Avg Claims per Worker
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {overall_metrics.avg_claims_per_worker.toFixed(1)}
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
            Avg Completion Rate
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {overall_metrics.avg_completion_rate.toFixed(1)}%
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
            Avg Facilities per Worker
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {overall_metrics.avg_facilities_per_worker.toFixed(1)}
          </p>
        </div>
      </div>

      {/* Distribution Chart */}
      <div style={{ height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={worker_metrics.slice(0, 10)}>
            {" "}
            {/* Show top 10 workers */}
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="worker_id" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Bar
              yAxisId="left"
              dataKey="total_claims"
              fill="#8884d8"
              name="Total Claims"
            />
            <Bar
              yAxisId="right"
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

export default BookingPatterns;
