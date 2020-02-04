exports.up = function(knex) {
  return knex.schema.createTable("parent", tbl => {
    tbl.increments();

    tbl
      .string("email", 128)
      .notNullable()
      .unique();

    tbl.string("password", 128).notNullable();

    tbl.string("first_name", 128).notNullable();

    tbl.string("last_name", 128).notNullable();

    tbl.string("address").notNullable();

    tbl.string("phone", 30).notNullable();

    tbl.string("p_home_airport", 30);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("parent");
};
