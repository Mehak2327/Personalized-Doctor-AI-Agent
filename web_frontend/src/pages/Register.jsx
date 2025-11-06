import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!accepted) {
      alert("You must accept Terms & Privacy!");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="text-white flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Register</h1>
      <form onSubmit={handleRegister} className="flex flex-col space-y-4 w-80">
        <input
          type="text"
          placeholder="Name"
          className="p-3 rounded bg-gray-800 text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded bg-gray-800 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password (min 6 characters)"
          className="p-3 rounded bg-gray-800 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="p-3 rounded bg-gray-800 text-white"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={accepted}
            onChange={() => setAccepted(!accepted)}
            className="w-4 h-4"
          />
          <span>I accept Terms of Service & Privacy Policy</span>
        </label>
        <button type="submit" className="bg-green-600 hover:bg-green-700 p-3 rounded font-semibold">Register</button>
      </form>
    </div>
  );
};

export default Register;
