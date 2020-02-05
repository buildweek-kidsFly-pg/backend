const db = require("../database/dbConfig.js");

module.exports = {
  add,
  find,
  findFlightsByParentId,
  findByUser,
  findById,
  remove,
  edit
};

function find() {
  return db("flight_info"); //.select("id", "name");
}

function findFlightsByParentId(filter) {
  return db("flight_info").where("flight_info_parent_id", filter);
  // .select("id", "username", "department");
}

function findByUser(filter) {
  return db("flight_info").where("flight_info.email", filter);
  // .select("id", "username", "department");
}

function findById(id) {
  return db("flight_info")
    .where({ id })
    .first();
}

async function add(user) {
  const [id] = await db("flight_info").insert(user, "id");

  return findById(id);
}

function remove(id) {
  return db("flight_info")
    .where("id", id)
    .del();
}

function edit(id, changes) {
  return db("flight_info")
    .where({ id })
    .update(changes);
}
