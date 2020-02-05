const router = require("express").Router();

const Assistant = require("./assistant-model.js");
const Flights = require("../../flights/flight-model.js");
const Auth = require("../../middleware/auth-mw.js");

//GET PARENT INFO by ID
router.get("/", Auth, (req, res) => {
  const id = req.user.id;
  Assistant.findById(id)
    .then(user => {
      res.json(user);
    })
    .catch(err => res.send(err));
});

//Find all flights needing assistance
router.get("/availableFlights", Auth, (req, res) => {
  // console.log(req.user, "req.user line 9 trip-router");
  // const id = req.user.id;
  Flights.findFlightsNeedingHelp()
    .then(flight => {
      res.json(flight);
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Error locating flights needing assistance" });
    });
});

//Find all flights I'm helping with
router.get("/myFlights", Auth, (req, res) => {
  // console.log(req.user, "req.user line 9 trip-router");
  const id = req.user.id;
  Flights.findFlightsImWorking(id)
    .then(flight => {
      res.json(flight);
    })
    .catch(err => res.send(err));
});

//UPDATE a flight to add assistant id
router.put("/helpWithFlight/:id", Auth, (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  console.log(id, "id line 48");
  console.log(changes, "changes linr 49");

  Flights.findById(id)
    .then(flight => {
      // console.log(flight, "id line 53");
      if (flight) {
        Flights.editFlightAddAssistant(id, changes)
          .then(updated => {
            //need to run a get request to display updated data
            res.status(203).json({ message: "information updated" });
          })
          .catch(err => {
            res.status(500).json(err.message);
          });
      } else {
        res
          .status(404)
          .json({ message: "Could not find flight with given id" });
      }
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

// router.get("/bydept", Auth, (req, res) => {
//   //console.log(req.user);
//   Asst.findBy(req.user.department)
//     .then(users => {
//       res.json(users);
//     })
//     .catch(err => res.send(err));
// });

module.exports = router;
