import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Contactus = () => {
  let naviagte = useNavigate();
  const backtohome = () => {
    naviagte("/");
  };
  let { search } = useLocation();
  let params = new URLSearchParams(search);

  return (
    <div>
      <center>
        <h1>Contact us</h1>
        <p>Email : {params.get("mail")}</p>
        <p>Mobile Number : {params.get("mobile")}</p>
      </center>
    </div>
  );
};

export default Contactus;
