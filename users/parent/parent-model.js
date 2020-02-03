const db = require("../../database/dbConfig.js");

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
  return db("parent").select("id", "email");
}

function findBy(filter) {
  return db("parent").where(filter);
  // .select("id", "username", "department");
}

function findByUser(filter) {
  return db("parent").where("parent.email", filter);
  // .select("id", "username", "department");
}

function findById(id) {
  return db("parent")
    .where({ id })
    .first();
}

async function add(user) {
  const [id] = await db("parent").insert(user, "id");

  return findById(id);
}

function remove(id) {
  return db("parent")
    .where("id", id)
    .del();
}

function edit(id, changes) {
  return db("parent")
    .where({ id })
    .update(changes);
}
