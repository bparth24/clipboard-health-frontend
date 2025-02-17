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

const PayRateOptimizationDashboard = ({ data }) => {
  const [isAnalysisPanelOpen, setIsAnalysisPanelOpen] = useState(false);

  // Early return if data is not in the expected format
  if (!data || !data.pay_rate_analysis) {
    return (
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          color: "#666",
        }}
      >
        No pay rate optimization data available
      </div>
    );
  }

  // Destructure the data with fallback to empty objects
  const { impact_analysis = {}, dynamic_pricing = {} } = data.pay_rate_analysis;

  // Get metrics from each analysis section
  const payBandMetrics = impact_analysis.pay_band_metrics || [];
  const correlations = impact_analysis.correlations || {};
  const hourlyMetrics = dynamic_pricing.hourly_metrics || [];
  const overallStats = dynamic_pricing.overall_stats || {};

  // Add this before rendering the chart
  const payBandOrder = ["Very Low", "Low", "Medium", "High", "Very High"];
  const sortedPayBandMetrics = [...payBandMetrics].sort(
    (a, b) =>
      payBandOrder.indexOf(a.pay_band_) - payBandOrder.indexOf(b.pay_band_)
  );

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
          <h1>Pay Rate Optimization Analysis</h1>
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
            <h3 style={{ fontSize: "14px", color: "#666" }}>
              Average Pay Rate
            </h3>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              ${(overallStats.avg_pay_rate || 0).toFixed(2)}
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
              Average Fill Rate
            </h3>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              {(overallStats.avg_fill_rate || 0).toFixed(1)}%
            </p>
          </div>

          <div
            style={{
              padding: "15px",
              backgroundColor: "#f8f9fa",
              borderRadius: "6px",
            }}
          >
            <h3 style={{ fontSize: "14px", color: "#666" }}>Total Shifts</h3>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              {overallStats.total_shifts?.toLocaleString() || 0}
            </p>
          </div>
        </div>

        {/* Correlation Metrics Section */}
        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "15px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <h3 style={{ fontSize: "16px", color: "#333", marginBottom: "15px" }}>
            Pay Rate Impact
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "15px",
            }}
          >
            <div
              style={{
                padding: "15px",
                backgroundColor: "white",
                borderRadius: "6px",
                border: "1px solid #e9ecef",
              }}
            >
              <h4
                style={{ fontSize: "14px", color: "#666", marginBottom: "8px" }}
              >
                Completion Correlation
              </h4>
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                {((correlations.pay_vs_completion || 0) * 100).toFixed(1)}%
              </p>
            </div>
            <div
              style={{
                padding: "15px",
                backgroundColor: "white",
                borderRadius: "6px",
                border: "1px solid #e9ecef",
              }}
            >
              <h4
                style={{ fontSize: "14px", color: "#666", marginBottom: "8px" }}
              >
                Cancellation Correlation
              </h4>
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                {((correlations.pay_vs_cancellation || 0) * 100).toFixed(1)}%
              </p>
            </div>
            <div
              style={{
                padding: "15px",
                backgroundColor: "white",
                borderRadius: "6px",
                border: "1px solid #e9ecef",
              }}
            >
              <h4
                style={{ fontSize: "14px", color: "#666", marginBottom: "8px" }}
              >
                NCNS Correlation
              </h4>
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                {((correlations.pay_vs_ncns || 0) * 100).toFixed(1)}%
              </p>
            </div>
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
            {/* Pay Band Analysis Chart */}
            <div>
              <h3
                style={{
                  textAlign: "center",
                  marginBottom: "20px",
                  color: "#333",
                  fontWeight: "600",
                }}
              >
                Completion Rate by Pay Band
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={sortedPayBandMetrics}
                  margin={{ left: 20, right: 20, top: 10, bottom: 10 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    horizontal={true}
                    vertical={false}
                    stroke="#e0e0e0"
                  />
                  <XAxis
                    dataKey="pay_band_"
                    axisLine={true}
                    tickLine={true}
                    interval={0}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                    tick={{
                      fontSize: 12,
                      fill: "#666",
                      dy: 8,
                    }}
                  />
                  <YAxis
                    label={{
                      value: "Completion Rate (%)",
                      angle: -90,
                      position: "insideLeft",
                      offset: -10,
                      style: { textAnchor: "middle" },
                    }}
                    axisLine={true}
                    tickLine={true}
                    width={80}
                    tickFormatter={(value) => `${(value * 100).toFixed(1)}%`}
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
                      "Completion Rate",
                    ]}
                  />
                  <Bar
                    dataKey="is_completed_mean"
                    fill="#8884d8"
                    name="Completion Rate"
                    barSize={40}
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Hourly Analysis Chart */}
            <div>
              <h3
                style={{
                  textAlign: "center",
                  marginBottom: "20px",
                  color: "#333",
                  fontWeight: "600",
                }}
              >
                Hourly Fill Rates and Pay Rates
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={hourlyMetrics}
                  margin={{ left: 20, right: 20, top: 10, bottom: 10 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    horizontal={true}
                    vertical={false}
                    stroke="#e0e0e0"
                  />
                  <XAxis
                    dataKey="hour_"
                    axisLine={true}
                    tickLine={true}
                    interval={0}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                    tick={{
                      fontSize: 12,
                      fill: "#666",
                      dy: 8,
                    }}
                  />

                  <YAxis
                    yAxisId="left"
                    label={{
                      value: "Fill Rate (%)",
                      angle: -90,
                      position: "insideLeft",
                      offset: -10,
                      style: { textAnchor: "middle" },
                    }}
                    axisLine={true}
                    tickLine={true}
                    width={80}
                    tickFormatter={(value) => `${(value * 100).toFixed(1)}%`}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    label={{
                      value: "Pay Rate ($)",
                      angle: 90,
                      position: "insideRight",
                      offset: 10, // Increased offset
                      style: { textAnchor: "middle" },
                    }}
                    width={90} // Increased width
                    tickFormatter={(value) => `$${value.toFixed(2)}`}
                  />
                  <Tooltip
                    cursor={{ stroke: "#82ca9d", strokeWidth: 2 }}
                    contentStyle={{
                      backgroundColor: "rgba(255,255,255,0.9)",
                      borderRadius: "8px",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    }}
                    formatter={(value, name) => [
                      name === "Fill Rate"
                        ? `${(value * 100).toFixed(1)}%`
                        : `$${value.toFixed(2)}`,
                      name,
                    ]}
                  />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="is_claimed_mean"
                    stroke="#8884d8"
                    name="Fill Rate"
                    strokeWidth={3}
                    dot={{
                      stroke: "#8884d8",
                      strokeWidth: 2,
                      r: 5,
                    }}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="PAY_RATE_mean"
                    stroke="#82ca9d"
                    name="Pay Rate"
                    strokeWidth={3}
                    dot={{
                      stroke: "#82ca9d",
                      strokeWidth: 2,
                      r: 5,
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
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
            Analysis of pay rate optimization data reveals significant
            correlations between pay rates and key performance metrics. With $
            {(overallStats.avg_pay_rate || 0).toFixed(2)} average pay rate and{" "}
            {(overallStats.avg_fill_rate || 0).toFixed(1)}% fill rate across{" "}
            {overallStats.total_shifts?.toLocaleString() + " "}
            total shifts, the data shows clear patterns in pricing
            effectiveness.
          </AnalysisSection>

          <AnalysisSection title="Pay Rate Correlations">
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li style={{ marginBottom: "12px" }}>
                <strong>Completion Impact:</strong>{" "}
                {((correlations.pay_vs_completion || 0) * 100).toFixed(1)}%
                correlation shows moderate positive relationship between higher
                pay rates and completion rates
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Cancellation Patterns:</strong>{" "}
                {((correlations.pay_vs_cancellation || 0) * 100).toFixed(1)}%
                correlation with cancellations indicates minimal impact of pay
                rates on cancellation behavior
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>NCNS Analysis:</strong>{" "}
                {((correlations.pay_vs_ncns || 0) * 100).toFixed(2)}%
                correlation reflects extremely low NCNS rates across all pay
                bands (0.007% to 0.019%), with Medium pay band showing slightly
                higher rates than others
              </li>
            </ul>
          </AnalysisSection>

          <AnalysisSection title="Reliability Metrics">
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li style={{ marginBottom: "12px" }}>
                <strong>NCNS Distribution:</strong> Overall very low NCNS rates
                across pay bands, with Medium tier at 0.019%, followed by High
                (0.013%), Very High (0.011%), and lowest rates in Very Low/Low
                tiers (0.007%)
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Impact Assessment:</strong> No clear linear relationship
                between pay rates and NCNS behavior, suggesting other factors
                may be more influential in preventing no-shows
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Risk Factors:</strong> Given uniformly low NCNS rates,
                focus should be on maintaining current reliability standards
                rather than pay rate adjustments for NCNS prevention
              </li>
            </ul>
          </AnalysisSection>

          <AnalysisSection title="Completion Rate Analysis">
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li style={{ marginBottom: "12px" }}>
                <strong>Pay Band Performance:</strong> Completion rates show
                consistent improvement across higher pay bands, demonstrating
                clear price sensitivity
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Rate Thresholds:</strong> Significant performance
                improvements observed at specific pay rate thresholds,
                suggesting optimal pricing points
              </li>
            </ul>
          </AnalysisSection>

          <AnalysisSection title="Hourly Patterns">
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li style={{ marginBottom: "12px" }}>
                <strong>Time-Based Variations:</strong> Fill rates fluctuate
                throughout the day, with distinct patterns during peak and
                off-peak hours
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Rate Optimization:</strong> Current pay rate
                distribution shows opportunities for time-based rate adjustments
                to improve fill rates
              </li>
            </ul>
          </AnalysisSection>

          <AnalysisSection title="Recommendations">
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li style={{ marginBottom: "12px" }}>
                Implement dynamic pricing model based on hourly fill rate
                patterns
              </li>
              <li style={{ marginBottom: "12px" }}>
                Establish minimum pay thresholds for different time slots based
                on completion rate data
              </li>
              <li style={{ marginBottom: "12px" }}>
                Develop targeted rate increases for historically
                difficult-to-fill periods
              </li>
              <li style={{ marginBottom: "12px" }}>
                Create premium rate tiers for shifts requiring higher
                reliability
              </li>
            </ul>
          </AnalysisSection>
        </div>
      </div>
    </div>
  );
};

export default PayRateOptimizationDashboard;
