import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/NavigationItem';
import {
    useDataFetching,
    LoadingIndicator,
    ErrorIndicator
} from './utils/NavigationLogic';
import AnalysisInsightsOverview from './components/AnalysisOverview';
import MarketPlacePerformanceDashboard from './components/dashboards/MarketplacePerformanceDashboard';
import WorkerReliabilityTrustDashboard from './components/dashboards/WorkerReliabilityTrustDashboard';
import UrgentShiftsDashboard from './components/dashboards/UrgentShiftsDashboard';
import PayRateOptimizationDashboard from './components/dashboards/PayRateOptimizationDashboard';
import MarketplaceEfficiencyDashboard from './components/dashboards/MarketplaceEfficiencyDashboard';
import GrowthDashboard from './components/dashboards/growth/GrowthDashboard';

const AppRouter = () => {
    const { dashboardData, loading, error } = useDataFetching();

    if (loading) return <LoadingIndicator />;
    if (error) return <ErrorIndicator error={error} />;

    return (
        <HashRouter>
            <div className="min-h-screen bg-gray-50">
                <Navigation />
                <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <Routes>
                        <Route
                            path="/"
                            element={<AnalysisInsightsOverview />}
                        />
                        <Route
                            path="/marketplace-performance"
                            element={<MarketPlacePerformanceDashboard data={dashboardData} />}
                        />
                        <Route
                            path="/marketplace-efficiency"
                            element={<MarketplaceEfficiencyDashboard data={dashboardData} />}
                        />
                        <Route
                            path="/worker-reliability-trust"
                            element={
                                <WorkerReliabilityTrustDashboard
                                    data={dashboardData}
                                />
                            }
                        />
                        <Route
                            path="/urgent-shifts"
                            element={<UrgentShiftsDashboard data={dashboardData} />}
                        />
                        <Route
                            path="/pay-rate-optimization"
                            element={<PayRateOptimizationDashboard data={dashboardData} />}
                        />
                        <Route
                            path="/growth-dashboard"
                            element={<GrowthDashboard data={dashboardData.growth_analysis} />}
                        />
                    </Routes>
                </main>
            </div>
        </HashRouter >
    );
};

export default AppRouter;