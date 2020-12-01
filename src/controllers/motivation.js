/**
 * Sample Data Set
 *
 * Action:
 *    title: String
 *    description: String
 */
const motivation = [
  {
    title: "Drink Water",
    description:
      "Drinking a full glass (8oz.+) of cold water can help perk you up, and it may give you just the boost you are looking for!"
  },
  {
    title: "Cool Shower",
    description: "Take a cooler shower than you are used to."
  },
  {
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
 */
function getAll() {
  return motivation;
}

module.exports = {
  getAll
};
