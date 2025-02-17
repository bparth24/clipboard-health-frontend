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
import WorkerDashboard from "./worker/WorkerDashboard";
import WorkplaceDashboard from "./workplace/WorkplaceDashboard";
import TemporalDashboard from "./temporal/TemporalDashboard";
import RateDashboard from "./rate/RateDashboard";
import ShiftDashboard from "./shift/ShiftDashboard";
import MarketDashboard from "./market/MarketDashboard";
import ReliabilityDashboard from "./reliability/ReliabilityDashboard";
import GrowthDashboard from "./growth/GrowthDashboard";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/dashboard_data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        console.log("Loaded data:", jsonData); // Debug log
        setData(jsonData);
      } catch (err) {
        console.error("Error loading data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div style={{ padding: "20px" }}>Loading dashboard data...</div>;
  }

  if (error) {
    return <div style={{ padding: "20px", color: "red" }}>Error: {error}</div>;
  }

  // Transform slot metrics for chart
  // const slotChartData = Object.entries(data.slot_metrics).map(
  //   ([slot, metrics]) => ({
  //     name: slot.toUpperCase(),
  //     views: metrics.total_views,
  //     claimRate: metrics.claim_rate,
  //   })
  // );

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "20px" }}>Marketplace Analytics Dashboard</h1>

      {/* Funnel Metrics are covered in MarketPlace Performance Dashboard */}
      {/* Funnel Metrics   */}
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
      {/* <div
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
      </div> */}

      {/* Worker Dashboard Section */}
      {data.worker_analysis && <WorkerDashboard data={data.worker_analysis} />}

      {/* Workplace Dashboard Section */}
      {data.workplace_analysis && (
        <WorkplaceDashboard data={data.workplace_analysis} />
      )}

      {/* Rate Analysis Section */}
      {data.rate_analysis && <RateDashboard data={data.rate_analysis} />}

      {/* Temporal Analysis Section */}
      {data.temporal_analysis && (
        <TemporalDashboard data={data.temporal_analysis} />
      )}

      {/* Shift Characteristics Section */}
      {data.shift_analysis && <ShiftDashboard data={data.shift_analysis} />}

      {/* Market Efficiency Section */}
      {data.market_efficiency && (
        <MarketDashboard data={data.market_efficiency} />
      )}

      {/* Reliability Analysis Section */}
      {data.reliability_analysis && (
        <ReliabilityDashboard data={data.reliability_analysis} />
      )}

      {/* Growth Analysis Section */}
      {data.growth_analysis && <GrowthDashboard data={data.growth_analysis} />}
    </div>
  );
};

export default Dashboard;
