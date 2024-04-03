import React, { useState } from 'react';
import './NestedCom.css'; // Assurez-vous d'ajouter les styles correspondants dans ce fichier CSS.

const AddEmployees = ({ onAdd }) => {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    department: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(employeeData);
  };

  return (
    <div className="add-employees-container">
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input
            type="text"
            name="name"
            value={employeeData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Département:
          <select
            name="department"
            value={employeeData.department}
            onChange={handleChange}
          >
            <option value="">Sélectionner un département</option>
            <option value="RH">RH</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="IT">IT</option>
            {/* Ajoutez d'autres options selon vos besoins */}
          </select>
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={employeeData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Mot de passe:
          <input
            type="password"
            name="password"
            value={employeeData.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddEmployees;
