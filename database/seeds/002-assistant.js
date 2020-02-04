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
            email: "assistant@test.com",
            password: bcrypt.hashSync("pass", 3),
            first_name: "test",
            last_name: "testing",
            phone: "123-456-7890",
            a_home_airport: "FUN",
            available: false
          }
        ]);
      })
  );
};
