const express = require("express");
const kioskRoutes = require("./server/dist/routes/kiosk-routes");
const authRoutes = require("./server/dist/auth/routes/auth-routes");

const app = express();

app.use(express.json());

app.use("/api/v1/kiosk", kioskRoutes);
app.use("/api/v1/auth", authRoutes);

module.exports = app;
