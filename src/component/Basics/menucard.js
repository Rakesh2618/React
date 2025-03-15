import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
          <div className="menu-container">
        {menuData.map((item) => (
        
          <div key={item.id} className="card-item">
            <div className="card-content">
              <span className="card-number">{item.id}</span>
              <span className="card-category">{item.category}</span>
              <h1>{item.name}</h1>
              <p className="card-description">{item.description}</p>
              <div className="card-details">Price: {item.price}</div>
              <img src={item.image} alt={item.name} className="card-image" />
              <button className="card-action">Order Now</button>
            </div>
          </div>
        
        ))}
          </div>
      
    </>
  );
};

export default MenuCard;
