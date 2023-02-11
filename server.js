const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const config = require("./config/db");
const port = process.env.PORT || 8080;
const routes= require("./routes/routes");
const connectDatabase= require("./config/db");
require("dotenv").config();
connectDatabase();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/", routes);
app.get("/", (req, res) => {
  res.json({
    message: "welcome to mock test api",
  });
});
app.listen(port, () => {
    console.log("server started on port " + port);
})