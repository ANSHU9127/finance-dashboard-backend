const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/records", require("./routes/recordRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

module.exports = app;
