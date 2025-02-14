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

const OptimalPricing = ({ data }) => {
  if (!data) return null;

  const { slot_pricing, day_pricing } = data;

  // Process data for visualization
  const processedSlotData = slot_pricing
    .filter((d) => d.is_claimed)
    .map((d) => ({
      slot: d.slot,
      avgRate: d.avg_rate,
      successRate: (d.verified / d.count) * 100,
    }));

  // Process day pricing data
  const processedDayData = day_pricing
    .filter((d) => d.is_claimed)
    .map((d) => ({
      day: d.day,
      avgRate: d.avg_rate,
      successRate: (d.verified / d.count) * 100,
    }));

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
      <h2 style={{ marginBottom: "20px" }}>Optimal Pricing Analysis</h2>

      {/* Slot Pricing Chart */}
      <div style={{ marginBottom: "30px" }}>
        <h3 style={{ marginBottom: "15px" }}>Pricing by Slot</h3>
        <div style={{ height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={processedSlotData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="slot" />
              <YAxis
                yAxisId="left"
                orientation="left"
                label={{
                  value: "Average Rate ($)",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                label={{
                  value: "Success Rate (%)",
                  angle: 90,
                  position: "insideRight",
                }}
              />
              <Tooltip />
              <Bar
                yAxisId="left"
                dataKey="avgRate"
                fill="#8884d8"
                name="Average Rate"
              />
              <Bar
                yAxisId="right"
                dataKey="successRate"
                fill="#82ca9d"
                name="Success Rate"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Day Pricing Chart */}
      <div>
        <h3 style={{ marginBottom: "15px" }}>Pricing by Day of Week</h3>
        <div style={{ height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={processedDayData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis
                yAxisId="left"
                orientation="left"
                label={{
                  value: "Average Rate ($)",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                label={{
                  value: "Success Rate (%)",
                  angle: 90,
                  position: "insideRight",
                }}
              />
              <Tooltip />
              <Bar
                yAxisId="left"
                dataKey="avgRate"
                fill="#8884d8"
                name="Average Rate"
              />
              <Bar
                yAxisId="right"
                dataKey="successRate"
                fill="#82ca9d"
                name="Success Rate"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default OptimalPricing;
