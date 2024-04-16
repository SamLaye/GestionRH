import React, { useState, useEffect } from "react";
import AjoutEmploye from "../../components/employes/AjoutEmploye";
import { Table } from "react-bootstrap";
import { CgEye } from "react-icons/cg";
import { MdOutlineModeEdit } from "react-icons/md";

const Employes = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Récupérer les données des employés depuis l'API
    const apiUrl = "http://127.0.0.1:8000/api/employes";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des employés :", error)
      );
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const updateEmployees = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.firstname &&
      employee.firstname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-2 bg-white shadow-lg">
      <h2>Liste des employés</h2>
      <div className="d-flex justify-content-end">
        <input
          controlId="filterFirstname"
          type="text"
          placeholder="Rechercher par prénom"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Date d'embauche</th>
            <th>Adresse</th>
            <th>Département</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>
              <td>{employee.email}</td>
              <td>{employee.date}</td>
              <td>{employee.adress}</td>
              <td>{employee.departement}</td>
              <td>
                {/* Les icônes pour les actions */}
                <CgEye className="bg-primary rounded" />
                <MdOutlineModeEdit className="bg-primary rounded" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <AjoutEmploye updateEmployees={updateEmployees} />
    </div>
  );
};

export default Employes;
