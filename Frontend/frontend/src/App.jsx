import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import VehicleList from "./components/VehicleList";
import AddVehicle from "./components/AddVehicle";
import Rentals from "./components/Rentals"; 
import Register from "./components/Register";
import AddRental from "./components/AddRental";
import ServiceForm from "./components/ServiceForm";
import Users from "./components/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vehicles" element={<VehicleList />} />
        <Route path="/add-vehicle" element={<AddVehicle />} />

        <Route path="/rentals" element={<Rentals />} />
        <Route path="/add-rental" element={<AddRental />} />
        <Route path="/service" element={<ServiceForm />} />

        {/* ✅ FIXED HERE */}
        <Route path="/users" element={<Users />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;