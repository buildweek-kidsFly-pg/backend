//General Imports
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

//Router Imports
const parentRouter = require("../users/parent/parent-router.js");
const assistantRouter = require("../users/assistant/assistant-router.js");
const flightRouter = require("../flights/flight-router.js");
const tripsRouter = require("../trips/trip-router.js");
const authRouter = require("../auth/auth-router.js");

//Create server w/express
const server = express();

//Server uses
server.use(helmet());
server.use(express.json());
server.use(cors());

//Server use routers w/restrictions applied to select routes
server.use("/api/users/parent", parentRouter);
server.use("/api/users/assistant", assistantRouter);
server.use("/api/flights", flightRouter);
server.use("/api/trips", tripsRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.send("KidsFly is spinning up...please wait!");
});

server.get("/api", (req, res) => {
  res.send("/api is spinning up...please wait!");
});

server.get("/api/flights", (req, res) => {
  res.send("To infinity!...And beyond!!!");
});

server.get("/api/trips", (req, res) => {
  res.send("Ooops, nothing to see here!");
});

server.get("/api/auth", (req, res) => {
  res.send("/api/auth is spinning up...please wait!");
});

server.get("/api/users", (req, res) => {
  res.send("/api/users is spinning up...please wait!");
});

server.get("/api/users/assistant", (req, res) => {
  res.send("/api/users/assistant is spinning up...please wait!");
});

server.get("/api/users/parent", (req, res) => {
  res.send("/api/users/parent is spinning up...please wait!");
});

module.exports = server;
