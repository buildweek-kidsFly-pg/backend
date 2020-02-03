//General Imports
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

//Router Imports
const parentRouter = require("../users/parent/parent-router.js");
const assistantRouter = require("../users/assistant/assistant-router.js");
const flightRouter = require("../flights/flight-router.js");
// const userTrips = require('../trips/trips.js');

//Create server w/express
const server = express();

//Server uses
server.use(helmet());
server.use(express.json());
server.use(cors());

//Server use routers
// server.use('/api/auth/users/parent', parentRouter);
// server.use('/api/auth', authRouter);
// server.use('/api/auth/admin', authAdmin);
// server.use('/api/trips', userTrips);

server.get("/", (req, res) => {
  res.send("KidsFly is spinning up...please wait!");
});

module.exports = server;
