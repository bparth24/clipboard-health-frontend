import React from "react";
import PriceElasticity from "./PriceElasticity";
import OptimalPricing from "./OptimalPricing";
import MarginAnalysis from "./MarginAnalysis";

const RateDashboard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="space-y-6">
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Rate Analysis</h2>
      <PriceElasticity data={data.elasticity} />
      <OptimalPricing data={data.optimal_pricing} />
      <MarginAnalysis data={data.margins} />
    </div>
  );
};

export default RateDashboard;
