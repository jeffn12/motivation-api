const Motivation = require("../db/models/Motivation");

/**
 * Sample Data Set
 *
 * Action:
 *    id: Number (unique)
 *    title: String
 *    description: String
 */
const motivation = [
  {
    id: 1,
    title: "Drink Water",
    description:
      "Drinking a full glass (8oz.+) of cold water can help perk you up, and it may give you just the boost you are looking for!"
  },
  {
    id: 2,
    title: "Cool Shower",
    description: "Take a cooler shower than you are used to."
  },
  {
    id: 3,
    title: "Breathe",
    description:
      "Take 5 deep breaths.  Count to 3 on each inhale, and again on each exhale.  1... 2... 3...  Let's do this!"
  }
];

/**
 * Controller for Motivation API
 *
 * methods to interact with data store, return info usable by API
 */

/**
 * Get All Motivation Actions
 *
 * @returns a Promise for all Motivation documents in db
 */
function getAll() {
  return Motivation.find({});
}

/**
 * Get Random Action
 *
 * @returns single JSON object from motivation actions
 */
async function getRandom() {
  const docCount = await Motivation.countDocuments();
  return Motivation.find({})
    .limit(1)
    .skip(Math.floor(Math.random() * docCount));
}

/**
 * Get Action by ID
 *
 * @param id - id number of the action to be retrieved
 * @returns - a single JSON object if id matches a document,
 *            or an error message if ID doesn't match a document
 */
function getActionByID(id) {
  const action = motivation.filter((action) => action.id === id);
  if (action.length !== 0) {
    return action;
  } else {
    return { message: `No actions were found with ID: '${id}'` };
  }
}

function addMotivation({ action, description }) {
  const newMotivation = new Motivation({
    action,
    description
  });
  return newMotivation.save();
}

module.exports = {
  addMotivation,
  getAll,
  getRandom,
  getActionByID
};
