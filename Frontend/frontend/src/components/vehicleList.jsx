import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function Vehicles() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/vehicles")
      .then(res => setData(res.data));
  }, []);

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="container mt-4">

        {/* 🔥 HEADER + ADD BUTTON */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>🚗 Vehicles</h3>

          <Link to="/add-vehicle" className="btn btn-primary">
            + Add Vehicle
          </Link>
        </div>

        {/* 📋 TABLE */}
        <div className="card shadow p-3">
          <table className="table table-striped text-center">
            <thead className="table-dark">
              <tr>
                <th>Owner</th>
                <th>Reg Number</th>
                <th>Rent (₹/hr)</th>
              </tr>
            </thead>

            <tbody>
              {data.map(v => (
                <tr key={v._id}>
                  <td>{v.ownerName}</td>
                  <td>{v.regNumber}</td>
                  <td>₹{v.rentPerHour}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Vehicles;