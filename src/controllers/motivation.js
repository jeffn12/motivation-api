const Motivation = require("../db/models/Motivation");

/**
 * Controller for Motivation API
 *
 * methods to interact with data store, return info usable by API
 */

/**
 * Get All Motivation Actions
 *
 * @returns {Promise} for all Motivation documents in db
 */
function getAll() {
  return Motivation.find({});
}

/**
 * Get Random Action
 *
 * @returns {Promise} for a single random JSON object from motivation actions
 */
async function getRandom() {
  const docCount = await Motivation.countDocuments();
  return Motivation.find({})
    .limit(1)
    .skip(Math.floor(Math.random() * docCount));
}

/**
 * Get Motivation by Action (name)
 *
 * @param {String} action requested action
 * @returns {Promise} results of .find() [array with document object if found, or empty if not found]
 */
async function getMotivationByAction(action) {
  return Motivation.find({ action });
}

/**
 * Add New Motivation Document to DB
 *
 * @param {String} action main action title
 * @param {String} description description of action, steps to perform, etc.
 */
function addMotivation({ action, description }) {
  const newMotivation = new Motivation({
    action,
    description
  });
  return newMotivation.save();
}

module.exports = {
  getAll,
  getRandom,
  getMotivationByAction,
  addMotivation
};
