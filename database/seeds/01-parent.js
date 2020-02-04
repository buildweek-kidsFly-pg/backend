exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        {
          email: "parent@test.com",
          password: "pass",
          first_name: "test",
          last_name: "testing",
          address: "123 state st nunya, bidnes 12345",
          phone: "123-456-7890",
          p_home_airport: "FUN"
        }
      ]);
    });
};
