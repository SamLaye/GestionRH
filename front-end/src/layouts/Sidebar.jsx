import React from "react";
import { NavLink } from "react-router-dom";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
} from "react-icons/bs";

function Sidebar() {
  return (
    <>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon" /> Gestion RH
        </div>
        <span className="icon close_icon">X</span>
      </div>

      <ul className="sidebar-list">
        <NavLink style={{ textDecoration: "none" }} to="/">
          <li className="sidebar-list-item">
            <BsGrid1X2Fill className="icon" /> Dashbord
          </li>
        </NavLink>
        <NavLink to="employes" style={{ textDecoration: "none" }}>
          <li className="sidebar-list-item">
            <BsFillArchiveFill className="icon" /> Employés
          </li>
        </NavLink>
        <NavLink to="employes" style={{ textDecoration: "none" }}>
          <li className="sidebar-list-item">
            <BsFillGrid3X3GapFill className="icon" /> Congés
          </li>
        </NavLink>
        <NavLink to="employes" style={{ textDecoration: "none" }}>
          <li className="sidebar-list-item">
            <BsPeopleFill className="icon" /> Présence
          </li>
        </NavLink>
        <NavLink to="employes" style={{ textDecoration: "none" }}>
          <li className="sidebar-list-item">
            <BsListCheck className="icon" /> Paie
          </li>
        </NavLink>
        <NavLink to="employes" style={{ textDecoration: "none" }}>
          <li className="sidebar-list-item">
            <BsMenuButtonWideFill className="icon" /> Rapports
          </li>
        </NavLink>
      </ul>
    </>
  );
}

export default Sidebar;
