import { useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

function AddVehicle() {
  const [data, setData] = useState({
    ownerName: "",
    regNumber: "",
    vehicleType: "",
    rentPerHour: "",
    lastServiceDate: "",
    nextServiceDate: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/vehicles", data);

    alert("Vehicle Added Successfully");
    navigate("/vehicles");
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="container mt-4">
        <div className="card p-4 shadow">
          <h3 className="mb-3">➕ Add Vehicle</h3>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label>Owner Name</label>
              <input className="form-control"
                onChange={e => setData({...data, ownerName: e.target.value})} />
            </div>

            <div className="mb-3">
              <label>Registration Number</label>
              <input className="form-control"
                onChange={e => setData({...data, regNumber: e.target.value})} />
            </div>

            <div className="mb-3">
              <label>Vehicle Type</label>
              <select className="form-control"
                onChange={e => setData({...data, vehicleType: e.target.value})}>
                <option>Select</option>
                <option>Bike</option>
                <option>Scooty</option>
                <option>Car</option>
              </select>
            </div>

            <div className="mb-3">
              <label>Rent per Hour (₹)</label>
              <input type="number" className="form-control"
                onChange={e => setData({...data, rentPerHour: e.target.value})} />
            </div>

            <div className="mb-3">
              <label>Last Service Date</label>
              <input type="date" className="form-control"
                onChange={e => setData({...data, lastServiceDate: e.target.value})} />
            </div>

            <div className="mb-3">
              <label>Next Service Date</label>
              <input type="date" className="form-control"
                onChange={e => setData({...data, nextServiceDate: e.target.value})} />
            </div>

            <button className="btn btn-success w-100">
              Add Vehicle
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default AddVehicle;