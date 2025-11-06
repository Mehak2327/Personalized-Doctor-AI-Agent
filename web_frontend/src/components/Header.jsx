import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Watch for authentication changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Logout handler
  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <header className="bg-black text-white px-8 py-4 flex justify-between items-center border-b border-gray-700 shadow-md">
      
      {/* Left Logo / Title */}
      <div className="text-xl font-bold tracking-wide">TechVitals</div>

      {/* Center Title */}
      <div className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">
        Medi Bridge
      </div>

      {/* Right Buttons / Navigation */}
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <div className="text-sm text-gray-300 italic">{user.email}</div>

            {/* ✅ Show AI Assistant only if user is logged in */}
            <Link
              to="/ml-assistant"
              className="bg-gradient-to-r from-green-400/80 to-blue-500/80 px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition"
            >
              AI Assistant
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-sm font-semibold transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {/* Guest users see only these links */}
            <Link
              to="/"
              className="bg-gradient-to-r from-green-500/80 to-yellow-500/80 px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition"
            >
              Home
            </Link>

            <Link
              to="/login"
              className="bg-gradient-to-r from-purple-500/80 to-pink-500/80 px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-gradient-to-r from-blue-500/80 to-cyan-500/80 px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
