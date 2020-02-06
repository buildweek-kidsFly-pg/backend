const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Auth = require("./auth-model.js");

const { jwtSecret } = require("../config/secret.js");

/**************************************************************************/

//for endpoints beginnings with /api/auth

/************************* BEGIN PARENT STUFF *****************************/

//REGISTER PARENT
router.post("/p-register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 3);

  user.password = hash;

  Auth.addParent(user)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "There was an error" });
    });
});

//LOGIN PARENT
router.post("/p-login", (req, res) => {
  let { email, password } = req.body;

  Auth.findParent(email)
    .first()
    .then(user => {
      console.log(user, "user line 31");
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = signToken(user);

        res.status(200).json({ token });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "There was an error" });
    });
});

/************************* END PARENT STUFF *****************************/

/************************* BEGIN ASSISTANT STUFF *****************************/

//REGISTER ASSISTANT
router.post("/a-register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 3);

  user.password = hash;

  Auth.addAssistant(user)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "There was an error" });
    });
});

//LOGIN ASSISTANT
router.post("/a-login", (req, res) => {
  let { email, password } = req.body;

  Auth.findAssistant(email)
    .first()
    .then(user => {
      console.log(user, "user line 79");
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = signToken(user);

        res.status(200).json({ token });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "There was an error" });
    });
});

/************************* END ASSISTANT STUFF *****************************/

/************************* BEGIN CREATE TOKEN *****************************/

//Create TOKEN
function signToken(user) {
  console.log(user, "user line 97");
  const payload = {
    id: user.id,
    email: user.email
  };

  const options = {
    expiresIn: "8h"
  };
  return jwt.sign(payload, jwtSecret, options);
}

/************************* END CREATE TOKEN *****************************/

module.exports = router;
