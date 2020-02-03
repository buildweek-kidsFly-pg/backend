const router = require("express").Router();

const Trip = require("./trip-model.js");
const Auth = require("../../middleware/auth-mw.js");

router.get("/", Auth, (req, res) => {
  //console.log(req.user);
  Trip.find()
    .then(trip => {
      res.json(trip);
    })
    .catch(err => res.send(err));
});

// router.get("/bydept", Auth, (req, res) => {
//   //console.log(req.user);
//   Trip.findBy(req.user.department)
//     .then(users => {
//       res.json(users);
//     })
//     .catch(err => res.send(err));
// });

module.exports = router;
