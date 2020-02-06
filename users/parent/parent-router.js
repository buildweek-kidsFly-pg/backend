const router = require("express").Router();

const Parent = require("./parent-model.js");
const Flights = require("../../flights/flight-model.js");
const Trips = require("../../trips/trip-model.js");

const Auth = require("../../middleware/auth-mw.js");

/**************************************************************************/
/************************* BEGIN PARENT STUFF *****************************/

//GET PARENT INFO by ID - User type: parent
router.get("/", Auth, (req, res) => {
  const id = req.user.id;
  Parent.findById(id)
    .then(user => {
      res.json(user);
    })
    .catch(err => res.send(err));
});

//UPDATE my INFO - User type: parent
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

// DELETE account - User type: parent
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Parent.findById(id);
    if (user) {
      const deleted = await Parent.remove(id);
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "Error locating id." });
    }
  } catch {
    res
      .status(500)
      .json({ message: "There was an error deleting your account." });
  }
});

/************************* END PARENT STUFF *****************************/

/************************* BEGIN TRIP STUFF *****************************/

//GET all TRIPS by parent ID - User type: parent
router.get("/myTrips", Auth, (req, res) => {
  const id = req.user.id;

  Trips.findTripsByParentId(id)
    .then(trip => {
      res.json(trip);
    })
    .catch(err => res.send(err));
});

//GET TRIPS by trip ID - User type: parent
router.get("/myTrips/:id", Auth, (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  // console.log(id, "id");
  // console.log(userId, "userId");

  if (id !== userId) {
    console.log(id);
    Trips.findTripsByTripId(id)
      .then(flight => {
        res.json(flight);
      })
      .catch(err => {
        console.log(err);
        res.status(404).json(err.message);
      });
  } else {
    res.status(500).json({ err: "message" });
  }
});

//UPDATE TRIPS by trip ID - User type: parent
router.put("/myTrips/:id", Auth, (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  Trips.edit(id, changes)
    .then(info => {
      if (info) {
        res.status(200).json({ info: changes });
      } else {
        res.status(404).json({ message: "Error finding trip" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error updating trip info" });
    });
});

//ADD new TRIP - User type: parent
router.post("/myTrips", (req, res) => {
  let newTrip = req.body;
  console.log(req.body, "req.body");

  Trips.add(newTrip)
    .then(trip => {
      res.status(201).json(trip);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "There was an error adding a new trip." });
    });
});

// DELETE a TRIP - User type: parent
router.delete("/myTrips/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const trip = await Trips.findById(id);
    if (trip) {
      const deleted = await Trips.remove(id);
      res.status(200).json(trip);
    } else {
      res.status(404).json({ message: "That user trip does not exist." });
    }
  } catch {
    res.status(500).json({ message: "There was an error deleting that trip." });
  }
});

/************************* END TRIP STUFF *****************************/

/************************* BEGIN FLIGHT STUFF *****************************/

//GET FLIGHTS by ID - User type: parent
router.get("/myFlights", Auth, (req, res) => {
  const id = req.user.id;

  Flights.findFlightsByParentId(id)
    .then(flight => {
      res.json(flight);
    })
    .catch(err => res.send(err));
});

//GET FLIGHTS by flight ID - User type: parent
router.get("/myFlights/:id", Auth, (req, res) => {
  const { id } = req.params;

  Flights.findFlightsByFlightId(id)
    .then(flight => {
      res.json(flight);
    })
    .catch(err => res.send(err));
});

//UPDATE FLIGHTS by flight ID - User type: parent
router.put("/myFlights/:id", Auth, (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  Flights.edit(id, changes)
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

//ADD new FLIGHT - User type: parent
router.post("/myFlights", (req, res) => {
  let newFlight = req.body;

  Flights.add(newFlight)
    .then(flight => {
      res.status(201).json(flight);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "There was an error adding a new flight." });
    });
});

// DELETE a FLIGHT - User type: parent
router.delete("/myFlights/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const flight = await Flights.findById(id);
    if (flight) {
      const deleted = await Flights.remove(id);
      res.status(200).json(flight);
    } else {
      res.status(404).json({ message: "That user flight does not exist." });
    }
  } catch {
    res
      .status(500)
      .json({ message: "There was an error deleting that flight." });
  }
});
/************************* END FLIGHT STUFF *****************************/

module.exports = router;
