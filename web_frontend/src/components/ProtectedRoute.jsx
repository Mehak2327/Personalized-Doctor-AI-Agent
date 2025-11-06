import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../firebase"; // your Firebase setup

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup listener when component unmounts
    return () => unsubscribe();
  }, []);

  // While checking Firebase authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        <h2 className="text-xl font-semibold animate-pulse">
          Checking authentication...
        </h2>
      </div>
    );
  }

  // If user exists, allow access
  if (user) {
    return children;
  }

  // Otherwise, redirect to login with remembered path
  return <Navigate to="/login" replace state={{ from: location.pathname }} />;
}
