const router = require("express").Router();
const motivation = require("../controllers/motivation");

router.get("/", (req, res, next) => {
  res.json(motivation.getAll());
});

router.get("/random", (req, res, next) => {
  res.json(motivation.getRandom());
});

module.exports = router;
