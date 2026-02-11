import React, { useState } from "react";

const LearnUseState1 = () => {
  // let name = "Namdul lama";
  // let address = "ramhitui";

  let [name, setName] = useState("Namdul lama");
  let [address, setAddress] = useState("america");
  return (
    <div>
      <p>name is {name}</p>
      <button 
      onClick={(e) => 
      setName("Pema lama")}>
        Change Name
        </button>

      <button 
      onClick={(e) => 
      setAddress("Kathmandu")}>
        Change Address
      </button>

      <button onClick={(e) => {
        setName("Pema lama");
        setAddress("Kathmandu, Nepal");
      }}>Change All</button>
    </div>
  );
};

export default LearnUseState1;