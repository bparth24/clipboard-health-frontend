import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronLeft, BookOpen } from "lucide-react";

const AnalysisSection = ({ title, children }) => (
  <div
    style={{
      backgroundColor: "#f8f9fa",
      padding: "20px",
      borderRadius: "6px",
      marginBottom: "24px",
    }}
  >
    <h3
      style={{
        fontSize: "18px",
        fontWeight: "600",
        marginBottom: "16px",
        color: "#333",
      }}
    >
      {title}
    </h3>
    <div style={{ color: "#666", fontSize: "16px", lineHeight: "1.5" }}>
      {children}
    </div>
  </div>
);

const MarketplaceEfficiencyDashboard = ({ data }) => {
  const [isAnalysisPanelOpen, setIsAnalysisPanelOpen] = useState(false);

  if (!data || !data.marketplace_efficiency_worker_analysis) {
    return (
      <div style={{ padding: "20px", textAlign: "center", color: "#666" }}>
        No marketplace efficiency data available
      </div>
    );
  }

  const {
    shift_claiming_patterns = {},
    worker_retention = {},
    worker_engagement = {},
  } = data.marketplace_efficiency_worker_analysis;

  const claimingMetrics = shift_claiming_patterns.overall_metrics || {};
  const loyaltyMetrics = worker_retention.loyalty_metrics || {};
  const engagementMetrics = worker_engagement.overall_engagement || {};

  return (
    <div
      style={{
        padding: "20px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Main Dashboard Content */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          transition: "all 0.3s ease",
          transform: isAnalysisPanelOpen
            ? "translateX(250px)"
            : "translateX(0)",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h1>Marketplace Efficiency & Worker Behavior</h1>
          <button
            onClick={() => setIsAnalysisPanelOpen(!isAnalysisPanelOpen)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              backgroundColor: "#f8f9fa",
              border: "1px solid #e2e8f0",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {isAnalysisPanelOpen ? (
              <ChevronLeft size={20} />
            ) : (
              <BookOpen size={20} />
            )}
            {isAnalysisPanelOpen ? "Hide Analysis" : "View Analysis"}
          </button>
        </div>

        {/* Main dashboard content remains the same */}
        {/* Overall Metrics Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "15px",
            marginBottom: "20px",
          }}
        >
          {/* Your existing metric cards */}
          <div
            style={{
              padding: "15px",
              backgroundColor: "#f8f9fa",
              borderRadius: "6px",
            }}
          >
            <h3 style={{ fontSize: "14px", color: "#666" }}>
              Avg Time to Claim
            </h3>
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
            <h3 style={{ fontSize: "14px", color: "#666" }}>
              Worker Engagement
            </h3>
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

        {/* Your existing visualization sections */}
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
                              w.avg_time_to_claim > 1 &&
                              w.avg_time_to_claim <= 4
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
                              w.avg_time_to_claim > 4 &&
                              w.avg_time_to_claim <= 24
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
                            w.avg_time_to_claim > 24 &&
                            w.avg_time_to_claim <= 72
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
                            w.avg_time_to_claim > 24 &&
                            w.avg_time_to_claim <= 72
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
                          (w) =>
                            w.completion_rate > 25 && w.completion_rate <= 50
                        ).length || 0,
                      reliability:
                        worker_retention.worker_performance?.filter(
                          (w) =>
                            w.reliability_score > 25 &&
                            w.reliability_score <= 50
                        ).length || 0,
                    },
                    {
                      range: "51-75%",
                      completion:
                        worker_retention.worker_performance?.filter(
                          (w) =>
                            w.completion_rate > 50 && w.completion_rate <= 75
                        ).length || 0,
                      reliability:
                        worker_retention.worker_performance?.filter(
                          (w) =>
                            w.reliability_score > 50 &&
                            w.reliability_score <= 75
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
        {/* ... charts and graphs ... */}
      </div>

      {/* Analysis Side Panel */}
      <div
        style={{
          position: "fixed",
          top: "100px",
          left: 0,
          width: "600px",
          height: "calc(100vh - 100px)",
          backgroundColor: "white",
          boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
          transform: isAnalysisPanelOpen
            ? "translateX(0)"
            : "translateX(-100%)",
          transition: "transform 0.3s ease",
          display: "flex",
          flexDirection: "column",
          zIndex: 1000,
        }}
      >
        {/* Header - Fixed */}
        <div
          style={{
            padding: "20px",
            backgroundColor: "white",
            borderBottom: "1px solid #e2e8f0",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2 style={{ fontSize: "20px", fontWeight: "600" }}>
              Analysis & Insights
            </h2>
            <button
              onClick={() => setIsAnalysisPanelOpen(false)}
              style={{
                padding: "8px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: "#f8f9fa",
                cursor: "pointer",
              }}
            >
              <ChevronLeft size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div
          style={{
            padding: "20px",
            overflowY: "auto",
            flex: 1,
          }}
        >
          <AnalysisSection title="Overview">
            Analysis of marketplace efficiency metrics reveals important
            patterns in worker claiming behavior, performance distribution, and
            engagement levels. The data shows varied response times to shift
            opportunities and distinct worker performance segments that impact
            overall marketplace health.
          </AnalysisSection>

          <AnalysisSection title="Claiming Time Analysis">
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li style={{ marginBottom: "12px" }}>
                <strong>Response Time Distribution:</strong>{" "}
                {claimingMetrics.avg_time_to_claim.toFixed(1)}h average claim
                time indicates moderate marketplace liquidity, with
                opportunities for optimization
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Quick Response Segment:</strong> Significant portion of
                claims occur within first hour, showing strong worker engagement
                with fresh opportunities
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Extended Window Claims:</strong> Longer claim times (
                {">"}24h) suggest potential for improved notification and
                incentive systems
              </li>
            </ul>
          </AnalysisSection>

          <AnalysisSection title="Worker Performance Distribution">
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li style={{ marginBottom: "12px" }}>
                <strong>High Performers:</strong>{" "}
                {worker_retention.worker_performance?.filter(
                  (w) => w.completion_rate > 75
                ).length || 0}{" "}
                workers maintain &gt;75% completion rate, forming reliable core
                workforce
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Reliability Correlation:</strong> Strong alignment
                between completion rates and reliability scores suggests
                consistent worker behavior patterns
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Performance Segments:</strong> Clear stratification in
                worker performance indicates opportunity for targeted
                improvement programs
              </li>
            </ul>
          </AnalysisSection>

          <AnalysisSection title="Engagement Patterns">
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li style={{ marginBottom: "12px" }}>
                <strong>Active Worker Base:</strong>{" "}
                {engagementMetrics.total_engaged_workers} engaged workers
                demonstrate healthy marketplace activity
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Multi-Workplace Activity:</strong>{" "}
                {loyaltyMetrics.multi_workplace_workers} workers serve multiple
                facilities, indicating strong marketplace flexibility
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Engagement Distribution:</strong> Varied engagement
                levels suggest opportunity for increased worker activation
                strategies
              </li>
            </ul>
          </AnalysisSection>

          <AnalysisSection title="Recommendations">
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li style={{ marginBottom: "12px" }}>
                Implement targeted notifications for shifts matching worker
                preferences to reduce claim times
              </li>
              <li style={{ marginBottom: "12px" }}>
                Develop performance improvement program for workers in 25-75%
                completion rate range
              </li>
              <li style={{ marginBottom: "12px" }}>
                Create incentive structure for consistent early shift claiming
              </li>
              <li style={{ marginBottom: "12px" }}>
                Expand multi-workplace worker program to increase marketplace
                flexibility
              </li>
            </ul>
          </AnalysisSection>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceEfficiencyDashboard;
