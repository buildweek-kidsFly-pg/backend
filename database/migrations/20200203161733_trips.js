exports.up = function(knex) {
  return knex.schema.createTable("trips", tbl => {
    tbl.increments();

    tbl
      .integer("parent_id", 10)
      .unsigned() // << forces integer to be positive
      .notNullable()
      .references("id") // < which column is being referenced?
      .inTable("parent") // << reference the column above in which table?
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    tbl
      .integer("flight_info_id", 10)
      .unsigned() // << forces integer to be positive
      .notNullable()
      .references("id") // < which column is being referenced?
      .inTable("flight_info") // << reference the column above in which table?
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    tbl.string("trip_name", 128).notNullable();

    tbl.string("trip_dates", 128);

    tbl.string("kids_traveling", 128).notNullable();

    tbl.string("checked_bags", 128).notNullable();

    tbl.string("carryon_bags", 128).notNullable();

    tbl.string("carseats", 3).notNullable();
    tbl.string("strollers", 3).notNullable();

    tbl.integer("special_needs", 3);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("trips");
};
