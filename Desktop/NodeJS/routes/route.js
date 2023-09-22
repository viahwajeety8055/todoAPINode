const express = require("express");
const controller = require("../controllers/controlConnection");
const router = express.Router();

router.get("/getUsers", controller.getAll);
router.get("/getUsers/:id", controller.getEmpById);

module.exports = router;
