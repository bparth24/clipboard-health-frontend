import React from "react";
import NoShowAnalysis from "./NoShowAnalysis";
import WorkerReliability from "./WorkerReliability";

const ReliabilityDashboard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="space-y-6">
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
        Reliability Analysis
      </h2>

      <NoShowAnalysis data={data.no_shows} />
      <WorkerReliability data={data.worker_reliability} />
    </div>
  );
};

export default ReliabilityDashboard;
