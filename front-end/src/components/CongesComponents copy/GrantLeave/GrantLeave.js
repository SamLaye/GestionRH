import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GrantLeave.css'; 
import '../NestedCom.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GrantLeave = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');

  useEffect(() => {
    // Remplacez '/api/employees' par l'URL correcte pour obtenir les employés
    axios.get('http://localhost:8000/api/employees').then(response => {
      setEmployees(response.data);
    });
  }, []);

  const handleEmployeeChange = (e) => {
    const selectedEmployeeId = e.target.value;
    const selectedEmployee = employees.find(employee => employee.id.toString() === selectedEmployeeId);
  
    // Check if an employee was found before trying to access its properties
    if (selectedEmployee) {
      setSelectedEmployee(selectedEmployee.id);
      setEmail(selectedEmployee.email);
      setDepartment(selectedEmployee.department);
    } else {
      // Reset the selected employee information or handle the case where no employee is found
      setSelectedEmployee('');
      setEmail('');
      setDepartment('');
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Remplacez '/api/leaves' par l'URL correcte pour créer un nouveau congé
    axios.post('http://localhost:8000/api/leaves', {
      employee_id: selectedEmployee,
      start_date: start_date,
      end_date: end_date,
      status: status,
      reason: reason,
      email: email, // Ajoutez cette ligne
      department: department, // Ajoutez cette ligne
    }).then(() => {
      toast.success('Le congé a été accordé avec succès !');

      // Réinitialisez le formulaire ou effectuez des actions supplémentaires ici
    }).catch(error => {
      alert('Erreur lors de la création du congé.');
      console.log('Erreur:', error);
    });
  };

  return (
    <div>
       <ToastContainer />
    <form className="grant-leave-form" onSubmit={handleSubmit}>
      <label className="form-label">ID Employé:</label>
      <select className="form-select" value={selectedEmployee} onChange={handleEmployeeChange}>
        <option className='options' value="">Sélectionnez L'idendifiant de l'employé</option>
        {employees.map(employee => (
          <option key={employee.id} value={employee.id}>{employee.id} </option>
        ))}
      </select>
      <label className="form-label">Employé:</label>
      <select className="form-select" value={selectedEmployee} onChange={handleEmployeeChange}>
        <option className='options' value="">Sélectionnez un employé</option>
        {employees.map(employee => (
          <option key={employee.id} value={employee.id}>{employee.firstName} {employee.lastName}</option>
        ))}
      </select>

      <label className="form-label">Email:</label> {/* Ajoutez cette ligne */}
      <input className="form-input" type="text" value={email} readOnly />

      <label className="form-label">Département:</label> {/* Ajoutez cette ligne */}
      <input className="form-input" type="text" value={department} readOnly />

      <label className="form-label">Date de début:</label>
      <input className="form-input" type="date" value={start_date} onChange={e => setStartDate(e.target.value)} required />

      <label className="form-label">Date de fin:</label>
      <input className="form-input" type="date" value={end_date} onChange={e => setEndDate(e.target.value)} required />

      <label className="form-label">Status:</label>
      <select className="form-select" value={status} onChange={e => setStatus(e.target.value)} required>
        <option value="">Sélectionnez le statut</option>
        <option value="En attente">En attente</option>
        <option value="Approuvé">Approuvé</option>
        <option value="Rejeté">Rejeté</option>
      </select>

      <label className="form-label">Raison:</label>
      <textarea className="form-textarea" value={reason} onChange={e => setReason(e.target.value)} required></textarea>

      <button className="form-button" type="submit">Accorder le congé</button>
    </form>
    </div>
  );
};

export default GrantLeave;
