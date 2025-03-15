// import React, { useState } from "react";
// import "./index.css";
// import menu from "./menuApi";
// import MenuCard from './menucard'

// const Restaurent = () => {
//   const [menuData, setMenuData] = useState(menu);
   
 
//    const filterItem = (category) => {
//     const updatedList = menu.filter((curElem) =>{
//      return curElem.category === category;
//    });
//       setMenuData(updatedList);
//    };
   

//   return (
//     <>
//     <nav className="menu-bar">
//       <button className="menu-button" onClick={()=>filteritem =>("lunch")}>Lunch</button>
//       <button className="menu-button" onClick={()=>filteritem =>("Dinner")}>Dinner</button>
//       <button className="menu-button" onClick={()=>filteritem =>("All")}>All</button>
//       <button className="menu-button" onClick={()=>filteritem =>("Breakfast")}>Breakfast</button>
//     </nav>
//      <menucard menuData= {menuData}/>
      
//     </>
//   );
// };

//  export default Restaurent;


import React, { useState } from "react";
import "./index.css";
import menu from "./menuApi";
import MenuCard from "./menucard";

const Restaurent = () => {
  const [menuData, setMenuData] = useState(menu);

  // Function to filter menu items based on category
  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(menu);
      return;
    }
    const updatedList = menu.filter((curElem) => curElem.category === category);
    setMenuData(updatedList);
  };

  return (
    <>
      <nav className="menu-bar">
        <button className="menu-button" onClick={() => filterItem("lunch")}>
          Lunch
        </button>
        <button className="menu-button" onClick={() => filterItem("dinner")}>
          Dinner
        </button>
        <button className="menu-button" onClick={() => filterItem("All")}>
          All
        </button>
        <button className="menu-button" onClick={() => filterItem("breakfast")}>
          Breakfast
        </button>
      </nav>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurent;
