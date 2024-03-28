import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsGrid1X2Fill, BsPeopleFill } from "react-icons/bs";
import { GrUserWorker, GrContactInfo } from "react-icons/gr";
import { RiBankFill } from "react-icons/ri";
import { MdHolidayVillage } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";

function Sidebar() {
  const admin = [
    {
      path: "/",
      icone: <BsGrid1X2Fill className="icon" />,
      _label: "Dashbord",
    },
    {
      path: "employes",
      icone: <GrUserWorker className="icon" />,
      _label: "Employés",
    },
    {
      path: "conges",
      icone: <MdHolidayVillage className="icon" />,
      _label: "Congés",
    },
    {
      path: "presence",
      icone: <BsPeopleFill className="icon" />,
      _label: "Présence",
    },
    {
      path: "notes",
      icone: <GrContactInfo className="icon" />,
      _label: "Notes internes",
    },
    {
      path: "payment",
      icone: <RiBankFill className="icon" />,
      _label: "Paie",
    },
    {
      path: "rapport",
      icone: <TbReportAnalytics className="icon" />,
      _label: "Rapports",
    },
  ];
  const employee = [
    {
      path: "taches",
      icone: <FaTasks className="icon" />,
      _label: "Taches",
    },
    {
      path: "conges",
      icone: <MdHolidayVillage className="icon" />,
      _label: "Demande de congés",
    },
  ];

  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <>
      <div className="sidebar-title">
        <div className="sidebar-brand">Gestion RH</div>
        <span className="icon close_icon">X</span>
      </div>

      <ul className="sidebar-list">
        {isAdmin
          ? admin.map((item) => (
              <NavLink to={item.path} style={{ textDecoration: "none" }}>
                <li className="sidebar-list-item">
                  {item.icone} {item._label}
                </li>
              </NavLink>
            ))
          : employee.map((item) => (
              <NavLink to={item.path} style={{ textDecoration: "none" }}>
                <li className="sidebar-list-item">
                  {item.icone} {item._label}
                </li>
              </NavLink>
            ))}
      </ul>
    </>
  );
}

export default Sidebar;
