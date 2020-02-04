const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../database/dbConfig.js");

const Auth = require("./auth-model.js");

const { jwtSecret } = require("../config/secret.js");

//for endpoints beginnings with /api/auth

//REGISTER PARENT
router.post("/p-register", (req, res) => {
  // router.get("/register", (req, res) => {
  //   res.status(200).json({ err: "test" });

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

//REGISTER ASSISTANT
router.post("/a-register", (req, res) => {
  // router.get("/register", (req, res) => {
  //   res.status(200).json({ err: "test" });

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

//LOGIN PARENT
router.post("/p-login", (req, res) => {
  let { email, password } = req.body;
  //console.log(password, "password line 27");
  Auth.findParent(email)
    .first()
    .then(user => {
      //console.log(user, "user line 31");
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

//LOGIN ASSISTANT
router.post("/a-login", (req, res) => {
  let { email, password } = req.body;
  console.log(password, "password line 75");
  console.log(email, "email");
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

//Create TOKEN
function signToken(user) {
  const payload = {
    id: user.id,
    name: user.userName,
    department: user.department
  };

  const options = {
    expiresIn: "8h"
  };
  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
