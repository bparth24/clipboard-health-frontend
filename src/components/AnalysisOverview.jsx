import React from "react";

const AnalysisInsightsOverview = () => {
  const sections = [
    {
      title: "Disclaimer and Additional Information",
      content: (
        <div
          style={{
            color: "#666",
            fontSize: "16px",
            backgroundColor: "#f8f9fa",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <p style={{ marginBottom: "16px" }}>
            This analysis is based on anonymized sample data provided for
            demonstration purposes. The dataset doesn't have any personally
            identifiable information (PII) and does not contain any sensitive
            individual or organizational details. All metrics and insights
            presented are representative of general marketplace patterns but may
            not reflect current operational statistics.
          </p>

          <p style={{ marginBottom: "16px" }}>
            For comprehensive visualization and detailed analysis:
          </p>

          <ul style={{ marginBottom: "16px", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "8px" }}>
              Access the interactive dashboard for real-time metrics and trends
            </li>
            <li style={{ marginBottom: "8px" }}>
              Use the "View Analysis" button within each dashboard section for
              reports
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Executive Summary",
      content: (
        <div style={{ color: "#666", fontSize: "16px" }}>
          <p style={{ marginBottom: "16px" }}>
            In my analysis of Clipboard Health's marketplace, I've discovered a
            robust platform with exceptional reliability and strong growth.
            We've achieved a total shift volume of 266,340 and maintain an
            impressive 33.2% average monthly growth rate. I'm particularly
            impressed by how we've scaled to 5,742 active workers while
            maintaining a healthy 5.5% supply-demand ratio.
          </p>

          <p style={{ marginBottom: "16px" }}>
            What stands out most to me is our platform's operational excellence
            in post-claim metrics. I found a 96.8% claim-to-verify rate, which I
            believe demonstrates highly effective worker matching. Even more
            impressive are our low cancellation rates of 2.46% and minimal
            no-show rates at 0.24%, showing exceptional worker reliability.
          </p>

          <p style={{ marginBottom: "16px" }}>
            During my analysis, I uncovered compelling evidence of price
            sensitivity in the marketplace, with an 11.8% correlation between
            higher pay rates and completion rates. This suggests significant
            potential for optimization through strategic rate adjustments. I
            also noticed that our initial conversion metrics, particularly the
            4.9% view-to-claim rate, present opportunities for enhancing
            marketplace efficiency.
          </p>

          <p style={{ marginBottom: "16px" }}>
            Looking at time-based performance, I found interesting variations
            across shifts. Night shifts (NOC) achieve the highest claim rate at
            5.97% despite lower volume, while PM shifts show the lowest
            conversion at 4.59% despite having the highest volume. I believe
            this disparity presents clear opportunities for targeted
            interventions.
          </p>

          <p style={{ marginBottom: "16px" }}>
            In examining worker engagement patterns, I identified a strong core
            workforce - 1,200 workers maintaining above 75% completion rates and
            812 workers successfully serving multiple facilities. However, I
            noticed the average claim time of 42.7 hours suggests room for
            improvement in response time.
          </p>
        </div>
      ),
    },
    {
      title: "Objectives of Analysis",
      content: (
        <div style={{ color: "#666", fontSize: "16px" }}>
          <p style={{ marginBottom: "16px" }}>
            In conducting this analysis, I aimed to deeply understand Clipboard
            Health's marketplace dynamics and identify strategic opportunities
            for optimization. Let me explain my primary focus areas.
          </p>

          <p style={{ marginBottom: "16px" }}>
            First and foremost, I wanted to evaluate our conversion funnel
            performance. I examined how effectively we turn shift views into
            claims and completions, looking particularly at our current 4.9%
            view-to-claim rate and 96.8% claim-to-verify rate to identify any
            bottlenecks and opportunities for improvement.
          </p>

          <p style={{ marginBottom: "16px" }}>
            Understanding worker reliability patterns was another crucial
            objective for me. I was particularly interested in examining how pay
            rates correlate with performance metrics. What I wanted to uncover
            was the relationship between compensation levels and key behaviors
            such as completion rates, cancellations, and no-shows, providing
            insights for strategic pricing decisions.
          </p>

          <p style={{ marginBottom: "16px" }}>
            I also dedicated significant attention to analyzing our
            supply-demand dynamics across different time slots and urgency
            levels. Given the notable variations I found in performance between
            shift types (NOC at 5.97% vs PM at 4.59% claim rates), I believed
            understanding these patterns would be essential for optimizing our
            resource allocation and pricing strategies.
          </p>

          <p style={{ marginBottom: "16px" }}>
            In examining worker engagement and marketplace liquidity, I focused
            on how our 5,742 active workers interact with available
            opportunities. I looked closely at our 42.7-hour average claim time
            and patterns in multi-facility service, seeking ways to enhance
            worker participation and response times.
          </p>

          <p>
            Ultimately, my goal was to develop data-driven recommendations for
            improving platform performance. By examining current metrics such as
            the 33.2% monthly growth rate and 5.5% supply-demand ratio, I aimed
            to identify specific, actionable strategies for optimizing pricing,
            enhancing operational efficiency, and maintaining sustainable
            growth.
          </p>
        </div>
      ),
    },

    {
      title: "Methodology",
      content: (
        <div style={{ color: "#666", fontSize: "16px" }}>
          <p style={{ marginBottom: "16px" }}>
            Let me walk you through my analytical approach. I combined
            quantitative metrics analysis with behavioral pattern recognition,
            which I believe gave me both a broad view of market trends and
            detailed insights into worker and facility behaviors.
          </p>

          <p style={{ marginBottom: "16px" }}>
            For my technical implementation, I utilized Python with pandas and
            numpy for data processing and statistical analysis. I leveraged
            scipy from stats for correlation analysis and pattern recognition,
            particularly in analyzing worker behavior clusters and shift timing
            patterns. For data visualization and reporting, I implemented a
            React-based dashboard using Recharts for interactive visualizations,
            enabling clear presentation of complex marketplace dynamics.
          </p>

          <p style={{ marginBottom: "16px" }}>
            At the heart of my analysis was a detailed conversion funnel
            examination. I tracked user interactions from initial shift views
            through to completed assignments. What I found particularly
            interesting was the current 4.9% view-to-claim rate, which led me to
            investigate potential friction points and optimization
            opportunities.
          </p>

          <p style={{ marginBottom: "16px" }}>
            For time-based segmentation, I broke down performance patterns
            across different shift slots (AM, PM, NOC). This revealed something
            fascinating: significant variations in worker preferences and claim
            rates. I found it particularly noteworthy that NOC shifts maintain a
            5.97% claim rate despite lower volume, while PM shifts show a 4.59%
            rate despite higher volume.
          </p>

          <p style={{ marginBottom: "16px" }}>
            In my worker performance analysis, I segmented our 5,742 active
            workers into performance tiers. What emerged from this analysis was
            a core group of 1,200 workers maintaining above 75% completion
            rates. I found this segmentation particularly valuable for
            understanding worker behavior and preferences.
          </p>

          <p style={{ marginBottom: "16px" }}>
            For data quality assurance, I implemented robust validation checks
            using custom Python scripts to handle edge cases and ensure
            consistent datetime handling across different time zones. I also
            developed automated data pipeline tests to verify the integrity of
            our conversion tracking and rate calculations.
          </p>

          <p>
            For my pay rate correlation analysis, I used statistical methods to
            understand price sensitivity across different market segments. One
            of my key findings was an 11.8% correlation between higher pay rates
            and completion rates. I also examined how rate variations impact our
            cancellation (2.46%) and NCNS (0.24%) rates.
          </p>
        </div>
      ),
    },
    {
      title: "Key Insights & Findings",
      content: (
        <div style={{ color: "#666", fontSize: "16px" }}>
          <p style={{ marginBottom: "16px" }}>
            Let me share the critical questions I investigated and what I
            discovered about our marketplace performance:
          </p>

          <h4
            style={{ color: "#444", marginTop: "24px", marginBottom: "12px" }}
          >
            How effectively is the marketplace converting views to completed
            shifts?
          </h4>
          <p style={{ marginBottom: "16px" }}>
            What I found most striking was the contrast between our initial and
            post-claim performance. While we have a 4.9% view-to-claim rate, we
            achieve an impressive 96.8% claim-to-verify rate. I'm particularly
            encouraged by our low cancellation (2.46%) and NCNS (0.24%) rates,
            which I believe demonstrate strong worker commitment.
          </p>

          <h4
            style={{ color: "#444", marginTop: "24px", marginBottom: "12px" }}
          >
            Which shift patterns show the strongest performance, and why?
          </h4>
          <p style={{ marginBottom: "16px" }}>
            My analysis revealed some fascinating patterns. Night (NOC) shifts
            are our strongest performers with a 5.97% claim rate despite lower
            volume. What I found particularly interesting is that PM shifts,
            despite having our highest volume, show the lowest conversion at
            4.59%. I believe this indicates a clear opportunity for
            optimization.
          </p>

          <h4
            style={{ color: "#444", marginTop: "24px", marginBottom: "12px" }}
          >
            How does pay rate impact marketplace performance?
          </h4>
          <p style={{ marginBottom: "16px" }}>
            In my analysis, I found that pay rates show significant influence on
            performance metrics. I discovered an 11.8% correlation between
            higher rates and completion rates. Urgent shifts demonstrate strong
            price elasticity, with fill rates ranging from 2.6% to 8.3% based on
            rate variations. This suggests to me a substantial opportunity for
            strategic rate optimization.
          </p>

          <h4
            style={{ color: "#444", marginTop: "24px", marginBottom: "12px" }}
          >
            How engaged is the worker base, and what drives their behavior?
          </h4>
          <p style={{ marginBottom: "16px" }}>
            I found that the platform shows strong worker engagement with
            varying levels of activity. I identified a core group of 1,200
            workers maintaining above 75% completion rates, while 812 workers
            successfully serve multiple facilities. The average claim time of
            42.7 hours suggests to me room for improving response times.
          </p>

          <h4
            style={{ color: "#444", marginTop: "24px", marginBottom: "12px" }}
          >
            Is the marketplace growing sustainably?
          </h4>
          <p style={{ marginBottom: "16px" }}>
            From my analysis, growth metrics indicate robust and sustainable
            expansion. We maintain a 33.2% average monthly growth rate while
            keeping a healthy 5.5% supply-demand ratio. With 5,742 active
            workers and 266,340 total shifts, I believe we're demonstrating
            strong scaling capability.
          </p>

          <h4
            style={{ color: "#444", marginTop: "24px", marginBottom: "12px" }}
          >
            How well does the platform handle urgent staffing needs?
          </h4>
          <p>
            In my assessment of urgent shift management, I found mixed results.
            While 17.2% of shifts are posted with less than 4 hours' notice, we
            demonstrate agility in handling these requests. However, I believe
            our current response time presents an opportunity for improvement
            through targeted notifications and incentive structures.
          </p>
        </div>
      ),
    },
    {
      title: "Strategic Recommendations",
      content: (
        <div style={{ color: "#666", fontSize: "16px" }}>
          <p style={{ marginBottom: "20px" }}>
            Based on my comprehensive analysis of marketplace dynamics, I
            recommend a three-pronged approach to optimization, focusing on
            pricing intelligence, worker engagement, and operational excellence.
            Let me explain how these recommendations address key challenges
            while building on our existing strengths.
          </p>

          <h4
            style={{ marginTop: "20px", marginBottom: "15px", color: "#444" }}
          >
            Dynamic Pricing Framework
          </h4>
          <p style={{ marginBottom: "20px" }}>
            My analysis revealed significant price elasticity in fill rates,
            ranging from 2.6% to 8.3%, with an 11.8% correlation between higher
            pay rates and completion rates. I recommend implementing an
            intelligent pricing system that responds to historical patterns and
            real-time market conditions. This should include establishing base
            rate thresholds for different time slots, with premium multipliers
            for urgent shifts (those posted with less than 4 hours' notice,
            currently 17.2% of volume). For PM shifts, which I found show
            highest volume but lowest conversion at 4.59%, I believe targeted
            rate adjustments could significantly improve fill rates.
          </p>

          <h4
            style={{ marginTop: "20px", marginBottom: "15px", color: "#444" }}
          >
            Worker Engagement Enhancement
          </h4>
          <p style={{ marginBottom: "20px" }}>
            Having identified 1,200 workers maintaining &gt;75% completion rates
            and 812 workers serving multiple facilities, I see strong evidence
            for the effectiveness of engaged workers. I recommend developing a
            comprehensive worker engagement program that includes a tiered
            reliability incentive system. This should be coupled with an
            intelligent notification system that considers worker preferences
            and historical performance, aiming to reduce the current 42.7-hour
            average claim time. I suggest paying special attention to workers in
            the 25-75% completion rate range, offering targeted support and
            incentives for improvement.
          </p>

          <h4
            style={{ marginTop: "20px", marginBottom: "15px", color: "#444" }}
          >
            Operational Excellence Initiative
          </h4>
          <p style={{ marginBottom: "20px" }}>
            From my analysis, our marketplace metrics show strong operational
            reliability with a 96.8% claim-to-verify rate and low NCNS rates
            (0.24%). To build on this foundation, I recommend implementing
            predictive analytics for better supply-demand matching. This should
            include an early warning system for NCNS risk and specialized
            support for facilities with high cancellation rates. Given the
            2.46-hour average cancellation notice period I observed, I believe
            enhanced replacement staffing protocols could improve coverage
            continuity.
          </p>

          <p style={{ marginTop: "25px", fontStyle: "italic" }}>
            Implementation Priority: Based on our current 33.2% monthly growth
            rate and 5.5% supply-demand ratio, I recommend prioritizing the
            dynamic pricing framework to optimize marketplace liquidity,
            followed by worker engagement initiatives to support sustained
            growth, and finally operational excellence measures to enhance
            long-term stability.
          </p>
        </div>
      ),
    },
  ];

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
      {/* Page Header */}
      <h2 style={{ marginBottom: "20px", fontSize: "18px", fontWeight: "600" }}>
        Analysis Insights Overview
      </h2>
      <p style={{ color: "#666", marginBottom: "20px" }}>
        Comprehensive analysis of marketplace dynamics with actionable insights
        for optimization.
      </p>

      {/* Vertical Layout for Sections */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {sections.map((section, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#f8f9fa",
              padding: "15px",
              borderRadius: "6px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "10px",
                color: "#333",
              }}
            >
              {section.title}
            </h3>
            <div>{section.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalysisInsightsOverview;
