import React from 'react';
import  './pendingleaves.css'

const PendingLeaves = ({ leavesData, approveLeave }) => {
  // Filtre les données pour obtenir seulement les congés en attente
  const pendingLeaves = leavesData.filter(leave => leave.status === 'Pending');

  return (
    <div>
      <h2>Pending Leaves</h2>
      <table className="leaves-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Department</th>
            <th>Date</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pendingLeaves.map((leave, index) => (
            <tr key={leave.id}>
              <td>{index + 1}</td>
              <td>{leave.name}</td>
              <td>{leave.department}</td>
              <td>{leave.date}</td>
              <td>{leave.reason}</td>
              <td><span className="status pending">{leave.status}</span></td>
              <td>
                <button className="approve-btn" onClick={() => approveLeave(leave.id)}>
                  Approve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { PendingLeaves};
