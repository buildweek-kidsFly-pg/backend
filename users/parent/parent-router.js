const router = require("express").Router();

const Parent = require("./parent-model.js");
const Trips = require("../../trips/trip-model.js");
const Flights = require("../../flights/flight-model.js");
const Auth = require("../../middleware/auth-mw.js");

//GET PARENT INFO by ID
router.get("/", Auth, (req, res) => {
  const id = req.user.id;
  Parent.findById(id)
    .then(user => {
      res.json(user);
    })
    .catch(err => res.send(err));
});

//GET all TRIPS by ID
router.get("/myTrips", Auth, (req, res) => {
  // console.log(req.user, "req.user line 9 trip-router");
  const id = req.user.id;
  Trips.findTripsByParentId(id)
    .then(trip => {
      res.json(trip);
    })
    .catch(err => res.send(err));
});

//GET my FLIGHTS by ID
router.get("/myFlights", Auth, (req, res) => {
  // console.log(req.user, "req.user line 9 trip-router");
  const id = req.user.id;
  Flights.findFlightsByParentId(id)
    .then(flight => {
      res.json(flight);
    })
    .catch(err => res.send(err));
});

//PUT/EDIT my INFO
router.put("/", Auth, (req, res) => {
  // console.log(req.user, "req.user line 9 trip-router");
  const changes = req.body;
  const id = req.user.id;
  // console.log(changes, "changes");
  // console.log(req.user.id, "id");
  Parent.edit(id, changes)
    .then(info => {
      if (info) {
        res.status(200).json({ info: changes });
      } else {
        res.status(404).json({ message: "Error getting user info" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error updating user info" });
    });
});

//PUT/EDIT my FLIGHTS
router.put("/", Auth, (req, res) => {
  // console.log(req.user, "req.user line 9 trip-router");
  const changes = req.body;
  const id = req.user.id;
  // console.log(changes, "changes");
  // console.log(req.user.id, "id");
  Flights.edit(req.user.id, changes)
    .then(info => {
      if (info) {
        res.status(200).json({ info: changes });
      } else {
        res.status(404).json({ message: "Error getting user info" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error updating user info" });
    });
});

module.exports = router;
