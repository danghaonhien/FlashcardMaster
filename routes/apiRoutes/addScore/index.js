const router = require("express").Router();
const auth = require("../../../middlewares/auth");
const {
  addScore,
  getScore,
} = require("./../../../controllers/questionController");
router.post("/", auth, addScore);
router.get("/", auth, getScore);
module.exports = router;
