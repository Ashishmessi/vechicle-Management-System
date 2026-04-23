import { useState } from "react";
import axios from "axios";

function AddVehicle() {
  const [data, setData] = useState({
    ownerName: "",
    vehicleNumber: "",
    vehicleType: "",
    serviceHistory: ""
  });

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  };

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/api/vehicles/add", data);
    alert("Vehicle Added");
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow mb-8">

  <h2 className="text-xl font-semibold mb-4">Add Vehicle</h2>

  <div className="grid grid-cols-4 gap-4">

    <input className="border p-2 rounded-lg focus:outline-blue-500" placeholder="Owner Name" name="ownerName" onChange={handleChange} />

    <input className="border p-2 rounded-lg focus:outline-blue-500" placeholder="Vehicle No" name="vehicleNumber" onChange={handleChange} />

    <input className="border p-2 rounded-lg focus:outline-blue-500" placeholder="Type (Car/Bike)" name="vehicleType" onChange={handleChange} />

    <input className="border p-2 rounded-lg focus:outline-blue-500" placeholder="Service" name="serviceHistory" onChange={handleChange} />

  </div>

  <button
    onClick={handleSubmit}
    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
    Add Vehicle
  </button>

</div>
  );
}

export default AddVehicle;