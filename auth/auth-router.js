const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../database/dbConfig.js");

const Auth = require("./auth-model.js");

const { jwtSecret } = require("../config/secret.js");

//for endpoints beginnings with /api/auth
router.post("/p-register", (req, res) => {
  // router.get("/register", (req, res) => {
  //   res.status(200).json({ err: "test" });

  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 3);
  user.password = hash;

  Auth.add(user)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "There was an error" });
    });
});

router.post("/a-register", (req, res) => {
  // router.get("/register", (req, res) => {
  //   res.status(200).json({ err: "test" });

  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 3);
  user.password = hash;

  Auth.add(user)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "There was an error" });
    });
});

router.post("/p-login", (req, res) => {
  let { email, password } = req.body;
  //console.log(password, "password line 27");
  Auth.findByUser(email)
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

router.post("/a-login", (req, res) => {
  let { email, password } = req.body;
  //console.log(password, "password line 27");
  Auth.findByUser(email)
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

//
function Register(filter) {
  return (
    db("parent").where("parent.email", filter) &&
    db("assistant").where("assistant.email", filter)
  );
  // .select("id", "username", "department");
}

async function Login(user) {
  const [id] =
    (await db("parent").insert(user)) && (await db("assistant").insert(user));

  return findById(id);
}

module.exports = router;
