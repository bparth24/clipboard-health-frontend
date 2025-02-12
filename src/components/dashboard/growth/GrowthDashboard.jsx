import React from "react";
import GrowthTrends from "./GrowthTrends";
import SupplyDemand from "./SupplyDemand";
import PeakPerformance from "./PeakPerformance";

const GrowthDashboard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="space-y-6">
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
        Growth Analysis
      </h2>

      <GrowthTrends data={data.growth_trends} />
      <SupplyDemand data={data.supply_demand} />
      <PeakPerformance data={data.peak_performance} />
    </div>
  );
};

export default GrowthDashboard;
