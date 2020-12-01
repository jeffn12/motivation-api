const express = require("express");
const motivation = require("./motivation");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏"
  });
});

router.use("/motivation", motivation);

module.exports = router;
