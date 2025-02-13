import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  LineChart,
  Line,
} from "recharts";

const RateCompetitiveness = ({ data }) => {
  if (!data) return null;
  const { market_rates, facility_rates } = data;

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
      <h2 style={{ marginBottom: "20px" }}>Rate Competitiveness Analysis</h2>

      {/* Market Rates Chart */}
      <div style={{ marginBottom: "30px" }}>
        <h3 style={{ marginBottom: "15px" }}>Market Rates by Slot</h3>
        <div style={{ height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={market_rates}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="SLOT" />
              <YAxis
                yAxisId="left"
                orientation="left"
                label={{
                  value: "Rate ($)",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
              <Bar
                yAxisId="left"
                dataKey="PAY_RATE"
                fill="#8884d8"
                name="Pay Rate"
              />
              <Bar
                yAxisId="left"
                dataKey="CHARGE_RATE"
                fill="#82ca9d"
                name="Charge Rate"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Rate Difference vs Fill Rate */}
      <div style={{ marginBottom: "30px" }}>
        <h3 style={{ marginBottom: "15px" }}>
          Rate Difference Impact on Fill Rate
        </h3>
        <div style={{ height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="rate_difference"
                name="Rate Difference"
                label={{ value: "Rate Difference ($)", position: "bottom" }}
              />
              <YAxis
                dataKey="fill_rate"
                name="Fill Rate"
                label={{
                  value: "Fill Rate (%)",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip
                formatter={(value, name) => [
                  name === "Rate Difference"
                    ? `$${value.toFixed(2)}`
                    : `${value.toFixed(1)}%`,
                  name,
                ]}
              />
              <Scatter data={facility_rates} fill="#8884d8" name="Facilities" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Rate Distribution by Slot */}
      <div>
        <h3 style={{ marginBottom: "15px" }}>Facility Rate Distribution</h3>
        <div style={{ height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={facility_rates}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="SLOT" />
              <YAxis
                label={{
                  value: "Rate ($)",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
              <Line
                type="monotone"
                dataKey="PAY_RATE_facility"
                stroke="#8884d8"
                name="Facility Rate"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="PAY_RATE_market"
                stroke="#82ca9d"
                name="Market Rate"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default RateCompetitiveness;
