const express = require("express");
const kioskRoutes = require("./server/dist/routes/kiosk-routes");

const app = express();

app.use(express.json());

app.use("/api/v1/kiosk", kioskRoutes);

module.exports = app;
