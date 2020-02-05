const bcrypt = require("bcryptjs");
// pass = bcrypt.hashSync("pass", 3);
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return (
    knex("assistant")
      // .del()
      .then(function() {
        // Inserts seed entries
        return knex("assistant").insert([
          {
            id: 1,
            email: "pres@test.com",
            password: bcrypt.hashSync("pass", 3),
            first_name: "president",
            last_name: "skroob",
            phone: "123-456-7890",
            a_home_airport: "SUN",
            available: false
          },
          {
            id: 2,
            email: "vespa@test.com",
            password: bcrypt.hashSync("pass", 3),
            first_name: "princess",
            last_name: "vespa",
            phone: "234-567-8901",
            a_home_airport: "DRU",
            available: false
          },
          {
            id: 3,
            email: "sandurz@test.com",
            password: bcrypt.hashSync("pass", 3),
            first_name: "colonel",
            last_name: "sandurz",
            phone: "345-678-9012",
            a_home_airport: "DUN",
            available: false
          },
          {
            id: 4,
            email: "assistant@test.com",
            password: bcrypt.hashSync("pass", 3),
            first_name: "test4",
            last_name: "testing4",
            phone: "123-456-7890",
            a_home_airport: "FUN",
            available: true
          }
        ]);
      })
  );
};
