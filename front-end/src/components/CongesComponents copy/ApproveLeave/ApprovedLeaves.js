import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './approveleave.css';
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
const containerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // Prend toute la hauteur de la fenêtre
`;
const ApprovedLeaves = () => {
    const [approvedLeaves, setApprovedLeaves] = useState([]);

    useEffect(() => {
        const fetchApprovedLeaves = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/leaves/approved');
                setApprovedLeaves(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching approved leaves:', error);
            }
        };

        fetchApprovedLeaves();
    }, []);
    if (!approvedLeaves.length) {
      return (
        <div css={containerStyles}>
          <ClipLoader color={'#2d2e5c'} loading={true} css={override} size={50} />
          <div>Chargement des congés aprouvés...</div>
        </div>
      );
    }
    //------------------Fin-----------------
    console.log(approvedLeaves)
    return (
        <div>
            <h2>Congés Approuvés</h2>
            <table className="leaves-table">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Département</th>
                        <th>Raison</th>
                        <th>Date de Début</th>
                        <th>Date de Fin</th>
                        <th>Statut</th>
                    </tr>
                </thead>
                <tbody>
                    {approvedLeaves.map((leave, index) => (
                        <tr key={leave.id}>
                            <td>{leave.employee.firstName} {leave.employee.lastName}</td>
                            <td>{leave.employee.department}</td>
                            <td>{leave.reason}</td>
                            <td>{leave.start_date}</td>
                            <td>{leave.end_date}</td>
                            <td><span className="status approved">{leave.status}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
  
export { ApprovedLeaves };
