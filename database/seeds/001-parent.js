const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return (
    knex("parent")
      // .del()
      .then(function() {
        // Inserts seed entries
        return knex("parent").insert([
          {
            id: 1,
            email: "lonestar@test.com",
            password: bcrypt.hashSync("pass", 3),
            first_name: "Lonestar",
            last_name: "winnebago",
            address: "123 state st nunya, bidnes 12345",
            phone: "123-456-7890",
            p_home_airport: "WIN"
          },
          {
            id: 2,
            email: "barf@test.com",
            password: bcrypt.hashSync("pass", 3),
            first_name: "barfollowmew",
            last_name: "barfington",
            address: "456 state st nunya, bidnes 12345",
            phone: "234-567-8901",
            p_home_airport: "SUN"
          },
          {
            id: 3,
            email: "yogurt@test.com",
            password: bcrypt.hashSync("pass", 3),
            first_name: "yogurt",
            last_name: "the great",
            address: "789 state st nunya, bidnes 12345",
            phone: "345-678-9012",
            p_home_airport: "MAR"
          },
          {
            id: 4,
            email: "parent@test.com",
            password: bcrypt.hashSync("pass", 3),
            first_name: "yogurt",
            last_name: "the magnificant",
            address: "789 state st nunya, bidnes 12345",
            phone: "345-678-9012",
            p_home_airport: "DRU"
          }
        ]);
      })
  );
};
