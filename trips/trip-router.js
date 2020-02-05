const router = require("express").Router();

const Parent = require("./trip-model.js");
// const Assistant = require("./trip-model.js");
const Auth = require("../middleware/auth-mw.js");

//GET all PARENT TRIPS by ID
router.get("/", Auth, (req, res) => {
  // console.log(req.user, "req.user line 9 trip-router");
  const id = req.user.id;
  Parent.findByParentId(id)
    .then(trip => {
      res.json(trip);
    })
    .catch(err => res.send(err));
});

//GET all Unscheduled TRIPS for ASSISTANT
// router.get("/", Auth, (req, res) => {
//   //console.log(req.user);
//   Parent.findUnscheduledTrips()
//     .then(trip => {
//       res.json(trip);
//     })
//     .catch(err => res.send(err));
// });

// router.get("/bydept", Auth, (req, res) => {
//   //console.log(req.user);
//   Trip.findBy(req.user.department)
//     .then(users => {
//       res.json(users);
//     })
//     .catch(err => res.send(err));
// });

module.exports = router;
