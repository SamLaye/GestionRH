import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { faChartBar, faCheck, faCheckCircle, faClipboardList, faCoffee,faFileSignature,faLeaf,faList,faSpinner,faUserPlus, faUsers  } from "@fortawesome/free-solid-svg-icons";
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
          
            <FontAwesomeIcon icon={faSpinner} /> Congés en Attente
        </NavLink>

          <NavLink to="approved-leaves" className="menu-item"><FontAwesomeIcon icon={faCheck} activeClassName="active" /> Approuvés</NavLink>
          <NavLink to="total-leaves" className="menu-item"><FontAwesomeIcon icon={faChartBar} activeClassName="active" /> Total des Congés</NavLink>
          <NavLink to="leave-type" className="menu-item"><FontAwesomeIcon icon={faClipboardList} activeClassName="active" /> Types de Congés</NavLink>
          <NavLink to="view-employees" className="menu-item"><FontAwesomeIcon icon={faFileSignature} activeClassName="active" />Accorder un Congé</NavLink>
        </nav>
        <Outlet/>
      </div>
    </div>
  );
}

export default Conges;
