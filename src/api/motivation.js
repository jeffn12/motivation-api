const router = require("express").Router();
const motivation = require("../controllers/motivation");

router.get("/", (req, res, next) => {
  res.json(motivation.getAll());
});

module.exports = router;
