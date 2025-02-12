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

const ConversionFunnel = ({ data }) => {
  if (!data) return null;

  const { overall_metrics, slot_metrics } = data;

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Conversion Funnel</h2>

      {/* Overall Metrics */}
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
            View to Claim Rate
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {overall_metrics.view_to_claim_rate.toFixed(1)}%
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
            Overall Conversion
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {overall_metrics.overall_conversion.toFixed(1)}%
          </p>
        </div>
      </div>

      {/* Slot Metrics Chart */}
      <div style={{ height: "300px" }}>
        <h3 style={{ marginBottom: "15px" }}>Conversion by Slot</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={slot_metrics}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="slot" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="conversion_rate"
              fill="#8884d8"
              name="Conversion Rate %"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ConversionFunnel;

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

// const ConversionFunnel = ({ data }) => {
//   if (!data) return null;

//   const { funnel_metrics, funnel_by_slot } = data;

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
//       <h2 style={{ marginBottom: "20px" }}>Conversion Funnel</h2>

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
//           <h3 style={{ fontSize: "14px", color: "#666" }}>
//             View to Claim Rate
//           </h3>
//           <p style={{ fontSize: "18px", fontWeight: "bold" }}>
//             {funnel_metrics.view_to_claim_rate.toFixed(1)}%
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
//             Overall Conversion
//           </h3>
//           <p style={{ fontSize: "18px", fontWeight: "bold" }}>
//             {funnel_metrics.overall_conversion_rate.toFixed(1)}%
//           </p>
//         </div>
//       </div>

//       {/* Slot Funnel Chart */}
//       <div style={{ height: "300px" }}>
//         <h3 style={{ marginBottom: "15px" }}>Conversion by Slot</h3>
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart data={funnel_by_slot}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="SLOT" />
//             <YAxis />
//             <Tooltip />
//             <Bar
//               dataKey="view_to_claim_rate"
//               fill="#8884d8"
//               name="View to Claim %"
//             />
//             <Bar
//               dataKey="claim_to_verify_rate"
//               fill="#82ca9d"
//               name="Claim to Verify %"
//             />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default ConversionFunnel;
