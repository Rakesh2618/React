import React, { useState } from "react";

export const UsestateFunc = () => {  // Fixed function name (Capitalized)
  // const Data= 15;
  const [mynum , upnum] = useState(0);

  
  return (
  

    <>
    <div className="first">
      <p>{mynum}</p>
  
      <div className="button1" onClick={() => upnum(mynum+1)}>
        <span></span>
        <span></span>
        <span></span> Increment
      </div>
  
      <div className="button1" onClick={()=> upnum (mynum-1)}>
        <span></span>
        <span></span>
        <span></span> Decrement
      </div>
    </div>
  </>
  
  );
};

export default UsestateFunc; // Added default export
