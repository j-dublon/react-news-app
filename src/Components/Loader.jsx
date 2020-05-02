import React from "react";
import loader from "../Images/loader.gif";

const Loader = () => {
  return (
    <main>
      <img src={loader} alt="loading..." className="loader"></img>
      <h3>Loading...</h3>
    </main>
  );
};

export default Loader;
