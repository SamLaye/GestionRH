import React from "react";
import { NavLink } from "react-router-dom";

function RapportTemplate(props) {
  const children = props.children;
  return (
    <div>
      <ul className="rapport-list">
        <NavLink to="/rapport/presence">
          {" "}
          <li className="rapport-list-item">Présences</li>
        </NavLink>
        <NavLink to="rapport/demande-conges">
          {" "}
          <li className="rapport-list-item">Demande de congés</li>
        </NavLink>
        <NavLink to="rapport/solde-conges">
          {" "}
          <li className="rapport-list-item">Soldes de congés</li>
        </NavLink>
        <NavLink to="/rapport/journal-paie">
          {" "}
          <li className="rapport-list-item">Journal de paie</li>
        </NavLink>
      </ul>
      <div>{children}</div>
    </div>
  );
}

export default RapportTemplate;
