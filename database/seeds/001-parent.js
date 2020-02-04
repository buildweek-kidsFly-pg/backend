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
            email: "parent@test.com",
            password: bcrypt.hashSync("pass", 3),
            first_name: "test",
            last_name: "testing",
            address: "123 state st nunya, bidnes 12345",
            phone: "123-456-7890",
            p_home_airport: "FUN"
          }
        ]);
      })
  );
};
