const orders = [
  {
    profileImg: "1.jpg",
    name: "Wade Warren",
    order_number: 15478256,
    amount: 124.1,
    status: "Delivered",
  },
  {
    profileImg: "2.jpg",
    name: "Jane Copper",
    order_number: 15478256,
    amount: 365.02,
    status: "Delivered",
  },
  {
    profileImg: "3.jpg",
    name: "Jay Jona Jemison",
    order_number: 15478256,
    amount: 45.88,
    status: "Cancelled",
  },
  {
    profileImg: "4.jpg",
    name: "Walli West",
    order_number: 15478256,
    amount: 65.1,
    status: "Pending",
  },
  {
    profileImg: "5.jpg",
    name: "Jerremy Renuer",
    order_number: 15478256,
    amount: 545.1,
    status: "Delivered",
  },
  {
    profileImg: "6.jpg",
    name: "Barry Alan",
    order_number: 15478256,
    amount: 128.2,
    status: "Delivered",
  },
];
const Table = () => {
  return (
    <div className="sub-main-section">
      <h5>Recent Order</h5>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Customer</th>
            <th scope="col" style={{ textAlign: "center" }}>
              Order No.
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              Amount
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>
                <img src={`src/assets/${order.profileImg}`} alt="" />
                {order.name}
              </td>
              <td style={{ textAlign: "center" }}>{order.order_number}</td>
              <td style={{ textAlign: "center" }}>${order.amount}</td>
              <td className="recent-order-status">
                <div
                  className="custom-badge"
                  style={{
                    backgroundColor:
                      order.status === "Delivered" ? "#175246" : "#61333B",
                    color: order.status === "Delivered" ? "#01BD85" : "#E45C5E",
                  }}
                >
                  {order.status}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
