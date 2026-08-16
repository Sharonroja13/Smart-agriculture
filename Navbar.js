import React from 'react';

function Navbar({ setPage, setIsLoggedIn }) {
  return (
    <div style={{ background: "#2e7d32", padding: "10px", color: "white" }}>
      <button onClick={() => setPage('dashboard')}>Dashboard</button>
      <button onClick={() => setPage('crops')}>Crops</button>
      <button onClick={() => setPage('tasks')}>Tasks</button>
      <button onClick={() => setIsLoggedIn(false)}>Logout</button>
    </div>
  );
}

export default Navbar;