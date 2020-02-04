exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        {
          trip_name: "test trip",
          kids_traveling: "2",
          checked_bags: "3",
          carryon_bags: "3",
          carseats: "1",
          strollers: "1",
          notes: "nothing to add here"
        }
      ]);
    });
};
