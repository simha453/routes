import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  Outlet,
} from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          padding: "10px",
          width: "20%",
          height: "100vh",
          background: "#f0f0f0",
        }}
      >
        <ul style={{ listStyleType: "none", padding: 1 }}>
          <li>
            <NavLink to="myprojects"  style={({ isActive }) =>
                isActive
                  ? {
                      color: "#fff",
                      background: "#7600dc",
                    }
                  : { color: "#545e6f", background: "#f0f0f0" }
              }>
              My Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="topics"  style={({ isActive }) =>
                isActive
                  ? {
                      color: "#fff",
                      background: "#7600dc",
                    }
                  : { color: "#545e6f", background: "#f0f0f0" }
              }>
              Topics
            </NavLink>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
}
