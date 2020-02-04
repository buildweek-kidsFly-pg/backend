exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        {
          email: "assistant@test.com",
          password: "pass",
          first_name: "test",
          last_name: "testing",
          phone: "123-456-7890",
          p_home_airport: "FUN"
        }
      ]);
    });
};
