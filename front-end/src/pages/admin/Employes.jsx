import React, { useState } from "react";
import AjoutEmploye from "../../components/employes/AjoutEmploye";
import { Table, Form } from "react-bootstrap";
import { CgEye } from "react-icons/cg";
import { MdOutlineModeEdit } from "react-icons/md";




const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);

  const updateEmployees = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };
 
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-2 bg-white shadow-lg">
      <h2>Liste des employés</h2>
      <div class="d-flex justify-content-end">
        <input
          controlId="filterFirstName"
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
            <th>Adresse</th>
            <th>Département</th>
            <th>Date d'embauche</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.address}</td>
              <td>{employee.department}</td>
              <td>{employee.hireDate}</td>
              <td>{employee.action}<CgEye className="bg-primary  rounded-5"/><MdOutlineModeEdit/></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <AjoutEmploye updateEmployees={updateEmployees} />
    </div>
  );
};

export default EmployeeTable;
