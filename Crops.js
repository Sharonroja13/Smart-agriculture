import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Crops() {
  const [crops, setCrops] = useState([]);
  const [cropName, setCropName] = useState('');

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
      waterUsage: 10,
      healthStatus: "Healthy"
    });
    fetchCrops();
  };

  const deleteCrop = async (id) => {
    await axios.delete(`http://localhost:5000/api/crops/${id}`);
    fetchCrops();
  };

  return (
    <div className="container">
      <h2>Crops 🌾</h2>

      <input placeholder="Add New Crop" onChange={(e) => setCropName(e.target.value)} />
      <button onClick={addCrop}>Add Crop</button>

      {crops.map(crop => (
        <div className="crop-card" key={crop._id}>
          <p>Name: {crop.cropName}</p>
          <p>Status: {crop.healthStatus}</p>
          <button onClick={() => deleteCrop(crop._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Crops;