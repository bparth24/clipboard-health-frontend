import React from "react";
import TimeToFillAnalysis from "./TimeToFill";
// import ConversionFunnel from "./ConversionFunnel";
import MarketLiquidity from "./MarketLiquidity";

const MarketDashboard = ({ data }) => {
  if (!data) return <div>Loading market data...</div>;

  return (
    <div className="space-y-6">
      <TimeToFillAnalysis data={data.time_to_fill} />
      {/* <ConversionFunnel data={data.conversion_funnel} /> */}
      <MarketLiquidity data={data.market_liquidity} />
    </div>
  );
};

export default MarketDashboard;
