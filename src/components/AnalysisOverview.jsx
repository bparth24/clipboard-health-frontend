import React from "react";

const AnalysisInsightsOverview = () => {
  const sections = [
    {
      title: "Executive Summary",
      content: (
        <p style={{ color: "#666", fontSize: "14px" }}>
          Analysis of the marketplace performance metrics reveals strong
          operational reliability but highlights opportunities in initial
          conversion rates. The marketplace shows excellent fulfillment rates
          post-claim, with a 96.82% claim-to-verify rate, while maintaining low
          cancellation (2.46%) and no-show (0.24%) rates.
          <br />
          <br />
          <b>Key Takeaways:</b>
          <ul style={{ marginTop: "10px" }}>
            <li>
              Night shifts (NOC) show highest claim rate at 5.97% despite lower
              volume
            </li>
            <li>
              View-to-claim conversion at 4.91% indicates optimization
              opportunity
            </li>
            <li>AM shifts command highest average pay rate at $24.49</li>
          </ul>
        </p>
      ),
    },
    {
      title: "Objectives of Analysis",
      content: (
        <ul style={{ color: "#666", fontSize: "14px", paddingLeft: "20px" }}>
          <li>
            Evaluate marketplace efficiency through conversion funnel metrics
          </li>
          <li>Analyze shift slot performance and worker preferences</li>
          <li>
            Assess the relationship between pay rates and shift fulfillment
          </li>
          <li>Identify opportunities for improving marketplace liquidity</li>
        </ul>
      ),
    },
    {
      title: "Methodology",
      content: (
        <p style={{ color: "#666", fontSize: "14px" }}>
          Analysis focused on key conversion metrics across the fulfillment
          funnel: view-to-claim, claim-to-verify, and reliability metrics
          (cancellations, no-shows). Data was segmented by shift slots (AM, PM,
          NOC) to understand distribution patterns and compared against pay
          rates to identify pricing effectiveness.
        </p>
      ),
    },
    {
      title: "Key Insights & Findings",
      content: (
        <ul style={{ color: "#666", fontSize: "14px", paddingLeft: "20px" }}>
          <li>
            PM shifts have highest volume (114,368 views) but lowest claim rate
            (4.59%)
          </li>
          <li>
            NOC shifts demonstrate strongest worker engagement despite lower
            volume
          </li>
          <li>
            Pay rate variation across slots is minimal (range: $23.83 - $24.49)
          </li>
          <li>
            Post-claim reliability metrics show strong marketplace health
            (96.82% verification rate)
          </li>
        </ul>
      ),
    },
    {
      title: "Recommendations",
      content: (
        <ul style={{ color: "#666", fontSize: "14px", paddingLeft: "20px" }}>
          <li>
            Implement targeted rate adjustments for PM shifts to improve claim
            rates
          </li>
          <li>
            Study NOC shift success factors for potential application to other
            slots
          </li>
          <li>
            Enhance shift presentation and targeting to improve view-to-claim
            conversion
          </li>
          <li>
            Consider dynamic pricing strategies to better balance supply across
            slots
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
