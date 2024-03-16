// import React from "react";
// function Shoping({ name, submitedmessage, sendsubmitedmessage }) {
//   const [message, setmessage] = React.useState("");

//   return (
//     <div>
//       <p>{name}</p>
//       <input type="text" onChange={(e) => setmessage(e.target.value)} />
//       <button onClick={(e) => sendsubmitedmessage(message)}>send</button>
//       <div className="msg">
//         <p>{submitedmessage} </p>
//       </div>
//     </div>
//   );
// }

// export default Shoping;import React from "react";

// function Shoping({ name, price, image }) {
//   const [count, setCount] = React.useState(0);

//   return (
//     <div>
//       <h3>Name: {name}</h3>
//       <img src={image} alt="" width="100px" height="150px" />
//       <p>Price: {price}</p>
//       <div className="cards">
//         <button onClick={() => setCount(count + 1)}>+</button>
//         <h2>{count}</h2>
//         <button onClick={() => setCount(count - 1)}>-</button>
//         <button onClick={() => setCount(0)}>Reset</button>
//       </div>
//       <button>Buy Now!</button>
//     </div>
//   );
// }

// export default Shoping;
