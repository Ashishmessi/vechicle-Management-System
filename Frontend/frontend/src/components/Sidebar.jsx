function Sidebar() {
  return (
    <div className="h-full bg-gradient-to-b from-blue-900 to-blue-700 text-white p-6 shadow-lg">

      <h1 className="text-3xl font-bold mb-10 text-center">🚗 VMS</h1>

      <ul className="space-y-4">
        <li className="p-3 rounded-lg hover:bg-blue-600 cursor-pointer transition">
          Dashboard
        </li>
        <li className="p-3 rounded-lg hover:bg-blue-600 cursor-pointer transition">
          Vehicles
        </li>
        <li className="p-3 rounded-lg hover:bg-blue-600 cursor-pointer transition">
          Add Vehicle
        </li>
      </ul>

    </div>
  );
}