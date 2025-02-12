import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TimeToFill = ({ data }) => {
  if (!data) return null;

  const { time_stats, time_by_slot, speed_analysis } = data;

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Time to Fill Analysis</h2>

      {/* Stats Cards */}
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
            Average Time to Fill
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {time_stats.avg_time_to_fill.toFixed(1)} hours
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
            Median Time to Fill
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {time_stats.median_time_to_fill.toFixed(1)} hours
          </p>
        </div>
      </div>

      {/* Time by Slot Chart */}
      <div style={{ height: "300px", marginBottom: "20px" }}>
        <h3 style={{ marginBottom: "15px" }}>Average Time to Fill by Slot</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={time_by_slot}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="slot" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="avg_time"
              fill="#8884d8"
              name="Average Time (hours)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Speed Analysis Chart */}
      <div style={{ height: "300px" }}>
        <h3 style={{ marginBottom: "15px" }}>Fill Speed Distribution</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={speed_analysis}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#82ca9d" name="Number of Shifts" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TimeToFill;

// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const TimeToFill = ({ data }) => {
//   if (!data) return null;

//   const { time_stats, time_by_slot, speed_analysis } = data;

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
//       <h2 style={{ marginBottom: "20px" }}>Time to Fill Analysis</h2>

//       {/* Stats Cards */}
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
//             Average Time to Fill
//           </h3>
//           <p style={{ fontSize: "18px", fontWeight: "bold" }}>
//             {time_stats.avg_time_to_fill.toFixed(1)} hours
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
//             Median Time to Fill
//           </h3>
//           <p style={{ fontSize: "18px", fontWeight: "bold" }}>
//             {time_stats.median_time_to_fill.toFixed(1)} hours
//           </p>
//         </div>
//       </div>

//       {/* Time by Slot Chart */}
//       <div style={{ marginBottom: "30px" }}>
//         <h3 style={{ marginBottom: "15px" }}>Fill Time by Slot</h3>
//         <div style={{ height: "300px" }}>
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart data={time_by_slot}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="slot" />
//               <YAxis />
//               <Tooltip />
//               <Bar
//                 dataKey="mean_time"
//                 fill="#8884d8"
//                 name="Average Time (hours)"
//               />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Speed Analysis Chart */}
//       <div>
//         <h3 style={{ marginBottom: "15px" }}>Fill Speed Analysis</h3>
//         <div style={{ height: "300px" }}>
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart data={speed_analysis}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="fill_speed" />
//               <YAxis yAxisId="left" orientation="left" />
//               <YAxis yAxisId="right" orientation="right" />
//               <Tooltip />
//               <Bar
//                 yAxisId="left"
//                 dataKey="shift_count"
//                 fill="#8884d8"
//                 name="Shift Count"
//               />
//               <Bar
//                 yAxisId="right"
//                 dataKey="avg_rate"
//                 fill="#82ca9d"
//                 name="Average Rate"
//               />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TimeToFill;
