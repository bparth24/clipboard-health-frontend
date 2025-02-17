import React, { useState } from "react";
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

const WorkerReliabilityTrustAnalysis = ({ data }) => {
  const [isAnalysisPanelOpen, setIsAnalysisPanelOpen] = useState(false);

  if (!data || !data.worker_reliability_trust_analysis) {
    return (
      <div style={{ padding: "20px", textAlign: "center", color: "#666" }}>
        No reliability data available
      </div>
    );
  }

  const {
    ncns_patterns = {},
    cancellation_patterns = {},
    punctuality = {},
  } = data.worker_reliability_trust_analysis;

  const ncnsMetrics = ncns_patterns.overall_metrics || {};
  const cancellationMetrics = cancellation_patterns.overall_metrics || {};
  const punctualityMetrics = punctuality.overall_metrics || {};

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
          <h1>Worker Reliability Trust Analysis</h1>
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
            <h3 style={{ fontSize: "14px", color: "#666" }}>NCNS Rate</h3>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              {(ncnsMetrics.ncns_rate * 100 || 0).toFixed(2)}%
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
              Cancellation Rate
            </h3>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              {(cancellationMetrics.cancellation_rate || 0).toFixed(2)}%
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
              Avg Claim Lead Time
            </h3>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              {(punctualityMetrics.avg_claim_lead_time || 0).toFixed(2)} hrs
            </p>
          </div>
        </div>

        {/* Charts Section */}
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "30px",
              marginBottom: "40px",
              backgroundColor: "#f9f9fa",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            {/* Your existing NCNS by Pay Rate chart */}
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
                  margin={{ left: 20, right: 20, top: 10, bottom: 10 }}
                >
                  {/* Your existing chart configuration */}
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
                    interval={0}
                    angle={-45}
                    textAnchor="end"
                    height={60}
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
                    dataKey="ncns_rate"
                    fill="#8884d8"
                    name="NCNS Rate (%)"
                    barSize={40}
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Your existing Cancellations by Day of Week chart */}
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
                  margin={{ left: 20, right: 20, top: 10, bottom: 10 }}
                >
                  {/* Your existing chart configuration */}
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
                    interval={0}
                    angle={-45}
                    textAnchor="end"
                    height={60}
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
                    width={60}
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

          {/* Your existing Punctuality Distribution chart */}
          <div
            style={{
              backgroundColor: "#f9f9fa",
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
                margin={{ left: 20, right: 20, top: 10, bottom: 10 }}
              >
                {/* Your existing chart configuration */}
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
                  interval={0}
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
            Analysis of worker reliability metrics reveals key patterns in NCNS
            behavior, cancellation timing, and punctuality trends. The data
            shows clear correlations between pay rates and reliability, as well
            as day-of-week patterns in cancellation behavior.
          </AnalysisSection>

          <AnalysisSection title="NCNS Patterns">
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li style={{ marginBottom: "12px" }}>
                <strong>Overall NCNS Rate:</strong>{" "}
                {(ncnsMetrics.ncns_rate * 100).toFixed(2)}% overall NCNS rate
                indicates strong worker reliability baseline
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Pay Rate Impact:</strong> Clear correlation between
                higher pay rates and lower NCNS rates, suggesting monetary
                incentives effectively drive reliability
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Risk Factors:</strong> Lower pay ranges show elevated
                NCNS risk, identifying potential intervention points for
                reliability improvement
              </li>
            </ul>
          </AnalysisSection>

          <AnalysisSection title="Cancellation Behavior">
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li style={{ marginBottom: "12px" }}>
                <strong>Notice Period:</strong> Average notice period of{" "}
                {(cancellationMetrics.cancellation_rate || 0).toFixed(2)} hours
                provides adequate time for replacement staffing
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Day-of-Week Trends:</strong> Longer notice periods
                mid-week, with shorter notices on weekends, suggesting
                scheduling pattern impacts
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Cancellation Rate:</strong>{" "}
                {(cancellationMetrics.cancellation_rate || 0).toFixed(2)}%
                overall cancellation rate indicates reasonable workforce
                flexibility
              </li>
            </ul>
          </AnalysisSection>

          <AnalysisSection title="Punctuality Insights">
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li style={{ marginBottom: "12px" }}>
                <strong>Lead Time Performance:</strong> Average claim lead time
                of {(punctualityMetrics.avg_claim_lead_time || 0).toFixed(2)}{" "}
                hours shows proactive shift planning by workers
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Timing Distribution:</strong> Majority of workers
                maintain consistent punctuality, with clear patterns in arrival
                timing
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Early Arrivals:</strong> Significant portion of workers
                arrive early, demonstrating strong professional commitment
              </li>
            </ul>
          </AnalysisSection>

          <AnalysisSection title="Key Recommendations">
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li style={{ marginBottom: "12px" }}>
                Consider implementing tiered incentives for consistent
                reliability and punctuality performance
              </li>
              <li style={{ marginBottom: "12px" }}>
                Develop targeted support for weekend shifts to improve
                cancellation notice periods
              </li>
              <li style={{ marginBottom: "12px" }}>
                Establish early warning system for potential NCNS risk based on
                historical patterns
              </li>
              <li style={{ marginBottom: "12px" }}>
                Create recognition program for workers maintaining high
                reliability scores
              </li>
            </ul>
          </AnalysisSection>

          <AnalysisSection title="Impact Analysis">
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li style={{ marginBottom: "12px" }}>
                <strong>Operational Efficiency:</strong> Current reliability
                metrics support stable workforce planning
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Cost Implications:</strong> Pay rate correlation with
                reliability suggests optimal pricing strategies
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Quality of Service:</strong> High punctuality rates
                contribute to consistent service delivery
              </li>
            </ul>
          </AnalysisSection>
        </div>
      </div>
    </div>
  );
};

export default WorkerReliabilityTrustAnalysis;
