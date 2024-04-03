import './NestedCom.css'
const ApprovedLeaves = ({ leavesData }) => {
    // Filtre les données pour obtenir seulement les congés approuvés
    const approvedLeaves = leavesData.filter(leave => leave.status === 'Approved');
  
    return (
      <div>
        <h2>Approved Leaves</h2>
        <table className="leaves-table">
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
            {approvedLeaves.map((leave, index) => (
              <tr key={leave.id}>
                <td>{index + 1}</td>
                <td>{leave.name}</td>
                <td>{leave.department}</td>
                <td>{leave.date}</td>
                <td>{leave.reason}</td>
                <td><span className="status approved">{leave.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export {  ApprovedLeaves };
  