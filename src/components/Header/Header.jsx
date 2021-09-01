import React from "react";
import "./Header.scss";
function Header() {
  return (
    <div className="header">
      <img
        className="banner"
        src="https://images.unsplash.com/photo-1516685018646-549198525c1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        alt="dish image"
      />
      <div className="text-content">
        <h1>Its All About Good Food & Taste</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          id vero asperiores harum recusandae nisi laboriosam quia iure magni
          impedit!
        </p>
      </div>
    </div>
  );
}

export default Header;
