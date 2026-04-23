import { useEffect, useState } from "react";
import axios from "axios";

function VehicleList() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/vehicles")
      .then(res => setVehicles(res.data));
  }, []);

  const deleteVehicle = async (id) => {
    await axios.delete(`http://localhost:5000/api/vehicles/delete/${id}`);
    setVehicles(vehicles.filter(v => v._id !== id));
  };

  return (
   <div className="bg-white p-6 rounded-2xl shadow">

  <h2 className="text-xl font-semibold mb-4">Vehicle List</h2>

  <table className="w-full border-collapse">

    <thead>
      <tr className="bg-gray-100 text-left">
        <th className="p-3">Owner</th>
        <th className="p-3">Number</th>
        <th className="p-3">Type</th>
        <th className="p-3">Service</th>
        <th className="p-3">Action</th>
      </tr>
    </thead>

    <tbody>
      {vehicles.map(v => (
        <tr key={v._id} className="border-t hover:bg-gray-50">

          <td className="p-3">{v.ownerName}</td>
          <td className="p-3">{v.vehicleNumber}</td>
          <td className="p-3">{v.vehicleType}</td>
          <td className="p-3">{v.serviceHistory}</td>

          <td className="p-3">
            <button
              onClick={() => deleteVehicle(v._id)}
              className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600">
              Delete
            </button>
          </td>

        </tr>
      ))}
    </tbody>

  </table>

</div>
  );
}

export default VehicleList;