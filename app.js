const express = require("express");
const cors = require("cors");
const path = require("path");
const kioskRoutes = require("./server/dist/routes/kiosk-routes");
const authRoutes = require("./server/dist/auth/routes/auth-routes");
const businessRoutes = require("./server/dist/routes/business-routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname + "/server/public")));
app.use(express.static(path.join(__dirname, "./build")));

app.use("/api/v1/kiosk", kioskRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/business/", businessRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./build", "index.html"));
});

module.exports = app;
