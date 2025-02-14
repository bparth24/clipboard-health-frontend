import React from "react";
import FacilitySuccessRates from "./FacilitySuccessRates";
import CancellationPatterns from "./CancellationPatterns";
import RateCompetitiveness from "./RateCompetitiveness";
import PostingStrategies from "./PostingStrategies";
import FacilitySatisfaction from "./FacilitySatisfaction";

const WorkplaceDashboard = ({ data }) => {
  if (!data) return null;

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "30px" }}>
        Workplace Facility Analysis
      </h2>

      {/* Key Metrics */}
      <FacilitySuccessRates data={data.success_rates} />
      <FacilitySatisfaction data={data.satisfaction_metrics} />

      {/* Secondary Metrics */}
      <CancellationPatterns data={data.cancellation_patterns} />
      <RateCompetitiveness data={data.rate_competitiveness} />
      <PostingStrategies data={data.posting_strategies} />
    </div>
  );
};

export default WorkplaceDashboard;
