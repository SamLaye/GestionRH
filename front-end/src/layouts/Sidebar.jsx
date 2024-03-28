import React from "react";
import { NavLink } from "react-router-dom";
import { BsCart3, BsGrid1X2Fill, BsPeopleFill } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
import { RiBankFill } from "react-icons/ri";
import { MdHolidayVillage } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";

function Sidebar() {
  const admin = [
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
        {admin.map((item) => (
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
