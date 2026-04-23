<div className="p-8">

  <h1 className="text-4xl font-bold text-gray-800 mb-6">
    Vehicle Management Dashboard
  </h1>

  {/* Cards */}
  <div className="grid grid-cols-3 gap-6 mb-8">

    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
      <h2 className="text-gray-500">Total Vehicles</h2>
      <p className="text-3xl font-bold">{vehicles.length}</p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
      <h2 className="text-gray-500">Cars</h2>
      <p className="text-3xl font-bold">
        {vehicles.filter(v => v.vehicleType === "Car").length}
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
      <h2 className="text-gray-500">Bikes</h2>
      <p className="text-3xl font-bold">
        {vehicles.filter(v => v.vehicleType === "Bike").length}
      </p>
    </div>

  </div>

  {/* Add Form */}
  <AddVehicle fetchVehicles={fetchVehicles} />

  {/* Table */}
  <VehicleList vehicles={vehicles} fetchVehicles={fetchVehicles} />

</div>