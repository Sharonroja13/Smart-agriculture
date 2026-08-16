import React, { useState } from 'react';
import axios from 'axios';

function Register({ setIsRegistered }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password
      });

      alert("Registration successful ✅");
      setIsRegistered(true); // go to login
    } catch (error) {
      alert("Registration failed ❌");
    }
  };

  return (
  <div className="container">
    <h2>🌾 Farmer Registration</h2>

    <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
    <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

    <button onClick={handleRegister}>Register</button>

    <p>Already have an account?</p>
    <button onClick={() => setIsRegistered(true)}>Go to Login</button>
  </div>
);
}

export default Register;