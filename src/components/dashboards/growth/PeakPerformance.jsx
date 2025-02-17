// import React from "react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const PeakPerformance = ({ data }) => {
//   if (!data) return null;
//   const { hourly_performance, peak_metrics } = data;

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
//       <h2 style={{ marginBottom: "20px" }}>Peak Performance Analysis</h2>

//       {/* Peak Metrics */}
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
//           <h3 style={{ fontSize: "14px", color: "#666" }}>
//             Peak Hours Fill Rate
//           </h3>
//           <p style={{ fontSize: "18px", fontWeight: "bold" }}>
//             {peak_metrics.peak_fill_rate.toFixed(1)}%
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
//             Off-Peak Fill Rate
//           </h3>
//           <p style={{ fontSize: "18px", fontWeight: "bold" }}>
//             {peak_metrics.off_peak_fill_rate.toFixed(1)}%
//           </p>
//         </div>
//       </div>

//       {/* Hourly Performance Chart */}
//       <div style={{ height: "300px" }}>
//         <ResponsiveContainer width="100%" height="100%">
//           <AreaChart data={hourly_performance}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="hour_of_day" />
//             <YAxis />
//             <Tooltip />
//             <Area
//               type="monotone"
//               dataKey="fill_rate"
//               stroke="#8884d8"
//               fill="#8884d8"
//               name="Fill Rate %"
//             />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default PeakPerformance;
