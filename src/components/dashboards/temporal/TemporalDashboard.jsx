import React from "react";
import LeadTimeAnalysis from "./LeadTimeAnalysis";
import DayPatternAnalysis from "./DayPatternAnalysis";
import SeasonalAnalysis from "./SeasonalAnalysis";

const TemporalDashboard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="space-y-6">
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
        Temporal Analysis
      </h2>
      <LeadTimeAnalysis data={data.lead_time_analysis} />
      <DayPatternAnalysis data={data.day_patterns} />
      <SeasonalAnalysis data={data.seasonal_trends} />
    </div>
  );
};

export default TemporalDashboard;
