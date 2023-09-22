const express = require("express");
const authController = require("../controllers/authController");
const crudController = require("../controllers/curdController");
const { route } = require("./routes");
const router = express.Router();

// Auhentication
router.post("/login", authController.login);
router.post("/register", authController.register);

// Crud Operation
router.get("/readValue", crudController.readValue);
router.post("/createValue", crudController.createValue);
router.put("/updateValue/:name", crudController.updateValue);
router.delete("/deleteValue/:name", crudController.deleteValue);

module.exports = router;
