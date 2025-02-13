import React from "react";
import DurationImpact from "./DurationImpact";
import SlotPatterns from "./SlotPatterns";
import TimingAnalysis from "./TimingAnalysis";

const ShiftDashboard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="space-y-6">
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
        Shift Characteristics Analysis
      </h2>
      <DurationImpact data={data.duration_impact} />
      <SlotPatterns data={data.slot_patterns} />
      <TimingAnalysis data={data.timing_optimization} />
    </div>
  );
};

export default ShiftDashboard;
