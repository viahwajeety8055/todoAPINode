const express = require("express");
const con = require("./config/database");
const router = require("./routes/route");
const app = express();
require("dotenv").config();

app.use("/", router);

app.listen("8000", () => {
  console.log("Server is listening....");
});
