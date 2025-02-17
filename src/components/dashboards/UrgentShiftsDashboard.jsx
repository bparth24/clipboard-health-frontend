import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
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

const UrgentShiftsDashboard = ({ data }) => {
  const [isAnalysisPanelOpen, setIsAnalysisPanelOpen] = useState(false);

  if (!data?.urgent_shifts_analysis) {
    return (
      <div style={{ padding: "20px", textAlign: "center", color: "#666" }}>
        No urgent shifts data available
      </div>
    );
  }

  const { cancellation_recovery, posting_fill_rates } =
    data.urgent_shifts_analysis;

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
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h1>Urgent Shifts Analysis</h1>
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

        {/* Posting Time Metrics Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "15px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              padding: "15px",
              backgroundColor: "#f8f9fa",
              borderRadius: "6px",
            }}
          >
            <h3 style={{ fontSize: "14px", color: "#666" }}>Total Shifts</h3>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              {posting_fill_rates.overall_metrics.total_shifts?.toLocaleString()}
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
              Urgent Fill Rate
            </h3>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              {posting_fill_rates.overall_metrics.urgent_fill_rate?.toFixed(1)}%
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
              Avg Response Time
            </h3>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              {posting_fill_rates.overall_metrics.avg_response_time?.toFixed(1)}
              h
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
              Avg Urgent Pay Rate
            </h3>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              $
              {posting_fill_rates.overall_metrics.avg_urgent_pay_rate?.toFixed(
                2
              )}
            </p>
          </div>
        </div>

        {/* Cancellation Metrics Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "15px",
            marginBottom: "30px",
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
              Total Cancellations
            </h3>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              {cancellation_recovery.overall_metrics.total_cancellations}
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
              Urgent Cancellations
            </h3>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              {cancellation_recovery.overall_metrics.urgent_cancellations}
            </p>
          </div>
          <div
            style={{
              padding: "15px",
              backgroundColor: "#f8f9fa",
              borderRadius: "6px",
            }}
          >
            <h3 style={{ fontSize: "14px", color: "#666" }}>Rebook Rate</h3>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              {cancellation_recovery.overall_metrics.rebook_rate?.toFixed(1)}%
            </p>
          </div>
          <div
            style={{
              padding: "15px",
              backgroundColor: "#f8f9fa",
              borderRadius: "6px",
            }}
          >
            <h3 style={{ fontSize: "14px", color: "#666" }}>Avg Rebook Time</h3>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              {cancellation_recovery.overall_metrics.avg_recovery_time?.toFixed(
                2
              )}
              h
            </p>
          </div>
        </div>

        {/* Charts Section */}
        <div>
          {/* First Row of Charts */}
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
            {/* Fill Rates by Pay Rate Chart */}
            <div>
              <h3
                style={{
                  textAlign: "center",
                  marginBottom: "20px",
                  color: "#333",
                  fontWeight: "600",
                }}
              >
                Fill Rates by Pay Rate
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart
                  data={posting_fill_rates.pay_rate_fill_rates}
                  margin={{ left: 20, right: 20, top: 10, bottom: 10 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    horizontal={true}
                    vertical={false}
                    stroke="#e0e0e0"
                  />
                  <XAxis
                    dataKey="pay_bracket_"
                    axisLine={true}
                    tickLine={true}
                    interval={0}
                    angle={-45}
                    textAnchor="end"
                    height={60} // Increased from 60 to 80
                    tick={{
                      fontSize: 12,
                      fill: "#666",
                      dy: 10, // Add vertical offset to labels
                    }}
                  />
                  <YAxis
                    label={{
                      value: "Fill Rate (%)",
                      angle: -90,
                      position: "insideLeft",
                      offset: -10, // Adjusted offset
                      style: { textAnchor: "middle" },
                    }}
                    axisLine={true}
                    tickLine={true}
                    width={80} // Increased from 60 to 80
                    tickFormatter={(value) => `${(value * 100).toFixed(1)}%`} // Format as percentage
                  />
                  <Tooltip
                    cursor={{ fill: "transparent" }}
                    contentStyle={{
                      backgroundColor: "rgba(255,255,255,0.9)",
                      borderRadius: "8px",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    }}
                    formatter={(value) => [
                      `${(value * 100).toFixed(1)}%`,
                      "Fill Rate",
                    ]}
                  />
                  <Bar
                    dataKey="is_claimed_mean"
                    fill="#8884d8"
                    name="Fill Rate"
                    barSize={40}
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Fill Rates by Urgency Chart */}
            <div>
              <h3
                style={{
                  textAlign: "center",
                  marginBottom: "20px",
                  color: "#333",
                  fontWeight: "600",
                }}
              >
                Fill Rates by Lead Time
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={posting_fill_rates.time_window_analysis}
                  margin={{ left: 20, right: 20, top: 10, bottom: 20 }} // Increased bottom margin
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    horizontal={true}
                    vertical={false}
                    stroke="#e0e0e0"
                  />
                  <XAxis
                    dataKey="urgency_level_"
                    axisLine={true}
                    tickLine={true}
                    interval={0}
                    angle={-45}
                    textAnchor="end"
                    height={100} // Increased from 80 to 100
                    tick={{
                      fontSize: 12,
                      fill: "#666",
                      dy: 10, // Add vertical offset to labels
                    }}
                  />
                  <YAxis
                    label={{
                      value: "Fill Rate (%)",
                      angle: -90,
                      position: "insideLeft",
                      offset: -10, // Adjusted offset
                      style: { textAnchor: "middle" },
                    }}
                    axisLine={true}
                    tickLine={true}
                    width={80} // Increased from 60 to 80
                    tickFormatter={(value) => `${(value * 100).toFixed(1)}%`} // Format as percentage
                  />
                  <Tooltip
                    cursor={{ stroke: "#82ca9d", strokeWidth: 2 }}
                    contentStyle={{
                      backgroundColor: "rgba(255,255,255,0.9)",
                      borderRadius: "8px",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    }}
                    formatter={(value) => [
                      `${(value * 100).toFixed(1)}%`,
                      "Fill Rate",
                    ]}
                  />
                  <Line
                    type="monotone"
                    dataKey="is_claimed_mean"
                    stroke="#82ca9d"
                    strokeWidth={3}
                    dot={{
                      stroke: "#82ca9d",
                      strokeWidth: 2,
                      r: 5,
                    }}
                    name="Fill Rate"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* Workplace Analysis Chart */}
          <div
            style={{
              backgroundColor: "#f9f9fa",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              marginBottom: "40px",
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
              Top Workplaces by Cancellations
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart
                data={cancellation_recovery.workplace_analysis}
                margin={{ left: 20, right: 20, top: 10, bottom: 10 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={true}
                  vertical={false}
                  stroke="#e0e0e0"
                />
                <XAxis
                  dataKey="WORKPLACE_ID"
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
                    value: "Cancellations",
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
                  dataKey="SHIFT_ID"
                  fill="#ffc658"
                  name="Cancellations"
                  barSize={40}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Analysis Panel */}
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
        {/* Analysis Panel Header */}
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

        {/* Analysis Panel Content */}
        <div
          style={{
            padding: "20px",
            overflowY: "auto",
            flex: 1,
          }}
        >
          <AnalysisSection title="Overview">
            Analysis of shift data shows distinct patterns in posting lead times
            and fill rates. With{" "}
            {posting_fill_rates.overall_metrics.total_shifts?.toLocaleString()}{" "}
            total shifts and an overall urgent fill rate of{" "}
            {posting_fill_rates.overall_metrics.urgent_fill_rate?.toFixed(1)}%,
            the data reveals key insights into market responsiveness and
            efficiency.
          </AnalysisSection>

          <AnalysisSection title="Pay Rate Impact">
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li style={{ marginBottom: "12px" }}>
                <strong>Rate Sensitivity:</strong> Fill rates demonstrate strong
                price elasticity, ranging from 2.6% for low rates to 8.3% for
                very high rates, a more than 3x improvement
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Market Pricing:</strong> Average urgent pay rate of
                $24.32 with current fill rates suggests need for more aggressive
                pricing strategy in urgent situations
              </li>
            </ul>
          </AnalysisSection>

          <AnalysisSection title="Posting Lead Time Analysis">
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li style={{ marginBottom: "12px" }}>
                <strong>Response Time:</strong> Average response time of 161.0
                hours indicates significant delay in worker response to new
                opportunities
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Time Window Impact:</strong> Fill rates show consistency
                across urgency levels, with critical shifts (&lt;4h) showing
                3.0% fill rate and slight variations for other time windows
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Volume Distribution:</strong>{" "}
                {(posting_fill_rates.time_window_analysis?.[0]?.percentage_of_total).toFixed(
                  1
                )}
                % of shifts are posted with critical urgency (less than 4 hours
                notice), suggesting significant opportunity for better advance
                planning
              </li>
            </ul>
          </AnalysisSection>

          <AnalysisSection title="Cancellation Patterns">
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li style={{ marginBottom: "12px" }}>
                <strong>Recovery Performance:</strong>{" "}
                {cancellation_recovery.overall_metrics.rebook_rate?.toFixed(1)}%
                rebook rate for{" "}
                {cancellation_recovery.overall_metrics.urgent_cancellations}{" "}
                urgent cancellations indicates recovery efficiency
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Facility Impact:</strong> Top facilities show
                concentrated cancellation patterns, suggesting targeted
                intervention opportunities
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Volume Management:</strong>{" "}
                {cancellation_recovery.overall_metrics.total_cancellations}{" "}
                total cancellations require robust recovery processes
              </li>
            </ul>
          </AnalysisSection>

          <AnalysisSection title="Recommendations">
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li style={{ marginBottom: "12px" }}>
                Implement dynamic pricing for critical time windows based on
                historical fill rate data
              </li>
              <li style={{ marginBottom: "12px" }}>
                Develop targeted notification system for high-performing workers
                in urgent situations
              </li>
              <li style={{ marginBottom: "12px" }}>
                Create specialized support program for facilities with high
                cancellation rates
              </li>
              <li style={{ marginBottom: "12px" }}>
                Establish predictive posting strategies based on lead time
                performance data
              </li>
            </ul>
          </AnalysisSection>
        </div>
      </div>
    </div>
  );
};

export default UrgentShiftsDashboard;
