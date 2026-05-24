import "../styles/Orders.css";

function Orders() {
  const orders = [
    { id: "#1001", item: "Laptop", price: "$1200", status: "Shipped" },
    { id: "#1002", item: "Phone", price: "$800", status: "Pending" },
    { id: "#1003", item: "Headphones", price: "$150", status: "Delivered" }
  ];

  return (
    <div className="page">

      <h1>Orders</h1>

      <div className="order-list">

        {orders.map((o, i) => (
          <div key={i} className="order-card">

            <h3>{o.id}</h3>
            <p>{o.item}</p>
            <p>{o.price}</p>

            <span>{o.status}</span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Orders;