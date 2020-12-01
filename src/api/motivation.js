const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json({ message: "Hello motivation!" });
});

module.exports = router;
