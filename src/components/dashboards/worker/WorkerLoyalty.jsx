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

const WorkerLoyalty = ({ data }) => {
  if (!data) return null;

  const { worker_segments, overall_stats } = data;

  // Transform segments data for chart
  const segmentData = Object.entries(worker_segments).map(
    ([segment, stats]) => ({
      segment,
      workerCount: stats.WORKER_ID,
      claimRate: stats.claim_rate,
      reliabilityScore: stats.reliability_score,
    })
  );

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
      <h2 style={{ marginBottom: "20px" }}>Worker Loyalty Analysis</h2>

      {/* Overall Stats Cards */}
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
            Total Active Workers
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {overall_stats.total_active_workers}
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
            {overall_stats.avg_shifts_per_worker.toFixed(1)}
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
            Avg Reliability Score
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {overall_stats.avg_reliability_score.toFixed(1)}%
          </p>
        </div>
      </div>

      {/* Segments Chart */}
      <div style={{ height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={segmentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="segment" />
            <YAxis yAxisId="left" orientation="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Bar
              yAxisId="left"
              dataKey="workerCount"
              fill="#8884d8"
              name="Worker Count"
            />
            <Bar
              yAxisId="right"
              dataKey="reliabilityScore"
              fill="#82ca9d"
              name="Reliability Score"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WorkerLoyalty;
