import React from "react";
import WorkerLoyalty from "./WorkerLoyalty";
import BookingPatterns from "./BookingPatterns";
import ShiftPreferences from "./ShiftPreferences";
import WorkerRetention from "./WorkerRetention";
import SchedulingPatterns from "./SchedulingPatterns";
import ReliabilityPatterns from "./ReliabilityPatterns";

const WorkerDashboard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="space-y-6">
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
        Worker Behavior Analysis
      </h2>
      <WorkerLoyalty data={data.loyalty_analysis} />
      <BookingPatterns data={data.booking_patterns} />
      <ShiftPreferences data={data.shift_preferences} />
      <WorkerRetention data={data.worker_retention} />
      <SchedulingPatterns data={data.scheduling_patterns} />
      <ReliabilityPatterns data={data.reliability_patterns} />
    </div>
  );
};

export default WorkerDashboard;
