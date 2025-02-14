import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/NavigationItem';
import {
    useDataFetching,
    LoadingIndicator,
    ErrorIndicator
} from './utils/NavigationLogic';
import AnalysisInsightsOverview from './components/AnalysisOverview';
import Dashboard from './components/dashboards/MasterDashboard';
import WorkerReliabilityTrustDashboard from './components/dashboards/WorkerReliabilityTrustDashboard';
import UrgentShiftsDashboard from './components/dashboards/UrgentShiftsDashboard';
import PayRateOptimizationDashboard from './components/dashboards/PayRateOptimizationDashboard';
import MarketplaceEfficiencyDashboard from './components/dashboards/MarketplaceEfficiencyDashboard';

const AppRouter = () => {
    const { dashboardData, loading, error } = useDataFetching();

    if (loading) return <LoadingIndicator />;
    if (error) return <ErrorIndicator error={error} />;

    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gray-50">
                <Navigation />
                <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <Routes>
                        <Route
                            path="/"
                            element={<AnalysisInsightsOverview />}
                        />
                        <Route
                            path="/master-dashboard"
                            element={<Dashboard data={dashboardData} />}
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
                            element={<UrgentShiftsDashboard data={dashboardData.urgent_shifts_analysis} />}
                        />
                        <Route
                            path="/pay-rate-optimization"
                            element={<PayRateOptimizationDashboard data={dashboardData} />}
                        />
                        <Route
                            path="/marketplace-efficiency"
                            element={<MarketplaceEfficiencyDashboard data={dashboardData} />}
                        />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;

// const Navigation = () => {
//     const location = useLocation();

//     const isActive = (path) => {
//         return location.pathname === path ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:text-gray-900';
//     };

//     return (
//         <nav className="bg-white shadow-lg sticky top-0 z-50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex h-16">
//                     <div className="flex-1 flex items-center overflow-x-auto hide-scrollbar">
//                         <div className="flex space-x-4">
//                             <Link
//                                 to="/"
//                                 className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${isActive('/')}`}
//                             >
//                                 Overview
//                             </Link>
//                             <Link
//                                 to="/worker-reliability"
//                                 className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${isActive('/worker-reliability')}`}
//                             >
//                                 Worker Reliability
//                             </Link>
//                             {/* Add other navigation links here */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// const AppRouter = () => {
//     const [dashboardData, setDashboardData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('/data/dashboard_data.json');
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 setDashboardData(data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error loading dashboard data:', error);
//                 setError(error.message);
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     if (loading) {
//         return (
//             <div className="flex items-center justify-center min-h-screen">
//                 <div className="text-lg">Loading dashboard data...</div>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="flex items-center justify-center min-h-screen">
//                 <div className="text-lg text-red-600">Error: {error}</div>
//             </div>
//         );
//     }

//     return (
//         <BrowserRouter>
//             <div className="min-h-screen bg-gray-50">
//                 <Navigation />
//                 <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//                     <Routes>
//                         <Route
//                             path="/"
//                             element={<Dashboard data={dashboardData} />}
//                         />
//                         <Route
//                             path="/worker-reliability"
//                             element={
//                                 <WorkerReliabilityTrustDashboard
//                                     data={dashboardData}
//                                 />
//                             }
//                         />
//                         {/* Add other routes here */}
//                     </Routes>
//                 </main>
//             </div>
//         </BrowserRouter>
//     );
// };

// export default AppRouter;