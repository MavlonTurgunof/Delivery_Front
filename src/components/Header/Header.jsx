import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverce menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertice. Our
          mission is to setisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header;
