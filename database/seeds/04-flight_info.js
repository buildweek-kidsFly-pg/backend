exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        {
          dep_airport_name: "JFK",
          arr_airport_name: "MIA",
          airline: "one that doesnt crash",
          dep_flight_num: "1234",
          arr_flight_num: "1212",
          dep_time: "10:30",
          arr_time: "13:21",
          help_req_by_p_dep_airport: true,
          help_req_by_p_arr_airport: false,
          asst_sched_dep_airport: true,
          asst_sched_arr_airport: false,
          arrived_dep_airport: false,
          arrived_arr_airport: false,
          en_route_dep_airport: true,
          en_route_arr_airport: false
        }
      ]);
    });
};
