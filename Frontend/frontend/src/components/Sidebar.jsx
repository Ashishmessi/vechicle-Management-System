import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-dark text-white p-3" style={{ width: "220px", height: "100vh" }}>
      <h4>🚗 Admin</h4>

      <Link to="/dashboard" className="d-block text-white mt-3">Dashboard</Link>
      <Link to="/vehicles" className="d-block text-white mt-2">Vehicles</Link>
      <Link to="/add-vehicle" className="d-block text-white mt-2">Add Vehicle</Link>
      <Link to="/rentals" className="d-block text-white mt-2">
  Rentals
</Link>
<Link to="/add-rental" className="d-block text-white mt-2">
  Start Rental
</Link>

<Link to="/service" className="d-block text-white mt-2">
  Service
</Link>
    </div>
    
  );
}

export default Sidebar;