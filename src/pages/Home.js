import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let naviagte = useNavigate();
  const gotodash = () => {
    naviagte("/reactdashboard");
  };
  return (
    <div>
      <center>
        <br />
        <h1>React Routing</h1>
        <p>
          Routing is a process in which a user is directed to different pages
          based on their action or request. ReactJS Router is mainly used for
          developing Single Page Web Applications. React Router is used to
          define multiple routes in the application. When a user types a
          specific URL into the browser, and if this URL path matches any
          'route' inside the router file, the user will be redirected to that
          particular route. React Router is a standard library system built on
          top of the React and used to create routing in the React application
          using React Router Package. It provides the synchronous URL on the
          browser with data that will be displayed on the web page. It maintains
          the standard structure and behavior of the application and mainly used
          for developing single page web applications.
        </p>
        <button onClick={() => gotodash()}>Go to Dashboard</button>
      </center>
    </div>
  );
};

export default Home;
