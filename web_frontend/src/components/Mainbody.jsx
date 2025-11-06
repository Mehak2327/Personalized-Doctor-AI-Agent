

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth } from '../firebase'; 
import '../index.css'; 

const MainBody = () => {
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser); 
    });

    
    return () => unsubscribe();
  }, []);

  return (
    <main className="flex items-center justify-center min-h-[80vh] bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="text-center px-6">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Where Medical Excellence Meets AI Innovation
        </h1>

        
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Get instant medical advice powered by the latest AI technology.
        </p>

        
        <div className="flex justify-center gap-6">
          
          {user ? (
            <Link
              to="/departments"
              className="px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 transition text-white font-semibold"
            >
              Start Now
            </Link>
          ) : (
            <button
              disabled
              className="px-6 py-3 rounded-md bg-gray-700 cursor-not-allowed text-gray-400 font-semibold"
            >
              Start Now (Login Required)
            </button>
          )}

          
          <Link
            to="/login"
            className="px-6 py-3 rounded-md border border-white/20 hover:border-white transition text-white font-semibold"
          >
            Login
          </Link>
        </div>
      </div>
    </main>
  );
};

export default MainBody;
