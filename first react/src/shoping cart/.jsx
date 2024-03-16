import React from "react";
import shoping from "./shoping.jsx";
import data from "./data2.js";

function shoping() {
  return (
    <div>
      <div>
        <p>{data[0].name}</p>
        <p>{data[0].price} $</p>

        <button onClick={() => alert("Buy")}>Buy Now!</button>
      </div>
    </div>
  );
}

export default shoping;
