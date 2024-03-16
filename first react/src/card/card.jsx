import React from "react";

function Card({ name, age, avatar }) {
  return (
    <div>
      <img src={avatar} />
      <p> Name :{name}</p>
      <p> Age :{age}</p>
    </div>
  );
}

export default Card;
