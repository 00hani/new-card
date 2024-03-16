// import React, { useState } from "react";

// function Banque({ name }) {
//   const [banque1, setbanque1] = useState(0);
//   const [banque2, setBanque2] = useState(0);
//   const [compte, setcompte] = useState(20000);
//   return (
//     <div>
//       <div className="sold">
//         <p>SOLD</p>
//         <p>{compte}DA</p>
//         <p>{banque2}DA</p>
//       </div>
//       <div className="retrait">
//         <p>{name}</p>
//         <input type="number" onChange={(e) => setbanque1(e.target.value)} />
//         <button>{name}</button>
//       </div>
//     </div>
//   );
// }

// export default Banque;
import React, { useState } from "react";

function Banque({ name, onClick }) {
  const [banque1, setBanque1] = useState("");

  const handleOperation = () => {
    const amount = parseInt(banque1);
    if (!isNaN(amount)) {
      onClick(name, amount);
      setBanque1("");
    }
  };

  return (
    <div className="box">
      <p>{name}</p>
      <input
        type="number"
        placeholder="Enter an amount"
        value={banque1}
        onChange={(e) => setBanque1(e.target.value)}
      />
      <button onClick={handleOperation}>{name}</button>
    </div>
  );
}

export default Banque;
