const router = require("express").Router();
const Service = require("../models/Service");

// ADD SERVICE
router.post("/", async (req, res) => {
  const service = new Service(req.body);
  await service.save();
  res.json(service);
});

// GET ALL SERVICES
router.get("/", async (req, res) => {
  const data = await Service.find().populate("vehicleId");
  res.json(data);
});

module.exports = router;