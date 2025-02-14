import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const WorkerReliabilityTrustAnalysis = ({ data }) => {
  // Early return if data is not in the expected format
  if (!data || !data.worker_reliability_trust_analysis) {
    return (
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          color: "#666",
        }}
      >
        No reliability data available
      </div>
    );
  }

  // Destructure the data with fallback to empty objects
  const {
    ncns_patterns = {},
    cancellation_patterns = {},
    punctuality = {},
  } = data.worker_reliability_trust_analysis;

  // Ensure we have default values for metrics
  const ncnsMetrics = ncns_patterns.overall_metrics || {};
  const cancellationMetrics = cancellation_patterns.overall_metrics || {};
  const punctualityMetrics = punctuality.overall_metrics || {};

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

      {/* Overall Metrics Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        {/* NCNS Metrics */}
        <div
          style={{
            padding: "15px",
            backgroundColor: "#f8f9fa",
            borderRadius: "6px",
          }}
        >
          <h3 style={{ fontSize: "14px", color: "#666" }}>NCNS Rate</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {(ncnsMetrics.ncns_rate * 100 || 0).toFixed(2)}%
          </p>
        </div>

        {/* Cancellation Metrics */}
        <div
          style={{
            padding: "15px",
            backgroundColor: "#f8f9fa",
            borderRadius: "6px",
          }}
        >
          <h3 style={{ fontSize: "14px", color: "#666" }}>Cancellation Rate</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {(cancellationMetrics.cancellation_rate || 0).toFixed(2)}%
          </p>
        </div>

        {/* Punctuality Metrics */}
        <div
          style={{
            padding: "15px",
            backgroundColor: "#f8f9fa",
            borderRadius: "6px",
          }}
        >
          <h3 style={{ fontSize: "14px", color: "#666" }}>
            Avg Claim Lead Time
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {(punctualityMetrics.avg_claim_lead_time || 0).toFixed(2)} hrs
          </p>
        </div>
      </div>

      {/* Visualization Sections */}
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            marginBottom: "40px",
            backgroundColor: "#f9f9f9",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          {/* NCNS by Pay Rate */}
          <div>
            <h3
              style={{
                textAlign: "center",
                marginBottom: "20px",
                color: "#333",
                fontWeight: "600",
              }}
            >
              NCNS Rate by Pay Range
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart
                data={ncns_patterns.pay_rate_analysis || []}
                margin={{ left: 20, right: 20, top: 10, bottom: 10 }} // Added margin to prevent cut-off
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={true}
                  vertical={false}
                  stroke="#e0e0e0"
                />
                <XAxis
                  dataKey="pay_range"
                  axisLine={true}
                  tickLine={true}
                  interval={0} // Show all labels
                  angle={-45} // Rotate labels
                  textAnchor="end"
                  height={60} // Increased height for rotated labels
                  tick={{ fontSize: 12, fill: "#666" }}
                />
                <YAxis
                  label={{
                    value: "NCNS Rate (%)",
                    angle: -90,
                    position: "insideLeft",
                    offset: 0,
                    style: { textAnchor: "middle" },
                  }}
                  axisLine={true}
                  tickLine={true}
                  width={60} // Increased width for label
                />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  contentStyle={{
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderRadius: "8px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  }}
                />
                <Bar
                  dataKey="ncns_rate"
                  fill="#8884d8"
                  name="NCNS Rate (%)"
                  barSize={40}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Cancellations by Day of Week */}
          <div>
            <h3
              style={{
                textAlign: "center",
                marginBottom: "20px",
                color: "#333",
                fontWeight: "600",
              }}
            >
              Cancellation Notice Hours by Day
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart
                data={cancellation_patterns.day_analysis || []}
                margin={{ left: 20, right: 20, top: 10, bottom: 10 }} // Added margin to prevent cut-off
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={true}
                  vertical={false}
                  stroke="#e0e0e0"
                />
                <XAxis
                  dataKey="day_of_week"
                  axisLine={true}
                  tickLine={true}
                  interval={0} // Show all labels
                  angle={-45} // Rotate labels
                  textAnchor="end"
                  height={60} // Increased height for rotated labels
                  tick={{ fontSize: 12, fill: "#666" }}
                />
                <YAxis
                  label={{
                    value: "Avg Notice Hours",
                    angle: -90,
                    position: "insideLeft",
                    offset: 0,
                    style: { textAnchor: "middle" },
                  }}
                  axisLine={true}
                  tickLine={true}
                  width={60} // Increased width for label
                />
                <Tooltip
                  cursor={{ stroke: "#82ca9d", strokeWidth: 2 }}
                  contentStyle={{
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderRadius: "8px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="notice_hours"
                  stroke="#82ca9d"
                  strokeWidth={3}
                  dot={{
                    stroke: "#82ca9d",
                    strokeWidth: 2,
                    r: 5,
                  }}
                  name="Avg Notice Hours"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Punctuality Distribution */}
        <div
          style={{
            backgroundColor: "#f9f9f9",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "#333",
              fontWeight: "600",
            }}
          >
            Punctuality Timing Distribution
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={Object.entries(punctuality.timing_distribution || {}).map(
                ([category, percentage]) => ({
                  category,
                  percentage,
                })
              )}
              margin={{ left: 20, right: 20, top: 10, bottom: 10 }} // Added margin to prevent cut-off
            >
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal={true}
                vertical={false}
                stroke="#e0e0e0"
              />
              <XAxis
                dataKey="category"
                axisLine={true}
                tickLine={true}
                interval={0} // Show all labels
                tick={{ fontSize: 12, fill: "#666" }}
              />
              <YAxis
                label={{
                  value: "Distribution (%)",
                  angle: -90,
                  position: "insideLeft",
                  offset: 0,
                  style: { textAnchor: "middle" },
                }}
                axisLine={true}
                tickLine={true}
                width={60} // Increased width for label
              />
              <Tooltip
                cursor={{ fill: "transparent" }}
                contentStyle={{
                  backgroundColor: "rgba(255,255,255,0.9)",
                  borderRadius: "8px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                }}
              />
              <Bar
                dataKey="percentage"
                fill="#ffc658"
                name="Timing Distribution (%)"
                barSize={100}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default WorkerReliabilityTrustAnalysis;
