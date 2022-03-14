import React from "react";
import { useParams } from "react-router-dom";

const Topicdata = () => {
  let params = useParams();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1> React {params.tname} </h1>
    </div>
  );
};

export default Topicdata;
