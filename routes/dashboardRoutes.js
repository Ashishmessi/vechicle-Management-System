const router = require("express").Router();
const Vehicle = require("../models/Vehicle");
const User = require("../models/User");
const Rental = require("../models/Rental");

router.get("/", async (req, res) => {
  const totalVehicles = await Vehicle.countDocuments();
  const totalUsers = await User.countDocuments();
  const totalRentals = await Rental.countDocuments();

  res.json({ totalVehicles, totalUsers, totalRentals });
});

module.exports = router;