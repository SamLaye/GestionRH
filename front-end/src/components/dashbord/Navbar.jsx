import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

function Navbar() {
  return (
    <>
      <div className="menu-icon">
        <BsJustify className="icon" />
      </div>
      <div className="header-left">
        <span style={{ cursor: "pointer" }}>
          <BsSearch className="icon" />
          <input type="text" />
        </span>
      </div>
      <div className="header-right">
        <span style={{ cursor: "pointer", marginLeft: "20px" }}>
          <BsFillBellFill className="icon" />
        </span>
        <span style={{ cursor: "pointer", marginLeft: "20px" }}>
          <BsFillEnvelopeFill className="icon" />
        </span>
        <span style={{ cursor: "pointer", marginLeft: "20px" }}>
          <BsPersonCircle className="icon" />
        </span>
      </div>
    </>
  );
}

export default Navbar;
