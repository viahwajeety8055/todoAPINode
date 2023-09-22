const express = require("express");
const bodyparser = require("body-parser");
const routes = require("./routes/routes");
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use("/api", routes);

app.listen("5000", () => {
  console.log("Connected to Server....");
});
