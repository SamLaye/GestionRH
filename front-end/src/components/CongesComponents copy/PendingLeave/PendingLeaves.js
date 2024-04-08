import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './pendingleaves.css';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


const PendingLeaves = () => {
  const [pendingLeaves, setPendingLeaves] = useState([]);


  useEffect(() => {
    fetchPendingLeaves();
  }, []);
    
  const fetchPendingLeaves = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/leaves/pending');
      const pendingLeavesData = response.data.filter(leave => leave.status === 'pending');
      setPendingLeaves(pendingLeavesData);
    } catch (error) {
      console.error('Error fetching leaves:', error);
    }
  };
    //Accorder les conges en attentes
     const approveLeave = async (leaveId) => {
    try {
      await axios.post(`http://localhost:8000/api/leaves/approve/${leaveId}`);
      // Rafraîchir la liste des congés en attente après l'approbation
      fetchPendingLeaves();
      toast.success('Le congé a été approuvé avec succès !');
    } catch (error) {
      console.error('Error approving leave:', error);
    }
  };
  //-----------loader--------------------
  if (!pendingLeaves.length) {
    return (
      <div className="sweet-loading">
        <ClipLoader color={'#05457d'} loading={true} css={override} size={150} />
        <div>Chargement des congés en attente...</div>
      </div>
    );
  }
  //------------------Fin-----------------
  console.log(pendingLeaves)
  return (
    <div>
       <ToastContainer />
      <h2>Congés en Attente</h2>
      <table className="leaves-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Département</th>
            <th>Date de Début</th>
            <th>Date de Fin</th>
            <th>Raison</th>
            <th>Statut</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pendingLeaves.map((leave, index) => (
             <tr key={leave.id}>
            <td>{leave.employee.firstName} {leave.employee.lastName}</td>
            <td>{leave.employee.department}</td>
            <td>{leave.start_date}</td>
            <td>{leave.end_date}</td>
            <td>{leave.reason}</td>
            <td><span className={`status ${leave.status.toLowerCase()}`}>{leave.status}</span></td>
              <td>
                <button className="approve-btn" onClick={() => approveLeave(leave.id)}>
                  Approuver
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export {PendingLeaves} ;
