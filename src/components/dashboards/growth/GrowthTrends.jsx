// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const GrowthTrends = ({ data }) => {
//   if (!data) return null;
//   const { monthly_trends, overall_growth } = data;

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
//       <h2 style={{ marginBottom: "20px" }}>Growth Trends</h2>

//       {/* Overall Metrics */}
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
//           <h3 style={{ fontSize: "14px", color: "#666" }}>Total Shifts</h3>
//           <p style={{ fontSize: "18px", fontWeight: "bold" }}>
//             {overall_growth.total_shifts.toLocaleString()}
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
//             Average Monthly Growth
//           </h3>
//           <p style={{ fontSize: "18px", fontWeight: "bold" }}>
//             {overall_growth.avg_monthly_growth.toFixed(1)}%
//           </p>
//         </div>
//         <div
//           style={{
//             padding: "15px",
//             backgroundColor: "#f8f9fa",
//             borderRadius: "6px",
//           }}
//         >
//           <h3 style={{ fontSize: "14px", color: "#666" }}>Total Workers</h3>
//           <p style={{ fontSize: "18px", fontWeight: "bold" }}>
//             {overall_growth.total_workers.toLocaleString()}
//           </p>
//         </div>
//       </div>

//       {/* Monthly Trends Chart */}
//       <div style={{ height: "300px" }}>
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart data={monthly_trends}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="month" />
//             <YAxis yAxisId="left" orientation="left" />
//             <YAxis yAxisId="right" orientation="right" />
//             <Tooltip />
//             <Line
//               yAxisId="left"
//               type="monotone"
//               dataKey="total_shifts"
//               stroke="#8884d8"
//               name="Total Shifts"
//             />
//             <Line
//               yAxisId="right"
//               type="monotone"
//               dataKey="shift_growth"
//               stroke="#82ca9d"
//               name="Growth Rate %"
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default GrowthTrends;
