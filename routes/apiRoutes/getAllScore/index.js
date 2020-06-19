const router = require("express").Router();
const auth = require("../../../middlewares/auth");
const { getAllScore } = require("../../../controllers/questionController");
router.get("/", auth, getAllScore);
module.exports = router;
