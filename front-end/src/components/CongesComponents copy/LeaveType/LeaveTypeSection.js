
import React, { useEffect, useState } from 'react';
import './leaveType.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LeaveTypeSection = () => {
  const [leaveTypes, setLeaveTypes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newLeaveType, setNewLeaveType] = useState({ name: '', description: '',max_duration:'' });

  // Fonction pour ajouter un type de congé à la liste
  const addLeaveType = async (e) => {
    e.preventDefault();
    // Vérifie que les champs ne sont pas vides
    if (newLeaveType.name && newLeaveType.description) {
      try {
        // Envoi des données à l'API via une requête POST
        await axios.post('http://localhost:8000/api/leave-types', newLeaveType);
        
        // Rafraîchir la liste des types de congés après l'ajout
        fetchLeaveTypes();
        // Ferme le modal après l'ajout
        setShowModal(false);
        // Réinitialise le formulaire
        setNewLeaveType({ name: '', description: '',max_duration:'' });
      toast.success('Le congé a été accordé avec succès !');

      } catch (error) {
        // console.error('Error adding leave type:', error);
        console.log(error);
       toast.error('Une erreur est survenue lors de l\'ajout du type de congé. !');

      }
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };
  
  // recuperer les conges 
  const fetchLeaveTypes = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/leave-types');
      setLeaveTypes(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching leave types:', error);
    }
  };
  useEffect(() => {
    fetchLeaveTypes();
  }, []);
  
  
  const openModal = () => {
    setShowModal(true);
    console.log('ouverture de la modal');
  };
  
  const closeModal = () => {
    setShowModal(false);
  };
  
  return (
    <div>
    <ToastContainer />

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
             value={newLeaveType.name}
             onChange={(e) => setNewLeaveType({ ...newLeaveType, name: e.target.value })}
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
           <input
             type="number"
             name="max_duration"
             value={newLeaveType.max_duration}
             onChange={(e) => setNewLeaveType({ ...newLeaveType, max_duration: e.target.value })}
             placeholder="Max Duration"
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
            <th>Durée Maximum</th>
          </tr>
        </thead>
        <tbody>
          {leaveTypes.map((type, index) => (
            <tr key={index}>
              <td>{type.name}</td>
              <td>{type.description}</td>
              <td>{type.max_duration}jours</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default LeaveTypeSection;
