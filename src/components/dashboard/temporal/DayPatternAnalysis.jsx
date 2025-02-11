import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DayPatternAnalysis = ({ data }) => {
  if (!data) return null;

  const { daily_patterns, hourly_patterns } = data;

  // Sort days of week in correct order
  const daysOrder = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const sortedDailyPatterns = daily_patterns.sort(
    (a, b) =>
      daysOrder.indexOf(a.day_of_week) - daysOrder.indexOf(b.day_of_week)
  );

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
      <h2 style={{ marginBottom: "20px" }}>Booking Patterns</h2>

      {/* Daily Patterns */}
      <div style={{ marginBottom: "30px" }}>
        <h3 style={{ marginBottom: "15px" }}>Daily Success Rate</h3>
        <div style={{ height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sortedDailyPatterns}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day_of_week" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="success_rate" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Hourly Patterns */}
      <div>
        <h3 style={{ marginBottom: "15px" }}>Hourly Success Rate</h3>
        <div style={{ height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={hourly_patterns}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour_of_day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="success_rate" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DayPatternAnalysis;
