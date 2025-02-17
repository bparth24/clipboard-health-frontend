import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
    const location = useLocation();

    const navigationItems = [
        { to: "/", label: "Analysis Insights Overview" }, // Summary Page - Brief Writeup
        { to: "/marketplace-performance", label: "Marketplace Performance Dashboard" },
        { to: "/marketplace-efficiency", label: "Marketplace Efficiency Analysis" },
        { to: "/worker-reliability-trust", label: "Worker Reliability Trust Analysis" },
        { to: "/urgent-shifts", label: "Urgent Shifts Analysis" },
        { to: "/pay-rate-optimization", label: "Pay Rate Optimization Analysis" },
        { to: "/growth-dashboard", label: "Growth Analysis" },
    ];

    return (
        <nav
            style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                marginBottom: "20px",
            }}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "15px",
                }}
            >
                {navigationItems.map((item) => (
                    <Link
                        key={item.to}
                        to={item.to}
                        style={{
                            display: "block",
                            padding: "15px",
                            backgroundColor:
                                location.pathname === item.to ? "#4F46E5" : "#f8f9fa",
                            color: location.pathname === item.to ? "white" : "#333",
                            textAlign: "center",
                            fontWeight: "600",
                            fontSize: "16px",
                            borderRadius: "8px",
                            textDecoration: "none",
                            transition: "all 0.3s ease",
                            boxShadow:
                                location.pathname === item.to
                                    ? "0 4px 6px rgba(0,0,0,0.1)"
                                    : "0 1px 3px rgba(0,0,0,0.1)",
                        }}
                        onMouseEnter={(e) => {
                            if (location.pathname !== item.to) {
                                e.target.style.backgroundColor = "#e0e7ff";
                                e.target.style.color = "#4F46E5";
                                e.target.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (location.pathname !== item.to) {
                                e.target.style.backgroundColor = "#f8f9fa";
                                e.target.style.color = "#333";
                                e.target.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
                            }
                        }}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navigation;
