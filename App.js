import React, { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Crops from './pages/Crops';
import Tasks from './pages/Tasks';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [page, setPage] = useState('dashboard');

  if (!isLoggedIn) {
    return isRegistered ? 
      <Login setIsLoggedIn={setIsLoggedIn} setIsRegistered={setIsRegistered} /> :
      <Register setIsRegistered={setIsRegistered} />;
  }

  return (
    <div>
      <Navbar setPage={setPage} setIsLoggedIn={setIsLoggedIn} />

      {page === 'dashboard' && <Dashboard />}
      {page === 'crops' && <Crops />}
      {page === 'tasks' && <Tasks />}
    </div>
  );
}

export default App;