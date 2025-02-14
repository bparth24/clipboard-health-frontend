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

const FacilitySatisfaction = ({ data }) => {
  if (!data) return null;
  const { tier_summary, overall_metrics } = data;

  // Custom tooltip formatter for rate and days
  const formatTooltipValue = (value, name) => {
    if (name.includes("rate")) return `${value.toFixed(1)}x`;
    if (name.includes("days")) return `${value.toFixed(1)} days`;
    if (name.includes("quality")) return `${value.toFixed(1)}%`;
    return value;
  };

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
      <h2 style={{ marginBottom: "20px" }}>Facility Satisfaction Analysis</h2>

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
            Worker Return Rate
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {overall_metrics.avg_worker_return_rate.toFixed(2)}x
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
            Completion Quality
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {overall_metrics.avg_completion_quality.toFixed(1)}%
          </p>
        </div>
        <div
          style={{
            padding: "15px",
            backgroundColor: "#f8f9fa",
            borderRadius: "6px",
          }}
        >
          <h3 style={{ fontSize: "14px", color: "#666" }}>Average Tenure</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {overall_metrics.avg_worker_tenure.toFixed(1)} days
          </p>
        </div>
      </div>

      <div>
        {/* Satisfaction Tiers */}
        <h3 style={{ marginBottom: "15px" }}>Satisfaction Tier Distribution</h3>
        <div style={{ height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={tier_summary}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="satisfaction_tier" />
              <YAxis yAxisId="left" orientation="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip formatter={formatTooltipValue} />
              <Bar
                yAxisId="left"
                dataKey="facility_count"
                fill="#8884d8"
                name="Facilities"
              />
              <Bar
                yAxisId="right"
                dataKey="avg_completion_quality"
                fill="#82ca9d"
                name="Quality Score"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Quality Metrics by Tier */}
        <h3 style={{ marginBottom: "15px" }}>Performance by Tier</h3>
        <div style={{ height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={tier_summary}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="satisfaction_tier" />
              <YAxis yAxisId="left" orientation="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip formatter={formatTooltipValue} />
              <Bar
                yAxisId="left"
                dataKey="avg_return_rate"
                fill="#8884d8"
                name="Return Rate"
              />
              <Bar
                yAxisId="right"
                dataKey="avg_tenure_days"
                fill="#82ca9d"
                name="Avg Tenure"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default FacilitySatisfaction;
