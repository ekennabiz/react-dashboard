import "../styles/Analytics.css";

function Analytics() {
  return (
    <div className="page">

      <h1>Analytics</h1>

      <div className="chart-card">

        <h3>Revenue Growth</h3>

        <div className="bars">
          <div className="bar" style={{ height: "40%" }}></div>
          <div className="bar" style={{ height: "70%" }}></div>
          <div className="bar" style={{ height: "55%" }}></div>
          <div className="bar" style={{ height: "90%" }}></div>
          <div className="bar" style={{ height: "60%" }}></div>
        </div>

      </div>

    </div>
  );
}

export default Analytics;