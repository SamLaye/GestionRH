import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './totalleaves.css'; 
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TotalLeaves = () => {
  const [leavesData, setLeavesData] = useState([]);

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/leaves/allLeaves');
        setLeavesData(response.data);
      } catch (error) {
        console.error('Error fetching leaves:', error);
      }
    };

    fetchLeaves();
  }, []);
  
//-----------loader--------------------
if (!leavesData.length) {
  return (
    <div className="sweet-loading">
      <ClipLoader color={'#2d2e5c'} loading={true} css={override} size={50} />
      <div>Chargement des congés ...</div>
    </div>
  );
}
//------------------Fin-----------------

  return (
    <div className="total-leaves-modal">
      <h2>Total Leaves</h2>
      <table className="total-leaves-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Département</th>
            <th>Date de Début</th>
            <th>Date de Fin</th>
            <th>Raison</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          {leavesData.map((leave, index) => (
            <tr key={leave.id}>
              <td>{leave.employee.firstName} {leave.employee.lastName}</td>
              <td>{leave.employee.department}</td>
              <td>{leave.reason}</td>
              <td>{leave.start_date}</td>
              <td>{leave.end_date}</td>
              <td>
              <span className={`status-tag ${leave.status.toLowerCase() === 'en attente' ? 'En Attente' : leave.status.toLowerCase()}`}>
    {leave.status}
    </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TotalLeaves;
