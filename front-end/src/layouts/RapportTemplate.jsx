import React from "react";

function RapportTemplate(props) {
  const children = props.children;
  return (
    <div>
      <ul className="rapport-list">
        <li className="rapport-list-item">Présences</li>
        <li className="rapport-list-item">Demande de congés</li>
        <li className="rapport-list-item">Soldes de congés</li>
        <li className="rapport-list-item">Journal de paie</li>
      </ul>
      <div>{children}</div>
    </div>
  );
}

export default RapportTemplate;
