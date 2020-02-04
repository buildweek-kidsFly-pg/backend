exports.up = function(knex) {
  return knex.schema.createTable("assistant", tbl => {
    tbl.increments();

    tbl
      .string("email", 128)
      .notNullable()
      .unique();

    tbl.string("password", 128).notNullable();

    tbl.string("first_name", 128).notNullable();

    tbl.string("last_name", 128).notNullable();

    tbl.string("a_home_airport", 30).notNullable();

    tbl.boolean("available").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("assistant");
};
