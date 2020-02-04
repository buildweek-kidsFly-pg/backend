const db = require("../database/dbConfig.js");

module.exports = {
  addParent,
  addAssistant,
  findParent,
  findAssistant,
  findParentById,
  findAssistantById
};

//Parent functions
function findParent(filter) {
  return db("parent").where("parent.email", filter);
}

async function addParent(user) {
  const [id] = await db("parent").insert(user, "id");

  return findParentById(id);
}

function findParentById(id) {
  return db("parent")
    .where({ id })
    .first();
}

//Assistant functions
function findAssistant(filter) {
  return db("assistant").where("assistant.email", filter);
}

async function addAssistant(user) {
  const [id] = await db("assistant").insert(user, "id");

  return findAssistantById(id);
}

function findAssistantById(id) {
  return db("assistant")
    .where({ id })
    .first();
}
