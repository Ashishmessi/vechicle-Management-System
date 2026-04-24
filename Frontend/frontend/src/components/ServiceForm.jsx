import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

function ServiceForm() {
  const [vehicles, setVehicles] = useState([]);
  const [data, setData] = useState({
    vehicleId: "",
    serviceType: "",
    cost: "",
    nextServiceDate: ""
  });

  useEffect(() => {
    axios.get("http://localhost:5000/api/vehicles")
      .then(res => setVehicles(res.data));
  }, []);

  const addService = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/services", data);
    alert("Service Added 🔧");
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="container mt-4">
        <div className="card p-4 shadow">

          <h3 className="mb-3 text-center">🔧 Add Service Details</h3>

          <form onSubmit={addService}>

            <div className="mb-3">
              <label>Select Vehicle</label>
              <select className="form-control"
                onChange={e => setData({...data, vehicleId: e.target.value})}
                required
              >
                <option value="">Select Vehicle</option>
                {vehicles.map(v => (
                  <option key={v._id} value={v._id}>
                    {v.regNumber}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label>Service Type</label>
              <input className="form-control"
                onChange={e => setData({...data, serviceType: e.target.value})}
                required
              />
            </div>

            <div className="mb-3">
              <label>Service Cost (₹)</label>
              <input type="number" className="form-control"
                onChange={e => setData({...data, cost: e.target.value})}
                required
              />
            </div>

            <div className="mb-3">
              <label>Next Service Date</label>
              <input type="date" className="form-control"
                onChange={e => setData({...data, nextServiceDate: e.target.value})}
                required
              />
            </div>

            <button className="btn btn-primary w-100">
              Add Service
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default ServiceForm;