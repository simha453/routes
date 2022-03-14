import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
const Reacttopics = () => {
  let naviagte = useNavigate();
  const backtohome = () => {
    naviagte("/");
  };
  return (
    <div>
      <center>
        <h1>React Topics</h1>
        <ul style={myStyle}>
          <li>
            <Link to="Introduction">Introduction</Link>
          </li>
          <li>
            <Link to="Install" exact="true">
              Installation
            </Link>
          </li>
          <li>
            <Link to="states and props">States and props</Link>
          </li>
          <li>
            <Link to="Life cycle methods">Lifecyle Methods</Link>
          </li>
        </ul>
        <Outlet />
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
export default Reacttopics;
