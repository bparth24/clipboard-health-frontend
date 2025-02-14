import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SlotPatterns = ({ data }) => {
  if (!data) return null;

  const { slot_metrics, slot_day_patterns } = data;

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
      <h2 style={{ marginBottom: "20px" }}>Slot Analysis</h2>

      {/* Slot Metrics Chart */}
      <div style={{ marginBottom: "30px" }}>
        <h3 style={{ marginBottom: "15px" }}>Performance by Slot</h3>
        <div style={{ height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={slot_metrics}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="SLOT" />
              <YAxis yAxisId="left" orientation="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Bar
                yAxisId="left"
                dataKey="fill_rate"
                fill="#8884d8"
                name="Fill Rate %"
              />
              <Bar
                yAxisId="right"
                dataKey="completion_rate"
                fill="#82ca9d"
                name="Completion Rate %"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Slot Day Patterns Heat Map-style Chart */}
      <div>
        <h3 style={{ marginBottom: "15px" }}>Slot Performance by Day</h3>
        <div style={{ height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={slot_day_patterns}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day_of_week" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="fill_rate" fill="#8884d8" name="Fill Rate %" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SlotPatterns;
