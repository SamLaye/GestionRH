// TotalLeaves.js
import React from 'react';
import './NestedCom.css'; 

const TotalLeaves = ({ leavesData }) => {
  return (
    <div className="total-leaves-modal">
      <h2>Total Leaves</h2>
      <table className="total-leaves-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Department</th>
            <th>Date</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leavesData.map((leave, index) => (
            <tr key={leave.id}>
              <td>{index + 1}</td>
              <td>{leave.name}</td>
              <td>{leave.department}</td>
              <td>{leave.date}</td>
              <td>{leave.reason}</td>
              <td>
                <span className={`status-tag ${leave.status.toLowerCase()}`}>
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
