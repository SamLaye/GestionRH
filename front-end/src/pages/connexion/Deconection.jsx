import React, { useState } from 'react';
import axios from 'axios';

const Logout = () => {
  const [logoutStatus, setLogoutStatus] = useState(null);

  const handleLogout = async () => {
    try {
      const response = await axios.post('/api/auth/logout');
      setLogoutStatus(response.data.message);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Déconnexion</button>
      {logoutStatus && <p>{logoutStatus}</p>}
    </div>
  );
};

export default Logout;
