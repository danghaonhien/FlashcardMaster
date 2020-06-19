const router = require("express").Router();
const auth = require("../../../middlewares/auth");
const { getScore } = require("./../../../controllers/questionController");
router.route("/").get(auth, getScore);
module.exports = router;
