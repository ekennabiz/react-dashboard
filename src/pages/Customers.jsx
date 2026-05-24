import "../styles/Table.css";

function Customers() {
  const customers = [
    { name: "John Doe", email: "john@mail.com", status: "Active" },
    { name: "Sarah Lee", email: "sarah@mail.com", status: "Inactive" },
    { name: "Mike Ross", email: "mike@mail.com", status: "Active" }
  ];

  return (
    <div className="page">

      <h1>Customers</h1>

      <div className="table-card">

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((c, i) => (
              <tr key={i}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>
                  <span className={c.status === "Active" ? "active" : "inactive"}>
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Customers;