import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { faCoffee,faUserPlus, faUsers  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Conges() {
  return (

    <div>
      <div className="main-title" style={{ marginBottom: "30px" }}>
        <h3 style={{ textTransform: "uppercase" }}>CONGéS</h3>
      </div>

      <div>
      <nav className="menu-container">
        <NavLink  className="menu-item" activeClassName="active">
            <FontAwesomeIcon icon={faCoffee} /> Pending Leaves
        </NavLink>

          <NavLink to="approved-leaves" className="menu-item"><FontAwesomeIcon icon={faCoffee} activeClassName="active" /> Approved</NavLink>
          <NavLink to="total-leaves" className="menu-item"><FontAwesomeIcon icon={faCoffee} activeClassName="active" /> Total Leaves</NavLink>
          <NavLink to="add-employees" className="menu-item"><FontAwesomeIcon icon={faUserPlus} activeClassName="active" /> Add Employees</NavLink>
          <NavLink to="view-employees" className="menu-item"><FontAwesomeIcon icon={faUsers} activeClassName="active" /> View Employees</NavLink>
        </nav>
        <Outlet/>
      </div>
    </div>
  );
}

export default Conges;
