function KpiCard({ title, value, trend }) {
  return (
    <div className="analytics-card">
      <h3>{title}</h3>

      <h2>{value}</h2>

      <p className="trend">
        {trend}
      </p>
    </div>
  );
}

export default KpiCard;