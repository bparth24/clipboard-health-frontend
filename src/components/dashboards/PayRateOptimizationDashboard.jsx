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

const PayRateOptimizationDashboard = ({ data }) => {
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
  const {
    impact_analysis = {},
    retention_analysis = {},
    dynamic_pricing = {},
  } = data.pay_rate_analysis;

  // Get metrics from each analysis section
  const payBandMetrics = impact_analysis.pay_band_metrics || [];
  const correlations = impact_analysis.correlations || {};
  const hourlyMetrics = dynamic_pricing.hourly_metrics || [];
  const overallStats = dynamic_pricing.overall_stats || {};

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
      <h2 style={{ marginBottom: "20px" }}>Pay Rate Optimization Analysis</h2>

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
          <h3 style={{ fontSize: "14px", color: "#666" }}>Average Pay Rate</h3>
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
          <h3 style={{ fontSize: "14px", color: "#666" }}>Fill Rate</h3>
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
            <ResponsiveContainer width="100%" height={250}>
              <BarChart
                data={payBandMetrics}
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
                  tick={{ fontSize: 12, fill: "#666" }}
                />
                <YAxis
                  label={{
                    value: "Completion Rate (%)",
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
            <ResponsiveContainer width="100%" height={250}>
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
                  tick={{ fontSize: 12, fill: "#666" }}
                />
                <YAxis
                  yAxisId="left"
                  label={{
                    value: "Fill Rate (%)",
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
                    value: "Pay Rate ($)",
                    angle: 90,
                    position: "insideRight",
                    offset: 0,
                    style: { textAnchor: "middle" },
                  }}
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

        {/* Retention Analysis Section */}
        <div
          style={{
            backgroundColor: "#f9f9f9",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            marginTop: "30px",
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
            Worker Retention Analysis
          </h3>
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
                backgroundColor: "white",
                borderRadius: "6px",
                border: "1px solid #e9ecef",
              }}
            >
              <h4
                style={{ fontSize: "14px", color: "#666", marginBottom: "8px" }}
              >
                Average Tenure
              </h4>
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                {(retention_analysis.worker_stats?.avg_tenure || 0).toFixed(1)}{" "}
                days
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
                Total Workers
              </h4>
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                {retention_analysis.worker_stats?.total_workers?.toLocaleString() ||
                  0}
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
                Repeat Workers
              </h4>
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                {retention_analysis.worker_stats?.repeat_workers?.toLocaleString() ||
                  0}
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
                Avg Shifts per Worker
              </h4>
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                {(
                  retention_analysis.worker_stats?.avg_shifts_per_worker || 0
                ).toFixed(1)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayRateOptimizationDashboard;

// import React from "react";
// import {
//   BarChart,
//   Bar,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const PayRateOptimizationDashboard = ({ data }) => {
//   // Early return if data is not in the expected format
//   if (!data || !data.pay_rate_optimization) {
//     return (
//       <div
//         style={{
//           padding: "20px",
//           textAlign: "center",
//           color: "#666",
//         }}
//       >
//         No pay rate optimization data available
//       </div>
//     );
//   }

//   // Destructure the data with fallback to empty objects
//   const {
//     impact_analysis = {},
//     retention_analysis = {},
//     dynamic_pricing = {},
//   } = data.pay_rate_optimization;

//   // Ensure we have default values for metrics
//   const correlations = impact_analysis.correlations || {};
//   const workerStats = retention_analysis.worker_stats || {};
//   const overallStats = dynamic_pricing.overall_stats || {};

//   return (
//     <div
//       style={{
//         backgroundColor: "white",
//         padding: "20px",
//         borderRadius: "8px",
//         boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
//         marginBottom: "20px",
//       }}
//     >
//       <h2 style={{ marginBottom: "20px" }}>Pay Rate Optimization Analysis</h2>

//       {/* Correlation Metrics Section */}
//       <div
//         style={{
//           backgroundColor: "#f8f9fa",
//           padding: "15px",
//           borderRadius: "8px",
//           marginBottom: "20px",
//         }}
//       >
//         <h3 style={{ fontSize: "16px", color: "#333", marginBottom: "15px" }}>
//           Pay Rate Correlations
//         </h3>
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//             gap: "15px",
//           }}
//         >
//           <div
//             style={{
//               padding: "15px",
//               backgroundColor: "white",
//               borderRadius: "6px",
//               border: "1px solid #e9ecef",
//             }}
//           >
//             <h4
//               style={{ fontSize: "14px", color: "#666", marginBottom: "8px" }}
//             >
//               Completion Rate Correlation
//             </h4>
//             <p style={{ fontSize: "18px", fontWeight: "bold" }}>
//               {((correlations.pay_vs_completion || 0) * 100).toFixed(1)}%
//             </p>
//           </div>
//           <div
//             style={{
//               padding: "15px",
//               backgroundColor: "white",
//               borderRadius: "6px",
//               border: "1px solid #e9ecef",
//             }}
//           >
//             <h4
//               style={{ fontSize: "14px", color: "#666", marginBottom: "8px" }}
//             >
//               Cancellation Rate Correlation
//             </h4>
//             <p style={{ fontSize: "18px", fontWeight: "bold" }}>
//               {((correlations.pay_vs_cancellation || 0) * 100).toFixed(1)}%
//             </p>
//           </div>
//           <div
//             style={{
//               padding: "15px",
//               backgroundColor: "white",
//               borderRadius: "6px",
//               border: "1px solid #e9ecef",
//             }}
//           >
//             <h4
//               style={{ fontSize: "14px", color: "#666", marginBottom: "8px" }}
//             >
//               NCNS Rate Correlation
//             </h4>
//             <p style={{ fontSize: "18px", fontWeight: "bold" }}>
//               {((correlations.pay_vs_ncns || 0) * 100).toFixed(1)}%
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Overall Metrics Section */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//           gap: "15px",
//           marginBottom: "20px",
//         }}
//       >
//         <div
//           style={{
//             padding: "15px",
//             backgroundColor: "#f8f9fa",
//             borderRadius: "6px",
//           }}
//         >
//           <h3 style={{ fontSize: "14px", color: "#666" }}>Average Pay Rate</h3>
//           <p style={{ fontSize: "18px", fontWeight: "bold" }}>
//             ${(overallStats.avg_pay_rate || 0).toFixed(2)}
//           </p>
//         </div>

//         <div
//           style={{
//             padding: "15px",
//             backgroundColor: "#f8f9fa",
//             borderRadius: "6px",
//           }}
//         >
//           <h3 style={{ fontSize: "14px", color: "#666" }}>
//             Average Worker Tenure
//           </h3>
//           <p style={{ fontSize: "18px", fontWeight: "bold" }}>
//             {(workerStats.avg_tenure || 0).toFixed(1)} days
//           </p>
//         </div>

//         <div
//           style={{
//             padding: "15px",
//             backgroundColor: "#f8f9fa",
//             borderRadius: "6px",
//           }}
//         >
//           <h3 style={{ fontSize: "14px", color: "#666" }}>Fill Rate</h3>
//           <p style={{ fontSize: "18px", fontWeight: "bold" }}>
//             {(overallStats.avg_fill_rate || 0).toFixed(1)}%
//           </p>
//         </div>
//       </div>

//       {/* Visualization Sections */}
//       <div>
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gap: "30px",
//             marginBottom: "40px",
//             backgroundColor: "#f9f9f9",
//             padding: "20px",
//             borderRadius: "12px",
//             boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//           }}
//         >
//           {/* Pay Rate Impact Chart */}
//           <div>
//             <h3
//               style={{
//                 textAlign: "center",
//                 marginBottom: "20px",
//                 color: "#333",
//                 fontWeight: "600",
//               }}
//             >
//               Completion Rate by Pay Band
//             </h3>
//             <ResponsiveContainer width="100%" height={250}>
//               <BarChart
//                 data={impact_analysis.pay_band_metrics || []}
//                 margin={{ left: 20, right: 20, top: 10, bottom: 10 }}
//               >
//                 <CartesianGrid
//                   strokeDasharray="3 3"
//                   horizontal={true}
//                   vertical={false}
//                   stroke="#e0e0e0"
//                 />
//                 <XAxis
//                   dataKey="pay_band"
//                   axisLine={true}
//                   tickLine={true}
//                   interval={0}
//                   angle={-45}
//                   textAnchor="end"
//                   height={60}
//                   tick={{ fontSize: 12, fill: "#666" }}
//                 />
//                 <YAxis
//                   label={{
//                     value: "Completion Rate (%)",
//                     angle: -90,
//                     position: "insideLeft",
//                     offset: 0,
//                     style: { textAnchor: "middle" },
//                   }}
//                   axisLine={true}
//                   tickLine={true}
//                   width={60}
//                 />
//                 <Tooltip
//                   cursor={{ fill: "transparent" }}
//                   contentStyle={{
//                     backgroundColor: "rgba(255,255,255,0.9)",
//                     borderRadius: "8px",
//                     boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//                   }}
//                 />
//                 <Bar
//                   dataKey="is_completed_mean"
//                   fill="#8884d8"
//                   name="Completion Rate"
//                   barSize={40}
//                   radius={[4, 4, 0, 0]}
//                 />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Worker Retention Chart */}
//           <div>
//             <h3
//               style={{
//                 textAlign: "center",
//                 marginBottom: "20px",
//                 color: "#333",
//                 fontWeight: "600",
//               }}
//             >
//               Worker Retention by Pay Band
//             </h3>
//             <ResponsiveContainer width="100%" height={250}>
//               <BarChart
//                 data={retention_analysis.retention_metrics || []}
//                 margin={{ left: 20, right: 20, top: 10, bottom: 10 }}
//               >
//                 <CartesianGrid
//                   strokeDasharray="3 3"
//                   horizontal={true}
//                   vertical={false}
//                   stroke="#e0e0e0"
//                 />
//                 <XAxis
//                   dataKey="pay_band"
//                   axisLine={true}
//                   tickLine={true}
//                   interval={0}
//                   angle={-45}
//                   textAnchor="end"
//                   height={60}
//                   tick={{ fontSize: 12, fill: "#666" }}
//                 />
//                 <YAxis
//                   label={{
//                     value: "Number of Workers",
//                     angle: -90,
//                     position: "insideLeft",
//                     offset: 0,
//                     style: { textAnchor: "middle" },
//                   }}
//                   axisLine={true}
//                   tickLine={true}
//                   width={60}
//                 />
//                 <Tooltip
//                   cursor={{ fill: "transparent" }}
//                   contentStyle={{
//                     backgroundColor: "rgba(255,255,255,0.9)",
//                     borderRadius: "8px",
//                     boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//                   }}
//                 />
//                 <Bar
//                   dataKey="WORKER_ID_nunique"
//                   fill="#82ca9d"
//                   name="Worker Count"
//                   barSize={40}
//                   radius={[4, 4, 0, 0]}
//                 />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Dynamic Pricing Analysis */}
//         <div
//           style={{
//             backgroundColor: "#f9f9f9",
//             padding: "20px",
//             borderRadius: "12px",
//             boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//           }}
//         >
//           <h3
//             style={{
//               textAlign: "center",
//               marginBottom: "20px",
//               color: "#333",
//               fontWeight: "600",
//             }}
//           >
//             Hourly Fill Rates and Pay Rates
//           </h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart
//               data={dynamic_pricing.hourly_metrics || []}
//               margin={{ left: 20, right: 20, top: 10, bottom: 10 }}
//             >
//               <CartesianGrid
//                 strokeDasharray="3 3"
//                 horizontal={true}
//                 vertical={false}
//                 stroke="#e0e0e0"
//               />
//               <XAxis
//                 dataKey="hour"
//                 axisLine={true}
//                 tickLine={true}
//                 interval={0}
//                 tick={{ fontSize: 12, fill: "#666" }}
//               />
//               <YAxis
//                 yAxisId="left"
//                 label={{
//                   value: "Fill Rate (%)",
//                   angle: -90,
//                   position: "insideLeft",
//                   offset: 0,
//                   style: { textAnchor: "middle" },
//                 }}
//                 axisLine={true}
//                 tickLine={true}
//                 width={60}
//               />
//               <YAxis
//                 yAxisId="right"
//                 orientation="right"
//                 label={{
//                   value: "Pay Rate ($)",
//                   angle: 90,
//                   position: "insideRight",
//                   offset: 0,
//                   style: { textAnchor: "middle" },
//                 }}
//               />
//               <Tooltip
//                 cursor={{ stroke: "#82ca9d", strokeWidth: 2 }}
//                 contentStyle={{
//                   backgroundColor: "rgba(255,255,255,0.9)",
//                   borderRadius: "8px",
//                   boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//                 }}
//               />
//               <Line
//                 yAxisId="left"
//                 type="monotone"
//                 dataKey="is_claimed_mean"
//                 stroke="#8884d8"
//                 name="Fill Rate"
//                 strokeWidth={3}
//                 dot={{
//                   stroke: "#8884d8",
//                   strokeWidth: 2,
//                   r: 5,
//                 }}
//               />
//               <Line
//                 yAxisId="right"
//                 type="monotone"
//                 dataKey="PAY_RATE_mean"
//                 stroke="#82ca9d"
//                 name="Pay Rate"
//                 strokeWidth={3}
//                 dot={{
//                   stroke: "#82ca9d",
//                   strokeWidth: 2,
//                   r: 5,
//                 }}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PayRateOptimizationDashboard;
