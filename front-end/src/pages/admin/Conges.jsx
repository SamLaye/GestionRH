import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { faChartBar, faCheck, faCoffee,faLeaf,faList,faSpinner,faUserPlus, faUsers  } from "@fortawesome/free-solid-svg-icons";
// import { faHousePersonLeave } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Conges() {
  return (

    <div>
      <div className="main-title" style={{ marginBottom: "30px" }}>
        <h3 style={{ textTransform: "uppercase" }}>CONGéS</h3>
      </div>

      <div>
      <nav className="menu-container">
        <NavLink to="." end className="menu-item" activeClassName="active">
          
            <FontAwesomeIcon icon={faSpinner} /> Pending Leaves
        </NavLink>

          <NavLink to="approved-leaves" className="menu-item"><FontAwesomeIcon icon={faCheck} activeClassName="active" /> Approved</NavLink>
          <NavLink to="total-leaves" className="menu-item"><FontAwesomeIcon icon={faChartBar} activeClassName="active" /> Total Leaves</NavLink>
          <NavLink to="leave-type" className="menu-item"><FontAwesomeIcon icon={faLeaf} activeClassName="active" /> Leaves Types Section</NavLink>
          <NavLink to="view-employees" className="menu-item"><FontAwesomeIcon icon={faUsers} activeClassName="active" /> Grant Leave</NavLink>
        </nav>
        <Outlet/>
      </div>
    </div>
  );
}

export default Conges;
