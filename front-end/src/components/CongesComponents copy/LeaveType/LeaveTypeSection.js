// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './leaveType.css';

// const LeaveTypeSection = () => {
//   const [leaveTypes, setLeaveTypes] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [newLeaveType, setNewLeaveType] = useState({ type: '', description: '' });

//   useEffect(() => {
//     fetchLeaveTypes();
//   }, []);

//   const fetchLeaveTypes = async () => {
//     try {
//       const response = await axios.get('/api/leave-types');
//       setLeaveTypes(response.data);
//     } catch (error) {
//       console.error("Error fetching leave types:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     setNewLeaveType({ ...newLeaveType, [e.target.name]: e.target.value });
//   };

//   const addLeaveType = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/api/leave-types', newLeaveType);
//       fetchLeaveTypes(); // Refresh the list after adding
//       setShowModal(false); // Close modal after adding
//       setNewLeaveType({ type: '', description: '' }); // Reset form
//     } catch (error) {
//       console.error("Error adding leave type:", error);
//     }
//   };

//   const openModal = () => {
//     console.log("Opening modal...");
//     setShowModal(true);
//   };
  
//   const closeModal = () => {
//     console.log("Closing modal...");
//     setShowModal(false);
//   };
  
//   return (
//     <div className="leave-type-section">
//       <h2>Leave Types</h2>
//       <button className="add-leave-type-btn" onClick={openModal}>
//         Add Leave Type
//       </button>

//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={closeModal}>&times;</span>
//             <h3>Add a New Leave Type</h3>
//             <form onSubmit={addLeaveType}>
//               <input
//                 name="type"
//                 value={newLeaveType.type}
//                 onChange={handleInputChange}
//                 placeholder="Leave Type"
//                 required
//               />
//               <textarea
//                 name="description"
//                 value={newLeaveType.description}
//                 onChange={handleInputChange}
//                 placeholder="Description"
//                 required
//               />
//               <button type="submit">Submit</button>
//             </form>
//           </div>
//         </div>
//        )} 

//       <table>
//         <thead>
//           <tr>
//             <th>Type</th>
//             <th>Description</th>
//             <th>Created At</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leaveTypes.map((type) => (
//             <tr key={type.id}>
//               <td>{type.type}</td>
//               <td>{type.description}</td>
//               <td>{type.created}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default LeaveTypeSection;


import React, { useState } from 'react';
import './leaveType.css';

const LeaveTypeSection = () => {
  const [leaveTypes, setLeaveTypes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newLeaveType, setNewLeaveType] = useState({ type: '', description: '' });

  // Fonction pour ajouter un type de congé à la liste
  const addLeaveType = (e) => {
    e.preventDefault();
    // Vérifie que les champs ne sont pas vides
    if (newLeaveType.type && newLeaveType.description) {
      setLeaveTypes([...leaveTypes, newLeaveType]);
      setShowModal(false); // Ferme le modal après l'ajout
      setNewLeaveType({ type: '', description: '' }); // Réinitialise le formulaire
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  const openModal = () => {
    setShowModal(true);
    console.log('ouverture de la modal');
  };
  
  const closeModal = () => {
    setShowModal(false);
  };
  
  return (
    <div className="leave-type-section">
      <h2>Leave Types</h2>
      <button className="add-leave-type-btn" onClick={openModal}>
        Add Leave Type
      </button>

      {showModal && (
       <div className="modall">
       <div className="modal-content">
         <span className="close" onClick={closeModal}>&times;</span>
         <h3>Add a New Leave Type</h3>
         <form onSubmit={addLeaveType}>
           <input
             name="type"
             value={newLeaveType.type}
             onChange={(e) => setNewLeaveType({ ...newLeaveType, type: e.target.value })}
             placeholder="Leave Type"
             required
           />
           <textarea
             name="description"
             value={newLeaveType.description}
             onChange={(e) => setNewLeaveType({ ...newLeaveType, description: e.target.value })}
             placeholder="Description"
             required
           />
           <button type="submit">Submit</button>
         </form>
       </div>
     </div>

       )} 

      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {leaveTypes.map((type, index) => (
            <tr key={index}>
              <td>{type.type}</td>
              <td>{type.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveTypeSection;
