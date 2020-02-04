const router = require("express").Router();

const Flight = require("./flight-model.js");
const Auth = require("../middleware/auth-mw.js");

router.get("/", Auth, (req, res) => {
  //console.log(req.user);
  Flight.find()
    .then(flight => {
      res.json(flight);
    })
    .catch(err => res.send(err));
});

// router.get("/bydept", Auth, (req, res) => {
//   //console.log(req.user);
//   Flight.findBy(req.user.department)
//     .then(users => {
//       res.json(users);
//     })
//     .catch(err => res.send(err));
// });

module.exports = router;
