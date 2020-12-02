const mongoose = require("mongoose");

mongoose.set("useCreateIndex", true);
mongoose.connect("mongodb://127.0.0.1:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", () => {
  console.error("Database Connection Error");
});
db.once("open", () => console.log("Connected to Database"));

module.exports = db;
