import React, { useEffect, useState } from "react";

const UseEffectFunction = () => {  
  const [mynum, upnum] = useState(0);

  useEffect(() => {
    document.title = `Chats ${mynum}`; // Corrected title update
  }, []); // Added dependency

  return (
    <>
      <div className="first">
        <p>{mynum}</p>

        <div className="button1" onClick={() => upnum(mynum + 1)}>
          <span></span>
          <span></span>
          <span></span> Increment
        </div>
      </div>
    </>
  );
};

export default UseEffectFunction;
