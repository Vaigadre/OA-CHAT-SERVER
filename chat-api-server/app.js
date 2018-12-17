const express = require("express");
//const cors = require("cors");
const bodyParser = require("body-parser");
const indexRouter = require("./routers/index.route");

const app = express();
app.use(bodyParser.json());
//app.use(cors());

app.get("/", (req, res) => {
  res.send("chat api service is up and running.");
});

app.use("/api", indexRouter);

process.on("unhandledRejection", error => {
  console.error("Unhandled Promise Rejection: ", error);
});

process.on("uncaughtException", error => {
  console.error("Unhandled exception: ", error);
});

module.exports = app;
