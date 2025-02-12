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

const WorkerReliability = ({ data }) => {
  if (!data) return null;
  const { overall_metrics, segment_analysis } = data;

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
      <h2 style={{ marginBottom: "20px" }}>Worker Reliability Analysis</h2>

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
            Average Reliability Score
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {overall_metrics.avg_reliability_score.toFixed(1)}
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
            Highly Reliable Workers
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {overall_metrics.highly_reliable_workers}
          </p>
        </div>
      </div>

      {/* Segment Analysis Chart */}
      <div style={{ height: "300px" }}>
        <h3 style={{ marginBottom: "15px" }}>Reliability Segments</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={segment_analysis}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="reliability_segment" />
            <YAxis
              yAxisId="left"
              label={{
                value: "Worker Count",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              label={{ value: "Avg Score", angle: 90, position: "insideRight" }}
            />
            <Tooltip />
            <Bar
              yAxisId="left"
              dataKey="worker_id"
              fill="#8884d8"
              name="Number of Workers"
            />
            <Bar
              yAxisId="right"
              dataKey="reliability_score"
              fill="#82ca9d"
              name="Average Score"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WorkerReliability;
