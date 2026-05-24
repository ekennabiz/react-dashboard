import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div className="content-inner">
      <h1>Dashboard Overview</h1>

      <div className="cards">
        <DashboardCard title="Revenue" value="$24,500" />
        <DashboardCard title="Customers" value="1,248" />
        <DashboardCard title="Orders" value="367" />
        <DashboardCard title="Profit" value="$8,920" />
      </div>
    </div>
  );
}

export default Dashboard;