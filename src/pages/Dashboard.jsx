import { useState, useEffect } from "react";
import PageLoader from "../components/PageLoader";
import StatCard from "../components/StatCard";
import { dashboardData } from "../data/dashboardData";

function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PageLoader />;

  return (
    <div className="content-inner">
      <h1>Dashboard Overview</h1>

      <div className="cards">
        <StatCard title="Revenue" value={dashboardData.revenue} />
        <StatCard title="Customers" value={dashboardData.customers} />
        <StatCard title="Orders" value={dashboardData.orders} />
        <StatCard title="Profit" value={dashboardData.profit} />
      </div>
    </div>
  );
}

export default Dashboard;
