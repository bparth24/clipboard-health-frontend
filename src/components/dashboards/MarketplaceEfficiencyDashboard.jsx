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

const MarketplaceEfficiencyDashboard = ({ data }) => {
  // Early return if data is not in the expected format
  if (!data || !data.marketplace_efficiency_worker_analysis) {
    return (
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          color: "#666",
        }}
      >
        No marketplace efficiency data available
      </div>
    );
  }

  // Destructure the data with fallback to empty objects
  const {
    shift_claiming_patterns = {},
    worker_retention = {},
    worker_engagement = {},
  } = data.marketplace_efficiency_worker_analysis;

  // Ensure we have default values for metrics
  const claimingMetrics = shift_claiming_patterns.overall_metrics || {};
  const loyaltyMetrics = worker_retention.loyalty_metrics || {};
  const engagementMetrics = worker_engagement.overall_engagement || {};

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
      <h2 style={{ marginBottom: "20px" }}>
        Marketplace Efficiency & Worker Behavior
      </h2>

      {/* Overall Metrics Section */}
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
          <h3 style={{ fontSize: "14px", color: "#666" }}>Avg Time to Claim</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {(claimingMetrics.avg_time_to_claim || 0).toFixed(1)}h
          </p>
        </div>
        <div
          style={{
            padding: "15px",
            backgroundColor: "#f8f9fa",
            borderRadius: "6px",
          }}
        >
          <h3 style={{ fontSize: "14px", color: "#666" }}>Worker Engagement</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {(engagementMetrics.total_engaged_workers || 0).toLocaleString()}
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
            Multi-Workplace Workers
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {(loyaltyMetrics.multi_workplace_workers || 0).toLocaleString()}
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
          {/* Claiming Time Distribution */}
          <div>
            <h3
              style={{
                textAlign: "center",
                marginBottom: "20px",
                color: "#333",
                fontWeight: "600",
              }}
            >
              Claiming Time Distribution
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart
                data={[
                  {
                    range: "< 1 hour",
                    count:
                      shift_claiming_patterns.workplace_patterns?.filter(
                        (w) => w.avg_time_to_claim <= 1
                      ).length || 0,
                    fill_rate:
                      shift_claiming_patterns.workplace_patterns
                        ?.filter((w) => w.avg_time_to_claim <= 1)
                        .reduce((acc, curr) => acc + curr.claim_rate, 0) /
                      (shift_claiming_patterns.workplace_patterns?.filter(
                        (w) => w.avg_time_to_claim <= 1
                      ).length || 1),
                  },
                  {
                    range: "1-4 hours",
                    count:
                      shift_claiming_patterns.workplace_patterns?.filter(
                        (w) =>
                          w.avg_time_to_claim > 1 && w.avg_time_to_claim <= 4
                      ).length || 0,
                    fill_rate:
                      shift_claiming_patterns.workplace_patterns
                        ?.filter(
                          (w) =>
                            w.avg_time_to_claim > 1 && w.avg_time_to_claim <= 4
                        )
                        .reduce((acc, curr) => acc + curr.claim_rate, 0) /
                      (shift_claiming_patterns.workplace_patterns?.filter(
                        (w) =>
                          w.avg_time_to_claim > 1 && w.avg_time_to_claim <= 4
                      ).length || 1),
                  },
                  {
                    range: "4-24 hours",
                    count:
                      shift_claiming_patterns.workplace_patterns?.filter(
                        (w) =>
                          w.avg_time_to_claim > 4 && w.avg_time_to_claim <= 24
                      ).length || 0,
                    fill_rate:
                      shift_claiming_patterns.workplace_patterns
                        ?.filter(
                          (w) =>
                            w.avg_time_to_claim > 4 && w.avg_time_to_claim <= 24
                        )
                        .reduce((acc, curr) => acc + curr.claim_rate, 0) /
                      (shift_claiming_patterns.workplace_patterns?.filter(
                        (w) =>
                          w.avg_time_to_claim > 4 && w.avg_time_to_claim <= 24
                      ).length || 1),
                  },
                  {
                    range: "1-3 days",
                    count:
                      shift_claiming_patterns.workplace_patterns?.filter(
                        (w) =>
                          w.avg_time_to_claim > 24 && w.avg_time_to_claim <= 72
                      ).length || 0,
                    fill_rate:
                      shift_claiming_patterns.workplace_patterns
                        ?.filter(
                          (w) =>
                            w.avg_time_to_claim > 24 &&
                            w.avg_time_to_claim <= 72
                        )
                        .reduce((acc, curr) => acc + curr.claim_rate, 0) /
                      (shift_claiming_patterns.workplace_patterns?.filter(
                        (w) =>
                          w.avg_time_to_claim > 24 && w.avg_time_to_claim <= 72
                      ).length || 1),
                  },
                  {
                    range: "> 3 days",
                    count:
                      shift_claiming_patterns.workplace_patterns?.filter(
                        (w) => w.avg_time_to_claim > 72
                      ).length || 0,
                    fill_rate:
                      shift_claiming_patterns.workplace_patterns
                        ?.filter((w) => w.avg_time_to_claim > 72)
                        .reduce((acc, curr) => acc + curr.claim_rate, 0) /
                      (shift_claiming_patterns.workplace_patterns?.filter(
                        (w) => w.avg_time_to_claim > 72
                      ).length || 1),
                  },
                ]}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={true}
                  vertical={false}
                  stroke="#e0e0e0"
                />
                <XAxis
                  dataKey="range"
                  axisLine={true}
                  tickLine={true}
                  tick={{ fontSize: 12, fill: "#666" }}
                />
                <YAxis
                  yAxisId="left"
                  label={{
                    value: "Number of Workplaces",
                    angle: -90,
                    position: "insideLeft",
                    offset: 0,
                    style: { textAnchor: "middle" },
                  }}
                  axisLine={true}
                  tickLine={true}
                  width={60}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  label={{
                    value: "Avg Claim Rate (%)",
                    angle: 90,
                    position: "insideRight",
                    offset: 0,
                    style: { textAnchor: "middle" },
                  }}
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
                  yAxisId="left"
                  dataKey="count"
                  name="Number of Workplaces"
                  fill="#8884d8"
                  barSize={20}
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  yAxisId="right"
                  dataKey="fill_rate"
                  name="Claim Rate"
                  fill="#82ca9d"
                  barSize={20}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Worker Performance Distribution */}
          <div>
            <h3
              style={{
                textAlign: "center",
                marginBottom: "20px",
                color: "#333",
                fontWeight: "600",
              }}
            >
              Worker Performance Distribution
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart
                data={[
                  {
                    range: "0-25%",
                    completion:
                      worker_retention.worker_performance?.filter(
                        (w) => w.completion_rate <= 25
                      ).length || 0,
                    reliability:
                      worker_retention.worker_performance?.filter(
                        (w) => w.reliability_score <= 25
                      ).length || 0,
                  },
                  {
                    range: "26-50%",
                    completion:
                      worker_retention.worker_performance?.filter(
                        (w) => w.completion_rate > 25 && w.completion_rate <= 50
                      ).length || 0,
                    reliability:
                      worker_retention.worker_performance?.filter(
                        (w) =>
                          w.reliability_score > 25 && w.reliability_score <= 50
                      ).length || 0,
                  },
                  {
                    range: "51-75%",
                    completion:
                      worker_retention.worker_performance?.filter(
                        (w) => w.completion_rate > 50 && w.completion_rate <= 75
                      ).length || 0,
                    reliability:
                      worker_retention.worker_performance?.filter(
                        (w) =>
                          w.reliability_score > 50 && w.reliability_score <= 75
                      ).length || 0,
                  },
                  {
                    range: "76-100%",
                    completion:
                      worker_retention.worker_performance?.filter(
                        (w) => w.completion_rate > 75
                      ).length || 0,
                    reliability:
                      worker_retention.worker_performance?.filter(
                        (w) => w.reliability_score > 75
                      ).length || 0,
                  },
                ]}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={true}
                  vertical={false}
                  stroke="#e0e0e0"
                />
                <XAxis
                  dataKey="range"
                  axisLine={true}
                  tickLine={true}
                  tick={{ fontSize: 12, fill: "#666" }}
                />
                <YAxis
                  label={{
                    value: "Number of Workers",
                    angle: -90,
                    position: "insideLeft",
                    offset: 0,
                    style: { textAnchor: "middle" },
                  }}
                  axisLine={true}
                  tickLine={true}
                  width={60}
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
                  dataKey="completion"
                  name="Completion Rate"
                  fill="#8884d8"
                  barSize={20}
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="reliability"
                  name="Reliability Score"
                  fill="#82ca9d"
                  barSize={20}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Worker Engagement Distribution */}
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
            Worker Engagement Distribution
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={worker_engagement.engagement_patterns || []}>
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal={true}
                vertical={false}
                stroke="#e0e0e0"
              />
              <XAxis
                dataKey="engagement_level"
                axisLine={true}
                tickLine={true}
                interval={0}
                tick={{ fontSize: 12, fill: "#666" }}
              />
              <YAxis
                label={{
                  value: "Distribution",
                  angle: -90,
                  position: "insideLeft",
                  offset: 0,
                  style: { textAnchor: "middle" },
                }}
                axisLine={true}
                tickLine={true}
                width={60}
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
                dataKey="worker_count"
                fill="#ffc658"
                name="Worker Count"
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

export default MarketplaceEfficiencyDashboard;
