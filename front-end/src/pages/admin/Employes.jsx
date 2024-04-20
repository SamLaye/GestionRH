import React, { useState, useEffect } from "react";
import AjoutEmploye from "../../components/employes/AjoutEmploye";
import { Table } from "react-bootstrap";
import { CgEye } from "react-icons/cg";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

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
    <div className="">
      <h2>Liste des employés</h2>
      <div>
        <AjoutEmploye updateEmployees={updateEmployees} />
      </div>
      
      <Table striped bordered hover responsive>
        <thead className="bg-tertiary">
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
              <td className="d-flex justify-content-center">
                <CgEye className="text-warning" />
                <MdOutlineModeEdit className="text-secondary" />
                <MdDelete className="text-danger" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Employes;
