import React, { useState } from "react";

function Button() {
  const [Name, SetName] = useState("guest");
  const [Age, SetAge] = useState(0);

  const click = () => {
    SetName("spongebob");
  };

  const UpdateAge=()=>{
    SetAge(Age+1);
  }

  return (
    <div>
      <p> Name:{Name}</p>
      <button onClick={click}>Update Name</button>

      <p>Age:{Age}</p>
      <button onClick={UpdateAge}>Update Age</button>


    </div>
  );
}
export default Button;
