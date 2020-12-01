const router = require("express").Router();
const motivation = require("../controllers/motivation");

router.get("/", (req, res, next) => {
  try {
    const data = motivation.getAll();
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.get("/random", (req, res, next) => {
  try {
    const data = motivation.getRandom();
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", (req, res, next) => {
  try {
    const data = motivation.getActionByID(parseInt(req.params.id));
    res.json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
