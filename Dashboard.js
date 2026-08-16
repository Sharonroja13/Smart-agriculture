import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [crops, setCrops] = useState([]);
  const [cropName, setCropName] = useState('');
  const [waterUsage, setWaterUsage] = useState('');
  const [healthStatus, setHealthStatus] = useState('');

  const fetchCrops = async () => {
    const res = await axios.get('http://localhost:5000/api/crops');
    setCrops(res.data);
  };

  useEffect(() => {
    fetchCrops();
  }, []);

  const addCrop = async () => {
    await axios.post('http://localhost:5000/api/crops', {
      cropName,
      waterUsage,
      healthStatus
    });
    fetchCrops();
  };

  const deleteCrop = async (id) => {
    await axios.delete(`http://localhost:5000/api/crops/${id}`);
    fetchCrops();
  };

  const updateCrop = async (id) => {
    const newName = prompt("Enter new crop name:");
    const newWater = prompt("Enter new water usage:");
    const newHealth = prompt("Enter new health status:");

    await axios.put(`http://localhost:5000/api/crops/${id}`, {
      cropName: newName,
      waterUsage: newWater,
      healthStatus: newHealth
    });

    fetchCrops();
  };

  return (
  <div className="container">

      <h2>Farmer Dashboard 🌾</h2>

      <h3>Add Crop</h3>

      <input placeholder="Crop Name" onChange={(e) => setCropName(e.target.value)} />
      <br /><br />

      <input placeholder="Water Usage" onChange={(e) => setWaterUsage(e.target.value)} />
      <br /><br />

      <input placeholder="Health Status" onChange={(e) => setHealthStatus(e.target.value)} />
      <br /><br />

      <button onClick={addCrop}>Add Crop</button>

      <h3>Crop List</h3>

      {crops.map((crop) => (
  <div className="crop-card" key={crop._id}>
    <p><b>{crop.cropName}</b></p>
    <p>💧 Water: {crop.waterUsage}L</p>
    <p>🌱 Health: {crop.healthStatus}</p>

    <button onClick={() => deleteCrop(crop._id)}>Delete</button>
    <button onClick={() => updateCrop(crop._id)}>Update</button>
  </div>
))}
    </div>
  );
}

export default Dashboard;