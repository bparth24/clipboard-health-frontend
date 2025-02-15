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
import { ChevronRight, BookOpen } from "lucide-react";

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

const MarketPlacePerformanceDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAnalysisPanelOpen, setIsAnalysisPanelOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/dashboard_data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
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

  if (!data || !data.marketplace_performance_analyzer) {
    return (
      <div style={{ padding: "20px" }}>
        No marketplace performance data available
      </div>
    );
  }

  const { funnel_metrics, slot_metrics } =
    data.marketplace_performance_analyzer;

  const slotChartData = Object.entries(slot_metrics || {}).map(
    ([slot, metrics]) => ({
      name: slot.toUpperCase(),
      views: metrics.total_views,
      claimRate: metrics.claim_rate,
      payRate: metrics.avg_pay_rate,
      chargeRate: metrics.avg_charge_rate,
    })
  );

  return (
    <div style={{ padding: "20px", position: "relative", overflow: "hidden" }}>
      {/* Main Dashboard Content */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          transition: "margin-right 0.3s ease",
          marginRight: isAnalysisPanelOpen ? "400px" : "0",
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
          <h1>Marketplace Performance Dashboard</h1>
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
            <BookOpen size={20} />
            View Analysis
          </button>
        </div>

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
            value={funnel_metrics.view_to_claim_rate}
            format="percentage"
          />
          <MetricCard
            title="Claim to Verify Rate"
            value={funnel_metrics.claim_to_verify_rate}
            format="percentage"
          />
          <MetricCard
            title="Cancellation Rate"
            value={funnel_metrics.cancellation_rate}
            format="percentage"
          />
          <MetricCard
            title="No Show Rate"
            value={funnel_metrics.no_show_rate}
            format="percentage"
          />
        </div>

        {/* Charts Section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          {/* Slot Distribution Chart */}
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
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

          {/* Rate Analysis Chart */}
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>Rate Analysis by Slot</h2>
            <div style={{ height: "400px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={slotChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="payRate" fill="#8884d8" name="Pay Rate" />
                  <Bar dataKey="chargeRate" fill="#82ca9d" name="Charge Rate" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Analysis Side Panel */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "400px",
          height: "100vh",
          backgroundColor: "white",
          boxShadow: "-2px 0 8px rgba(0,0,0,0.1)",
          transform: isAnalysisPanelOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
          overflowY: "auto",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
            position: "sticky",
            top: 0,
            backgroundColor: "white",
            padding: "12px 0",
            borderBottom: "1px solid #e2e8f0",
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
            <ChevronRight size={20} />
          </button>
        </div>

        <div style={{ padding: "0 4px" }}>
          <AnalysisSection title="Overview">
            Analysis of the marketplace performance metrics reveals strong
            operational reliability but highlights opportunities in initial
            conversion rates. The marketplace shows excellent fulfillment rates
            post-claim, with notably strong performance in worker reliability
            metrics.
          </AnalysisSection>

          <AnalysisSection title="Funnel Metrics Analysis">
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li style={{ marginBottom: "12px" }}>
                <strong>View-to-Claim Rate:</strong>{" "}
                {funnel_metrics.view_to_claim_rate.toFixed(1)}% - Indicates
                significant opportunity for optimization in initial conversion
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Claim-to-Verify Rate:</strong>{" "}
                {funnel_metrics.claim_to_verify_rate.toFixed(1)}% - Demonstrates
                exceptional worker reliability and effective matching
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Reliability Metrics:</strong> Low cancellation (
                {funnel_metrics.cancellation_rate.toFixed(1)}%) and no-show (
                {funnel_metrics.no_show_rate.toFixed(1)}%) rates show strong
                worker commitment
              </li>
            </ul>
          </AnalysisSection>

          <AnalysisSection title="Slot Distribution Insights">
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li style={{ marginBottom: "12px" }}>
                <strong>NOC Performance:</strong> Highest claim rate at 5.97%
                despite lower volume, suggesting strong worker preference for
                night shifts
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>PM Challenges:</strong> Highest volume but lowest
                conversion rate, indicating potential opportunity for
                optimization
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>AM Efficiency:</strong> Well-balanced metrics with
                moderate volume and competitive claim rates
              </li>
            </ul>
          </AnalysisSection>

          <AnalysisSection title="Rate Analysis">
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li style={{ marginBottom: "12px" }}>
                <strong>Pay Distribution:</strong> AM shifts lead with $24.49
                average rate, effectively incentivizing morning coverage
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Rate Strategy:</strong> Minimal variation across slots
                indicates balanced but potentially over-standardized pricing
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Optimization Need:</strong> PM shift rates may need
                adjustment to improve conversion relative to volume
              </li>
            </ul>
          </AnalysisSection>

          <AnalysisSection title="Recommendations">
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li style={{ marginBottom: "12px" }}>
                Implement strategic rate adjustments for PM shifts to better
                align with volume demands
              </li>
              <li style={{ marginBottom: "12px" }}>
                Analyze and replicate NOC shift success factors across other
                time slots
              </li>
              <li style={{ marginBottom: "12px" }}>
                Enhance shift presentation and targeting to improve initial
                conversion rates
              </li>
              <li style={{ marginBottom: "12px" }}>
                Develop dynamic pricing model based on historical fill rate
                patterns
              </li>
            </ul>
          </AnalysisSection>
        </div>
      </div>
    </div>
  );
};

export default MarketPlacePerformanceDashboard;

// import React, { useState, useEffect } from "react";
// import MetricCard from "./MetricCard";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const MarketPlacePerformanceDashboard = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/data/dashboard_data.json");
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const jsonData = await response.json();
//         console.log("Loaded data:", jsonData); // Debug log
//         setData(jsonData);
//       } catch (err) {
//         console.error("Error loading data:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div style={{ padding: "20px" }}>Loading dashboard data...</div>;
//   }

//   if (error) {
//     return <div style={{ padding: "20px", color: "red" }}>Error: {error}</div>;
//   }

//   if (!data || !data.marketplace_performance_analyzer) {
//     return (
//       <div style={{ padding: "20px" }}>
//         No marketplace performance data available
//       </div>
//     );
//   }

//   const { funnel_metrics, slot_metrics } =
//     data.marketplace_performance_analyzer;

//   // Transform slot metrics for chart
//   const slotChartData = Object.entries(slot_metrics || {}).map(
//     ([slot, metrics]) => ({
//       name: slot.toUpperCase(),
//       views: metrics.total_views,
//       claimRate: metrics.claim_rate,
//       payRate: metrics.avg_pay_rate,
//       chargeRate: metrics.avg_charge_rate,
//     })
//   );

//   return (
//     <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
//       <h1 style={{ marginBottom: "20px" }}>
//         Marketplace Performance Dashboard
//       </h1>

//       {/* Funnel Metrics */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//           gap: "20px",
//           marginBottom: "30px",
//         }}
//       >
//         <MetricCard
//           title="View to Claim Rate"
//           value={funnel_metrics.view_to_claim_rate}
//           format="percentage"
//         />
//         <MetricCard
//           title="Claim to Verify Rate"
//           value={funnel_metrics.claim_to_verify_rate}
//           format="percentage"
//         />
//         <MetricCard
//           title="Cancellation Rate"
//           value={funnel_metrics.cancellation_rate}
//           format="percentage"
//         />
//         <MetricCard
//           title="No Show Rate"
//           value={funnel_metrics.no_show_rate}
//           format="percentage"
//         />
//       </div>

//       {/* Slot Distribution Chart */}
//       <div
//         style={{
//           backgroundColor: "white",
//           padding: "20px",
//           borderRadius: "8px",
//           boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
//           marginBottom: "30px",
//         }}
//       >
//         <h2 style={{ marginBottom: "20px" }}>Slot Distribution</h2>
//         <div style={{ height: "400px" }}>
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart data={slotChartData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis yAxisId="left" orientation="left" />
//               <YAxis yAxisId="right" orientation="right" />
//               <Tooltip />
//               <Bar
//                 yAxisId="left"
//                 dataKey="views"
//                 fill="#8884d8"
//                 name="Total Views"
//               />
//               <Bar
//                 yAxisId="right"
//                 dataKey="claimRate"
//                 fill="#82ca9d"
//                 name="Claim Rate %"
//               />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Rate Analysis Chart */}
//       <div
//         style={{
//           backgroundColor: "white",
//           padding: "20px",
//           borderRadius: "8px",
//           boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
//           marginBottom: "30px",
//         }}
//       >
//         <h2 style={{ marginBottom: "20px" }}>Rate Analysis by Slot</h2>
//         <div style={{ height: "400px" }}>
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart data={slotChartData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="payRate" fill="#8884d8" name="Pay Rate" />
//               <Bar dataKey="chargeRate" fill="#82ca9d" name="Charge Rate" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MarketPlacePerformanceDashboard;
