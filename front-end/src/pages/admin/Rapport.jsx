import "../../assets/css/rapport.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import RapportTemplate from "../../layouts/RapportTemplate";
import PresenceEmp from "../../components/rapportComponents/PresenceEmp";
import DemandeCg from "../../components/rapportComponents/DemandeCg";
import SoldeCg from "../../components/rapportComponents/SoldeCg";
import JournalPaie from "../../components/rapportComponents/JournalPaie";
import TableEmp from "../../components/rapportComponents/TableEmp";

function Rapport() {
  return (
    <>
      <div className="main-title" style={{ marginBottom: "30px" }}>
        <h3 style={{ textTransform: "uppercase" }}>RAPPORTs</h3>
      </div>

      <RapportTemplate>
        <Routes>
          <Route path="rapport/presence" element={<PresenceEmp />} />
          <Route path="rapport/demande-conges" element={<DemandeCg />} />
          <Route path="rapport/solde-conges" element={<SoldeCg />} />
          <Route path="rapport/journal-paie" element={<JournalPaie />} />
        </Routes>
      </RapportTemplate>
      <TableEmp />
      <br />
      <SoldeCg />
      <br />
      <JournalPaie />
      <br />
      <DemandeCg />
    </>
  );
}

export default Rapport;
