const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  vehicleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle"
  },
  serviceType: String,
  cost: Number,
  nextServiceDate: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Service", serviceSchema);