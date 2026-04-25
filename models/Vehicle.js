const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  ownerName: String,
  regNumber: String,
  vehicleType: String,
  rentPerHour: Number,
  lastServiceDate: Date,
  nextServiceDate: Date,
  status: { type: String, default: "Active" }
});

module.exports = mongoose.model("Vehicle", vehicleSchema);