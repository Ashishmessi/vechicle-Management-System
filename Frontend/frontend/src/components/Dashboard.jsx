import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/dashboard")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="container mt-4">
        <h3 className="mb-4">📊 Dashboard</h3>

        <div className="row">

          {/* VEHICLES */}
          <div className="col-md-4">
            <div 
              className="card text-center p-4 bg-primary text-white shadow"
              style={{ cursor: "pointer", transition: "0.3s" }}
              onClick={() => navigate("/vehicles")}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              <h5>🚗 Vehicles</h5>
              <h2>{data.totalVehicles || 0}</h2>
            </div>
          </div>

          {/* USERS */}
          <div className="col-md-4">
            <div 
              className="card text-center p-4 bg-success text-white shadow"
              style={{ cursor: "pointer", transition: "0.3s" }}
              onClick={() => navigate("/users")}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              <h5>👤 Users</h5>
              <h2>{data.totalUsers || 0}</h2>
            </div>
          </div>

          {/* RENTALS */}
          <div className="col-md-4">
            <div 
              className="card text-center p-4 bg-warning text-dark shadow"
              style={{ cursor: "pointer", transition: "0.3s" }}
              onClick={() => navigate("/rentals")}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              <h5>💰 Rentals</h5>
              <h2>{data.totalRentals || 0}</h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;