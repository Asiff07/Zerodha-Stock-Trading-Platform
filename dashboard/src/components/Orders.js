import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:3000/allOrders");
        setOrders(res.data);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p className="loading">Loading orders...</p>;

  if (orders.length === 0)
    return (
      <div className="no-orders">
        <p>You haven't placed any orders today</p>
        <Link to="/" className="btn">
          Get started
        </Link>
      </div>
    );

  return (
    <div className="orders-container">
      <h2>Your Orders</h2>
      <div className="orders-grid">
        {orders.map((order) => (
          <div className="order-card" key={order._id}>
            <h3>{order.name}</h3>
            <p>
              <strong>Quantity:</strong> {order.qty}
            </p>
            <p>
              <strong>Price:</strong> ₹{order.price}
            </p>
            <p>
              <strong>Mode:</strong> {order.mode}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
