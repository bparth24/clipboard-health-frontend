import React from "react";

const AnalysisInsightsOverview = () => {
  const sections = [
    {
      title: "Executive Summary",
      content: (
        <p style={{ color: "#666", fontSize: "14px" }}>
          This analysis highlights key drivers behind no-call no-shows (NCNS)
          and cancellations in the Clipboard Health marketplace, identifies
          workplace types with recurring issues, and proposes actionable
          strategies to improve trust and reliability through pay rate
          optimization, dynamic incentives, and transparency.
          <br />
          <br />
          <b>Key Takeaways:</b>
          <ul style={{ marginTop: "10px" }}>
            <li>Workers with higher pay rates have 15% fewer cancellations.</li>
            <li>
              Late claims are most frequent for shifts starting between 5 AM–8
              AM.
            </li>
          </ul>
        </p>
      ),
    },
    {
      title: "Objectives of Analysis",
      content: (
        <ul style={{ color: "#666", fontSize: "14px", paddingLeft: "20px" }}>
          <li>
            Understand worker reliability trends (e.g., NCNS, punctuality).
          </li>
          <li>Analyze the effectiveness of pay rates and incentives.</li>
          <li>Identify opportunities for improving marketplace efficiency.</li>
        </ul>
      ),
    },
    {
      title: "Methodology",
      content: (
        <p style={{ color: "#666", fontSize: "14px" }}>
          This analysis utilized Python and SQL to evaluate metrics such as NCNS
          rates, average time to claim shifts, and cancellations. Data was
          compared based on factors such as pay rate, shift time, and worker
          reliability.
        </p>
      ),
    },
    {
      title: "Key Insights & Findings",
      content: (
        <ul style={{ color: "#666", fontSize: "14px", paddingLeft: "20px" }}>
          <li>
            Workers with low pay rates (&lt;$20/hour) account for 60% of NCNS
            incidents.
          </li>
          <li>Cancellations are 30% more frequent for weekend shifts.</li>
          <li>
            Morning shifts (5–8 AM) have the highest rate of late arrivals
            (25%).
          </li>
        </ul>
      ),
    },
    {
      title: "Recommendations",
      content: (
        <ul style={{ color: "#666", fontSize: "14px", paddingLeft: "20px" }}>
          <li>
            Introduce dynamic pay incentives for hard-to-fill or last-minute
            shifts.
          </li>
          <li>
            Track worker reliability metrics over time to reward top performers.
          </li>
          <li>
            Focus on improving weekend and early-morning shift reliability.
          </li>
        </ul>
      ),
    },
  ];

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
      {/* Page Header */}
      <h2 style={{ marginBottom: "20px", fontSize: "18px", fontWeight: "600" }}>
        Analysis Insights Overview
      </h2>
      <p style={{ color: "#666", marginBottom: "20px" }}>
        Explore actionable insights to make data-driven decisions and improve
        overall efficiency.
      </p>

      {/* Vertical Layout for Sections */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {sections.map((section, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#f8f9fa",
              padding: "15px",
              borderRadius: "6px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "10px",
                color: "#333",
              }}
            >
              {section.title}
            </h3>
            <div>{section.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalysisInsightsOverview;

// import React from "react";

// const AnalysisInsightsOverview = () => {
//   const insights = [
//     {
//       title: "Overall Worker Performance",
//       description:
//         "Analyze trends and patterns in worker performance over time. Identify key areas of improvement and top-performing workers.",
//     },
//     {
//       title: "Reliability Metrics",
//       description:
//         "Gain insights into reliability metrics, including attendance rates, punctuality, and consistency in task completion.",
//     },
//     {
//       title: "Shift Optimization",
//       description:
//         "Understand shift patterns and worker availability to optimize scheduling and improve workforce efficiency.",
//     },
//     {
//       title: "Customized Reporting",
//       description:
//         "Generate custom reports based on specific metrics and KPIs tailored to your business needs.",
//     },
//   ];

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
//       {/* Header Section */}
//       <h2 style={{ marginBottom: "20px" }}>Analysis Insights Overview</h2>
//       <p style={{ marginBottom: "30px", color: "#666" }}>
//         Explore actionable insights to make data-driven decisions and improve
//         overall efficiency.
//       </p>

//       {/* Insights Grid */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//           gap: "15px",
//         }}
//       >
//         {insights.map((insight, index) => (
//           <div
//             key={index}
//             style={{
//               backgroundColor: "#f8f9fa",
//               padding: "15px",
//               borderRadius: "6px",
//               boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
//               transition: "transform 0.2s ease, box-shadow 0.2s ease",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = "scale(1.02)";
//               e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = "scale(1)";
//               e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
//             }}
//           >
//             <h3
//               style={{
//                 fontSize: "16px",
//                 fontWeight: "600",
//                 color: "#333",
//                 marginBottom: "10px",
//               }}
//             >
//               {insight.title}
//             </h3>
//             <p style={{ fontSize: "14px", color: "#666" }}>
//               {insight.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AnalysisInsightsOverview;
