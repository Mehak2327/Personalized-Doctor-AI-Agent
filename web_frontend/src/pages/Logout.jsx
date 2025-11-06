// src/pages/Logout.jsx

import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; 

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut(); 
      navigate('/', { replace: true }); 
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="text-center mt-6">
      <button onClick={handleLogout} className="px-6 py-3 rounded-md bg-red-600 hover:bg-red-700 text-white font-semibold">
        Logout
      </button>
    </div>
  );
};

export default Logout;
