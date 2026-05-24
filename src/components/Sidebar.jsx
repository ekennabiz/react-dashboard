import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Sidebar.css";

import {
  LayoutDashboard,
  BarChart3,
  Users,
  Package,
  ShoppingCart,
  Settings
} from "lucide-react";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "Analytics", icon: BarChart3, path: "/analytics" },
    { name: "Customers", icon: Users, path: "/customers" },
    { name: "Products", icon: Package, path: "/products" },
    { name: "Orders", icon: ShoppingCart, path: "/orders" },
    { name: "Settings", icon: Settings, path: "/settings" }
  ];

  return (
    <div className="sidebar-container">

      <h2 className="logo">ReactDash</h2>

      <ul className="menu">
        {menu.map((item) => {
          const Icon = item.icon;

          const isActive = location.pathname === item.path;

          return (
            <li
              key={item.name}
              className={`menu-item ${isActive ? "active" : ""}`}
              onClick={() => navigate(item.path)}
            >
              <Icon size={18} />
              <span>{item.name}</span>

              {isActive && <div className="active-dot" />}
            </li>
          );
        })}
      </ul>

    </div>
  );
}

export default Sidebar;