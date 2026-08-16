import React, { useState } from 'react';
import axios from 'axios';

function Login({ setIsLoggedIn, setIsRegistered }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });

      localStorage.setItem('token', res.data.token);
      alert("Login successful ✅");
      setIsLoggedIn(true);
    } catch (error) {
      alert("Login failed ❌");
    }
  };

  return (
  <div className="container">
    <h2>🌾 Farmer Login</h2>

    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

    <button onClick={handleLogin}>Login</button>
    <p>Don't have an account?</p>
<button onClick={() => setIsRegistered(false)}>Register</button>
  </div>
);
}

export default Login;