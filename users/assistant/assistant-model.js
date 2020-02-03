const db = require("../../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findByUser,
  findById,
  remove
  // edit
};

function find() {
  return db("assistant").select("id", "email", "department");
}

function findBy(filter) {
  return db("assistant").where(filter);
  // .select("id", "username", "department");
}

function findByUser(filter) {
  return db("assistant").where("assistant.email", filter);
  // .select("id", "username", "department");
}

function findById(id) {
  return db("assistant")
    .where({ id })
    .first();
}

async function add(user) {
  const [id] = await db("assistant").insert(user, "id");

  return findById(id);
}

function remove(id) {
  return db("assistant")
    .where("id", id)
    .del();
}
