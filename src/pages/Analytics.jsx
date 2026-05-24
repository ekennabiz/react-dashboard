import "../styles/Analytics.css";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

import { analyticsData } from "../data/analyticsData";
import { kpiData } from "../data/kpiData";
import KpiCard from "../components/KpiCard";

function Analytics() {
  return (
    <div className="analytics-page">

      <h1>Analytics Dashboard</h1>

      <div className="analytics-cards">

        <KpiCard
          title="Revenue"
          value={kpiData.revenue}
          trend="+12%"
        />

        <KpiCard
          title="Customers"
          value={kpiData.customers}
          trend="+8%"
        />

        <KpiCard
          title="Orders"
          value={kpiData.orders}
          trend="+15%"
        />

        <KpiCard
          title="Growth"
          value={kpiData.growth}
          trend="This Month"
        />

      </div>

      <div className="chart-grid">

        <div className="chart-card">

          <h3>Revenue Trend</h3>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#2563eb"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>

        </div>

        <div className="chart-card">

          <h3>Customer Growth</h3>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="customers"
                stroke="#10b981"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>

        </div>

      </div>

      <div className="summary-card">

        <h3>KPI Summary</h3>

        <p>
          Revenue increased steadily over the last six months.
          Customer growth remained positive and order volume
          continues trending upward.
        </p>

      </div>

    </div>
  );
}

export default Analytics;