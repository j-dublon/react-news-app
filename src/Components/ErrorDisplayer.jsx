import React from "react";

const ErrorDisplayer = ({ err }) => {
  return (
    <section>
      <h3 className="errorDisplayer">{err ? err : "Path not found!"}</h3>
      <img src={require("../Images/fail.jpg")} alt="Something went wrong" />
    </section>
  );
};

export default ErrorDisplayer;
