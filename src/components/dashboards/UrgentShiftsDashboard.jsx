import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const UrgentShiftsDashboard = ({ data }) => {
  // Early return if data is not in the expected format
  if (!data || !data.cancellation_recovery || !data.last_minute_fill_rates) {
    return (
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          color: "#666",
        }}
      >
        No urgent shifts data available
      </div>
    );
  }

  // Destructure the data with fallback to empty objects
  const { cancellation_recovery = {}, last_minute_fill_rates = {} } = data;

  // Ensure we have default values for metrics
  const overallMetrics = cancellation_recovery.overall_metrics || {};
  const payRateAnalysis = cancellation_recovery.pay_rate_analysis || [];
  const workplaceAnalysis = cancellation_recovery.workplace_analysis || [];
  const timeWindowAnalysis = last_minute_fill_rates.time_window_analysis || [];

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
      <h2 style={{ marginBottom: "20px" }}>Urgent Shifts Analysis</h2>

      {/* Overall Metrics Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            padding: "15px",
            backgroundColor: "#f8f9fa",
            borderRadius: "6px",
          }}
        >
          <h3 style={{ fontSize: "14px", color: "#666" }}>
            Urgent Cancellations
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {overallMetrics.urgent_cancellations || 0}
          </p>
        </div>
        <div
          style={{
            padding: "15px",
            backgroundColor: "#f8f9fa",
            borderRadius: "6px",
          }}
        >
          <h3 style={{ fontSize: "14px", color: "#666" }}>Rebook Rate</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {(overallMetrics.rebook_rate || 0).toFixed(1)}%
          </p>
        </div>
        <div
          style={{
            padding: "15px",
            backgroundColor: "#f8f9fa",
            borderRadius: "6px",
          }}
        >
          <h3 style={{ fontSize: "14px", color: "#666" }}>Avg Recovery Time</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {(overallMetrics.avg_recovery_time || 0).toFixed(1)}h
          </p>
        </div>
      </div>

      {/* Visualization Sections */}
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            marginBottom: "40px",
            backgroundColor: "#f9f9f9",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          {/* Pay Rate Analysis Chart */}
          <div>
            <h3
              style={{
                textAlign: "center",
                marginBottom: "20px",
                color: "#333",
                fontWeight: "600",
              }}
            >
              Recovery by Pay Rate
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart
                data={payRateAnalysis}
                margin={{ left: 20, right: 20, top: 10, bottom: 10 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={true}
                  vertical={false}
                  stroke="#e0e0e0"
                />
                <XAxis
                  dataKey="pay_bracket"
                  axisLine={true}
                  tickLine={true}
                  interval={0}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                  tick={{ fontSize: 12, fill: "#666" }}
                />
                <YAxis
                  label={{
                    value: "Rebook Rate (%)",
                    angle: -90,
                    position: "insideLeft",
                    offset: 0,
                    style: { textAnchor: "middle" },
                  }}
                  axisLine={true}
                  tickLine={true}
                  width={60}
                />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  contentStyle={{
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderRadius: "8px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  }}
                />
                <Bar
                  dataKey="was_rebooked"
                  fill="#8884d8"
                  name="Rebook Rate"
                  barSize={40}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Time Window Analysis */}
          <div>
            <h3
              style={{
                textAlign: "center",
                marginBottom: "20px",
                color: "#333",
                fontWeight: "600",
              }}
            >
              Fill Rates by Urgency
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart
                data={timeWindowAnalysis}
                margin={{ left: 20, right: 20, top: 10, bottom: 10 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={true}
                  vertical={false}
                  stroke="#e0e0e0"
                />
                <XAxis
                  dataKey="urgency_level"
                  axisLine={true}
                  tickLine={true}
                  interval={0}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                  tick={{ fontSize: 12, fill: "#666" }}
                />
                <YAxis
                  label={{
                    value: "Fill Rate (%)",
                    angle: -90,
                    position: "insideLeft",
                    offset: 0,
                    style: { textAnchor: "middle" },
                  }}
                  axisLine={true}
                  tickLine={true}
                  width={60}
                />
                <Tooltip
                  cursor={{ stroke: "#82ca9d", strokeWidth: 2 }}
                  contentStyle={{
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderRadius: "8px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="is_claimed_mean"
                  stroke="#82ca9d"
                  strokeWidth={3}
                  dot={{
                    stroke: "#82ca9d",
                    strokeWidth: 2,
                    r: 5,
                  }}
                  name="Fill Rate"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Workplace Analysis */}
        <div
          style={{
            backgroundColor: "#f9f9f9",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "#333",
              fontWeight: "600",
            }}
          >
            Top Workplaces by Cancellations
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={workplaceAnalysis}
              margin={{ left: 20, right: 20, top: 10, bottom: 10 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal={true}
                vertical={false}
                stroke="#e0e0e0"
              />
              <XAxis
                dataKey="WORKPLACE_ID"
                axisLine={true}
                tickLine={true}
                interval={0}
                angle={-45}
                textAnchor="end"
                height={60}
                tick={{ fontSize: 12, fill: "#666" }}
              />
              <YAxis
                label={{
                  value: "Cancellations",
                  angle: -90,
                  position: "insideLeft",
                  offset: 0,
                  style: { textAnchor: "middle" },
                }}
                axisLine={true}
                tickLine={true}
                width={60}
              />
              <Tooltip
                cursor={{ fill: "transparent" }}
                contentStyle={{
                  backgroundColor: "rgba(255,255,255,0.9)",
                  borderRadius: "8px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                }}
              />
              <Bar
                dataKey="SHIFT_ID"
                fill="#ffc658"
                name="Cancellations"
                barSize={40}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default UrgentShiftsDashboard;
