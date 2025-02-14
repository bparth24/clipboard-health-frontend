import React, { useState, useEffect } from 'react';

export const useDataFetching = () => {
    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/dashboard_data.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setDashboardData(data);
                setLoading(false);
            } catch (error) {
                console.error('Error loading dashboard data:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { dashboardData, loading, error };
};

export const LoadingIndicator = () => (
    <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading dashboard data...</div>
    </div>
);

export const ErrorIndicator = ({ error }) => (
    <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-red-600">Error: {error}</div>
    </div>
);