import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  let email = "chalam@gmail.com";
  let number = "9999999999";
  return (
    <div>
      <center>
        <ul style={myStyle}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink
              to="/reactdashboard"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#fff",
                      background: "#7600dc",
                    }
                  : { color: "#545e6f", background: "#f0f0f0" }
              }
            >
              Dashborad
            </NavLink>
          </li>
          <li>
            <Link to="/about/React Router">About React</Link>
          </li>
          <li>
            <Link to={`/contact-us?mail=${email}&mobile=${number}`}>
              Contact us
            </Link>
          </li>
          <li>
            <Link to="/react-topics">React Topics</Link>
          </li>
          <li>
            <Link to="/sidebar">Sidebar</Link>
          </li>
        </ul>
      </center>
    </div>
  );
};
const myStyle = {
  display: "flex",
  flexWrap: "wrap",
  alignContent: "space-Between",
  justifyContent: "space-Evenly",
  alignItems: "center",
  listStyle: "none",
};
export default Header;
