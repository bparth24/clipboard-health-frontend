import React, { useState } from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronLeft, BookOpen } from "lucide-react";

// Internal Components
const GrowthTrendsSection = ({ data }) => {
  if (!data) return null;
  const { monthly_trends, overall_growth } = data;

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        marginBottom: "30px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Growth Trends</h2>

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
          <h3 style={{ fontSize: "14px", color: "#666" }}>Total Shifts</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {overall_growth.total_shifts.toLocaleString()}
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
            Average Monthly Growth
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {overall_growth.avg_monthly_growth.toFixed(1)}%
          </p>
        </div>
        <div
          style={{
            padding: "15px",
            backgroundColor: "#f8f9fa",
            borderRadius: "6px",
          }}
        >
          <h3 style={{ fontSize: "14px", color: "#666" }}>Total Workers</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {overall_growth.total_workers.toLocaleString()}
          </p>
        </div>
      </div>

      <div style={{ height: "400px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={monthly_trends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" orientation="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="total_shifts"
              stroke="#8884d8"
              name="Total Shifts"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="shift_growth"
              stroke="#82ca9d"
              name="Growth Rate %"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const SupplyDemandSection = ({ data }) => {
  if (!data) return null;
  const { day_of_week_balance, overall_metrics } = data;

  // Day of week mapping for sorting
  const dayOrder = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 7,
  };

  // Sort the data by day of week
  const sortedData = [...day_of_week_balance].sort((a, b) => {
    return dayOrder[a.day_of_week] - dayOrder[b.day_of_week];
  });

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        marginBottom: "30px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Supply-Demand Balance</h2>

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
            Average Supply-Demand Ratio
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {(overall_metrics.avg_supply_demand_ratio * 100).toFixed(1)}%
          </p>
        </div>
        <div
          style={{
            padding: "15px",
            backgroundColor: "#f8f9fa",
            borderRadius: "6px",
          }}
        >
          <h3 style={{ fontSize: "14px", color: "#666" }}>Supply Volatility</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {(overall_metrics.supply_volatility * 100).toFixed(1)}%
          </p>
        </div>
      </div>

      <div style={{ height: "400px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={sortedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day_of_week" tick={{ fontSize: 12 }} />
            <YAxis
              yAxisId="left"
              label={{
                value: "Total Shifts",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              label={{ value: "Fill Rate", angle: 90, position: "insideRight" }}
            />
            <Tooltip />
            <Bar
              yAxisId="left"
              dataKey="total_shifts"
              fill="#8884d8"
              name="Total Shifts"
            />
            <Bar
              yAxisId="right"
              dataKey="supply_demand_ratio"
              fill="#82ca9d"
              name="Fill Rate"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const PeakPerformanceSection = ({ data }) => {
  if (!data) return null;
  const { hourly_performance, peak_metrics } = data;

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        marginBottom: "30px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Peak Performance Analysis</h2>

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
            Peak Hours Fill Rate
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {peak_metrics.peak_fill_rate.toFixed(1)}%
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
            Off-Peak Fill Rate
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {peak_metrics.off_peak_fill_rate.toFixed(1)}%
          </p>
        </div>
      </div>

      <div style={{ height: "400px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={hourly_performance}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour_of_day" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="fill_rate"
              stroke="#8884d8"
              fill="#8884d8"
              name="Fill Rate %"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

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

// Main Dashboard Component
const GrowthDashboard = ({ data }) => {
  const [isAnalysisPanelOpen, setIsAnalysisPanelOpen] = useState(false);

  if (!data) return null;

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
          <h1>Growth Analysis Dashboard</h1>
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

        {/* Dashboard Components */}
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <GrowthTrendsSection data={data.growth_trends} />
          <SupplyDemandSection data={data.supply_demand} />
          <PeakPerformanceSection data={data.peak_performance} />
        </div>
      </div>

      {/* Analysis Side Panel */}
      <div
        style={{
          position: "fixed",
          top: "100px",
          left: 0,
          width: "600px",
          height: "calc(100vh - 80px)",
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
          <div style={{ padding: "0 4px" }}>
            <AnalysisSection title="Overview">
              Comprehensive analysis of growth metrics reveals robust
              marketplace expansion, with significant improvements in both
              supply-side and demand-side indicators. Key highlights include
              accelerating monthly growth rates, strengthening supply-demand
              balance, and optimizing peak hour performance.
            </AnalysisSection>

            <AnalysisSection title="Growth Trends Analysis">
              <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
                <li style={{ marginBottom: "12px" }}>
                  <strong>Volume Growth:</strong> Total shift volume of{" "}
                  {data.growth_trends?.overall_growth.total_shifts.toLocaleString() +
                    " "}
                  demonstrates strong market penetration, indicating successful
                  scaling of operations
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <strong>Growth Velocity:</strong> Sustained{" "}
                  {data.growth_trends?.overall_growth.avg_monthly_growth.toFixed(
                    1
                  )}
                  % average monthly growth shows robust market expansion and
                  effective growth strategies
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <strong>Worker Ecosystem:</strong> Expansion to{" "}
                  {data.growth_trends?.overall_growth.total_workers.toLocaleString() +
                    " "}
                  active workers validates platform value proposition and market
                  demand
                </li>
              </ul>
            </AnalysisSection>

            <AnalysisSection title="Supply-Demand Balance">
              <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
                <li style={{ marginBottom: "12px" }}>
                  <strong>Market Equilibrium:</strong>{" "}
                  {(
                    data.supply_demand?.overall_metrics
                      .avg_supply_demand_ratio * 100
                  ).toFixed(1)}
                  % supply-demand ratio indicates a well-balanced marketplace
                  with room for optimization
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <strong>Supply Stability:</strong>{" "}
                  {(
                    data.supply_demand?.overall_metrics.supply_volatility * 100
                  ).toFixed(1)}
                  % volatility suggests opportunity for improved supply
                  consistency through targeted interventions
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <strong>Weekly Distribution:</strong> Strong mid-week
                  performance with identified opportunities for weekend supply
                  enhancement
                </li>
              </ul>
            </AnalysisSection>

            <AnalysisSection title="Peak Performance Insights">
              <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
                <li style={{ marginBottom: "12px" }}>
                  <strong>Peak Efficiency:</strong>{" "}
                  {data.peak_performance?.peak_metrics.peak_fill_rate.toFixed(
                    1
                  )}
                  % fill rate during peak hours demonstrates strong operational
                  capacity
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <strong>Off-Peak Management:</strong>{" "}
                  {data.peak_performance?.peak_metrics.off_peak_fill_rate.toFixed(
                    1
                  )}
                  % off-peak fill rate shows effective resource utilization
                  across all hours
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <strong>Time Distribution:</strong> Hourly performance
                  patterns reveal optimal coverage during critical care hours
                  with opportunities in transition periods
                </li>
              </ul>
            </AnalysisSection>

            <AnalysisSection title="Strategic Recommendations">
              <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
                <li style={{ marginBottom: "12px" }}>
                  Implement dynamic pricing strategies to optimize peak vs.
                  off-peak utilization
                </li>
                <li style={{ marginBottom: "12px" }}>
                  Develop targeted worker acquisition programs focusing on
                  high-demand time slots
                </li>
                <li style={{ marginBottom: "12px" }}>
                  Launch retention initiatives to maintain growth momentum and
                  worker engagement
                </li>
                <li style={{ marginBottom: "12px" }}>
                  Enhance predictive analytics for better supply-demand matching
                  and resource allocation
                </li>
              </ul>
            </AnalysisSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthDashboard;
