

// import React, { useState } from 'react';
// import './NestedCom.css'

// const ViewEmployees= () => {
//   const [employees] = useState([
//     { id: 1, name: 'John Doe' },
//     { id: 2, name: 'Jane Smith' },
//     { id: 3, name: 'Alice Johnson' },
//     // Ajoutez d'autres employés au besoin
//   ]);
//   const [selectedEmployee, setSelectedEmployee] = useState('');
//   const [dateStart, setDateStart] = useState('');
//   const [dateEnd, setDateEnd] = useState('');
//   const [reason, setReason] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Vous pouvez remplacer cette alerte par une action spécifique à votre application
//     alert('Congé accordé avec succès.');
//     // Réinitialisez le formulaire ou effectuez des actions supplémentaires ici
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Employé:</label>
//       <select value={selectedEmployee} onChange={e => setSelectedEmployee(e.target.value)}>
//         <option value="">Sélectionnez un employé</option>
//         {employees.map(employee => (
//           <option key={employee.id} value={employee.id}>{employee.name}</option>
//         ))}
//       </select>

//       <label>Date de début:</label>
//       <input type="date" value={dateStart} onChange={e => setDateStart(e.target.value)} required />

//       <label>Date de fin:</label>
//       <input type="date" value={dateEnd} onChange={e => setDateEnd(e.target.value)} required />

//       <label>Raison:</label>
//       <textarea value={reason} onChange={e => setReason(e.target.value)} required></textarea>

//       <button type="submit">Accorder le congé</button>
//     </form>
//   );
// };

// export default ViewEmployees;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GrantLeave.css'; 
import '../NestedCom.css'

const GrantLeave = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [reason, setReason] = useState('');

  useEffect(() => {
    // Remplacez '/api/employees' par l'URL correcte pour obtenir les employés
    axios.get('/api/employees').then(response => {
      setEmployees(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Remplacez '/api/leaves' par l'URL correcte pour créer un nouveau congé
    axios.post('/api/leaves', {
      employee_id: selectedEmployee,
      date_start: dateStart,
      date_end: dateEnd,
      reason: reason,
    }).then(() => {
      alert('Congé accordé avec succès.');
      // Réinitialisez le formulaire ou effectuez des actions supplémentaires ici
    }).catch(error => {
      alert('Erreur lors de la création du congé.');
      console.error('Erreur:', error);
    });
  };

  return (
    <form className="grant-leave-form" onSubmit={handleSubmit}>
      <label className="form-label">Employé:</label>
      <select className="form-select" value={selectedEmployee} onChange={e => setSelectedEmployee(e.target.value)}>
        <option value="">Sélectionnez un employé</option>
        {employees.map(employee => (
          <option key={employee.id} value={employee.id}>{employee.name}</option>
        ))}
      </select>

      <label className="form-label">Date de début:</label>
      <input className="form-input" type="date" value={dateStart} onChange={e => setDateStart(e.target.value)} required />

      <label className="form-label">Date de fin:</label>
      <input className="form-input" type="date" value={dateEnd} onChange={e => setDateEnd(e.target.value)} required />

      <label className="form-label">Raison:</label>
      <textarea className="form-textarea" value={reason} onChange={e => setReason(e.target.value)} required></textarea>

      <button className="form-button" type="submit">Accorder le congé</button>
    </form>
  );
};

export default GrantLeave;
