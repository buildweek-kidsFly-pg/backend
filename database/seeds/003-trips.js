exports.seed = function(knex) {
  // Deletes ALL existing entries
  return (
    knex("trips")
      // .del()
      .then(function() {
        // Inserts seed entries
        return knex("trips").insert([
          {
            id: 1,
            trips_parent_id: 1,
            trips_assistant_id: 1,
            trip_name: "test trip",
            kids_traveling: 2,
            checked_bags: 3,
            carryon_bags: 3,
            carseats: 1,
            strollers: 1,
            notes: "nothing to add here"
          }
        ]);
      })
  );
};
