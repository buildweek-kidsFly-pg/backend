const jwt = require("jsonwebtoken");

const { jwtSecret } = require("../config/secret.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token, "token line 7");
  console.log(jwtSecret, "jwtsecret");
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        // console.log(err);
        // console.log(token, "token");
        // console.log(decodedToken, "decodedToken line 11");
        //i.e: the token is not valid
        res.status(401).json({ message: "Token error" });
      } else {
        console.log(decodedToken, "decodedToken line 18");
        console.log(req.user, "line 19");
        // req.user = { userEmail: decodedToken.email };
        next();
      }
      // next();
    });
  } else {
    res.status(401).json({ message: "Must be an authorized user" });
  }
};

/*************** For Cookies do it this way ***************/

// const bcrypt = require('bcryptjs');

// const Users = require('../users/users-model.js');

// module.exports = (req, res, next) => {
//   const { username, password } = req.headers;

//   if (username && password) {
//     Users.findBy({ username })
//       .first()
//       .then(user => {
//         if (user && bcrypt.compareSync(password, user.password)) {
//           next();
//         } else {
//           res.status(401).json({ message: 'Invalid Credentials' });
//         }
//       })
//       .catch(error => {
//         res.status(500).json({ message: 'Ran into an unexpected error' });
//       });
//   } else {
//     res.status(400).json({ message: 'No credentials provided' });
//   }
// };
