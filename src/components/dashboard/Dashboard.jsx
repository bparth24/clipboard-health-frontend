import React, { useState, useEffect } from "react";
import MetricCard from "./MetricCard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import LeadTimeAnalysis from "./temporal/LeadTimeAnalysis";
import DayPatternAnalysis from "./temporal/DayPatternAnalysis";
import SeasonalAnalysis from "./temporal/SeasonalAnalysis";
import WorkerLoyalty from "./worker/WorkerLoyalty";
import ShiftPreferences from "./worker/ShiftPreferences";
import PriceElasticity from "./rate/PriceElasticity";
import OptimalPricing from "./rate/OptimalPricing";
import MarginAnalysis from "./rate/MarginAnalysis";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/dashboard_data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ padding: "20px" }}>Loading dashboard data...</div>;
  }

  // Transform slot metrics for chart
  const slotChartData = Object.entries(data.slot_metrics).map(
    ([slot, metrics]) => ({
      name: slot.toUpperCase(),
      views: metrics.total_views,
      claimRate: metrics.claim_rate,
    })
  );

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "20px" }}>Marketplace Analytics Dashboard</h1>

      {/* Funnel Metrics */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <MetricCard
          title="View to Claim Rate"
          value={data.funnel_metrics.view_to_claim_rate}
          format="percentage"
        />
        <MetricCard
          title="Claim to Verify Rate"
          value={data.funnel_metrics.claim_to_verify_rate}
          format="percentage"
        />
        <MetricCard
          title="Cancellation Rate"
          value={data.funnel_metrics.cancellation_rate}
          format="percentage"
        />
      </div>

      {/* Slot Distribution Chart */}
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Slot Distribution</h2>
        <div style={{ height: "400px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={slotChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Bar
                yAxisId="left"
                dataKey="views"
                fill="#8884d8"
                name="Total Views"
              />
              <Bar
                yAxisId="right"
                dataKey="claimRate"
                fill="#82ca9d"
                name="Claim Rate %"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Rate Analysis Section - if available in your data */}
      {data.rate_analysis && (
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>Rate Impact Analysis</h2>
          <div style={{ height: "400px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={Object.entries(data.rate_analysis).map(
                  ([bucket, metrics]) => ({
                    name: bucket,
                    claimRate: metrics.claim_rate,
                    avgRate: metrics.avg_rate,
                  })
                )}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="claimRate" fill="#82ca9d" name="Claim Rate %" />
                <Bar dataKey="avgRate" fill="#8884d8" name="Average Rate" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Temporal Analysis Section */}
      <div style={{ marginTop: "40px" }}>
        <h2 style={{ marginBottom: "20px" }}>Temporal Analysis</h2>

        <LeadTimeAnalysis data={data.temporal_analysis.lead_time_analysis} />
        <DayPatternAnalysis data={data.temporal_analysis.day_patterns} />
        <SeasonalAnalysis data={data.temporal_analysis.seasonal_trends} />
      </div>

      {/* Worker Analysis Section */}
      <div style={{ marginTop: "40px" }}>
        <h2 style={{ marginBottom: "20px" }}>Worker Behavior Analysis</h2>

        <WorkerLoyalty data={data.worker_analysis.loyalty_analysis} />
        <ShiftPreferences data={data.worker_analysis.preferences} />
      </div>

      {/* Rate Analysis Section */}
      <div style={{ marginTop: "40px" }}>
        <h2 style={{ marginBottom: "20px" }}>Rate Analysis</h2>

        <PriceElasticity data={data.rate_analysis.elasticity} />
        <OptimalPricing data={data.rate_analysis.optimal_pricing} />
        <MarginAnalysis data={data.rate_analysis.margins} />
      </div>
    </div>
  );
};

export default Dashboard;
