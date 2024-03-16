// // import { useState } from "react";
// // import reactLogo from "./assets/react.svg";
// // import viteLogo from "/vite.svg";
// import "./App.css";
// // import sbagetti from "./assets/s.jpg";
// // import fromage from "./assets/ddd.jpeg";
// // import Card from "./card/card";
// // import { data as Users } from "./card/data.js";
// // import UsersCard from "./card/userscard.jsx";
// // function App() {
// //   const [count, setCount] = useState(0);

// //   return (
// //     <>
// //       <div>
// //         <Card name="sbagetti" age={20} avatar={sbagetti} />
// //         <Card name="fromage" age={20} avatar={fromage} />
// //         <Card name="sbagetti" age={20} avatar={sbagetti} />
// //         <Card name="sbagetti" age={20} avatar={sbagetti} />

// //         {Users.map((user, index) => (
// //           <UsersCard
// //             key={index}
// //             username={user.username}
// //             email={user.email}
// //             website={user.website}
// //           />
// //         ))}
// //       </div>
// //     </>
// //   );
// // }

// // export default App;

// //222
// import React, { useState } from "react";
// import Shoping from "./shoping cart/shoping.jsx";

// function App() {
//   const [message1, setmessage1] = useState("");
//   const [message2, setmessage2] = useState("");
//   return (
//     <div className="container">
//       <div className="mouhamed">
//         <Shoping
//           name="mouhamed"
//           submitedmessage={message2}
//           sendsubmitedmessage={(msg) => {
//             setmessage1(msg);
//           }}
//         />
//       </div>
//       <div className="ahmed">
//         <Shoping
//           name="ahmed"
//           submitedmessage={message1}
//           sendsubmitedmessage={(msg) => {
//             setmessage2(msg);
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// export default App;
// import Shopping from "./shoping cart/data2.js";
// import React, { useState } from "react";
// import Shoping from "./shoping cart/shoping.jsx";

// function App() {
//   return (
//     <div>
//       <Shoping />
//     </div>
//   );

//   Shopping.map((items) => (
//     <Shoping key={items.id} name={items.name} price={items.price} />
//   ));
// }

// export default App;
// import Banque from "./banque/Banque.jsx";
// import React from "react";
// import button from "./banque/Banque.jsx";

// export default function App() {
//   return (
//     <div>
//       <Banque name="Deposer" <button onClick={(e) => setBanque2(compte - banque1)} />
//       <Banque name="Retrait" />
//       <Banque name="flixy" />
//     </div>
//   );
// }
import React, { useState } from "react";
import Banque from "./banque/Banque.jsx";
import "./App.css";
import dollar from "./banque/dollar.avif";

export default function App() {
  const [compte, setCompte] = useState(20000);

  const handleOperation = (operation, amount) => {
    if (operation === "Deposer") {
      setCompte(compte + amount);
    } else if (operation === "Retrait" || operation === "flixy") {
      setCompte(compte - amount);
    }
  };

  return (
    <div className="div">
      <img src={dollar} alt="" className="photo" />

      <div className="container">
        <div className="sold">
          <p>SOLD</p>
          <p>{compte}DA</p>
        </div>
        <div className="boxes">
          <Banque name="Deposer" onClick={handleOperation} />
          <Banque name="Retrait" onClick={handleOperation} />
          <Banque name="flixy" onClick={handleOperation} />
        </div>
      </div>
      <img src={dollar} alt="" className="photo1" />
    </div>
  );
}
