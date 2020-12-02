const router = require("express").Router();
const motivation = require("../controllers/motivation");

router.get("/", async (req, res, next) => {
  try {
    const data = await motivation.getAll();
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.get("/random", async (req, res, next) => {
  try {
    const data = await motivation.getRandom();
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.get("/find", async (req, res, next) => {
  try {
    const data = await motivation.getMotivationByAction(req.query.action);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = await motivation.addMotivation(req.body);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
