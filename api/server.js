//General Imports
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

//Router Imports
// const parentRouter = require('../parent/parent-router.js');
// const authRouter = require('../auth/auth-router.js');
// const authAdmin = require('../auth/auth-admin.js');
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
