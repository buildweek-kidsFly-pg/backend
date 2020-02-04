const router = require("express").Router();

const Asst = require("./assistant-model.js");
const Auth = require("../../middleware/auth-mw.js");

router.get("/", Auth, (req, res) => {
  //console.log(req.user);
  Asst.find()
    .then(user => {
      res.json(user);
    })
    .catch(err => res.send(err));
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
