const db = require("../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findByUser,
  findById,
  remove,
  edit
};

function find() {
  return db("trips"); //.select("id", "name");
}

function findBy(filter) {
  return db("trips").where(filter);
  // .select("id", "username", "department");
}

function findByUser(filter) {
  return db("trips").where("trips.email", filter);
  // .select("id", "username", "department");
}

function findById(id) {
  return db("trips")
    .where({ id })
    .first();
}

async function add(user) {
  const [id] = await db("trips").insert(user, "id");

  return findById(id);
}

function remove(id) {
  return db("trips")
    .where("id", id)
    .del();
}

function edit(id, changes) {
  return db("trips")
    .where({ id })
    .update(changes);
}
