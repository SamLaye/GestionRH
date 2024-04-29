import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsGrid1X2Fill, BsPeopleFill } from "react-icons/bs";
import { GrUserWorker, GrContactInfo } from "react-icons/gr";
import { RiBankFill } from "react-icons/ri";
import { MdHolidayVillage } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { PiSignOutBold } from "react-icons/pi";
import axios from "axios";

function Sidebar() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(true);
  const access_token = localStorage.getItem('access_token');
  console.log('Access token:', access_token);
  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8000/api/auth/logout', {}, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      navigate('/connexion');
    } catch (error) {
      console.error( error);
    }
  };
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
    {
      icone: <PiSignOutBold className="icon" />,
      _label: "Déconnexion",
      action: handleLogout
    },
  ];
  const employee = [
    {
      path: "/",
      icone: <BsGrid1X2Fill className="icon" />,
      _label: "Tableau de Bord",
    },
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
    {
      path: "horaire_présences",
      icone: <IoTimeOutline className="icon" />,
      _label: "Horaires et Présences",
    },
    {
      icone: <PiSignOutBold className="icon" />,
      _label: "Déconnexion",
      action: handleLogout
    },
  ];

  

  return (
    <>
      <div className="sidebar-title">
        <div className="sidebar-brand">Gestion RH</div>
        <span className="icon close_icon">X</span>
      </div>

      <ul className="sidebar-list">
  {isAdmin
    ? admin.map((item, index) => (
        // Utilisez un bouton ou une div pour la déconnexion au lieu de NavLink
        item._label === "Déconnexion" ? (
          <li key={index} className="sidebar-list-item" onClick={item.action}>
            {item.icone} {item._label}
          </li>
        ) : (
          <NavLink to={item.path} key={index} style={{ textDecoration: "none" }}>
            <li className="sidebar-list-item">
              {item.icone} {item._label}
            </li>
          </NavLink>
        )
      ))
    : employee.map((item, index) => (
        <NavLink to={item.path} key={index} style={{ textDecoration: "none" }}>
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
