const router = require("express").Router();
const { addQuestion } = require("../../../controllers/questionController");
const auth = require("../../../middlewares/auth");
router.post("/", auth, addQuestion);
module.exports = router;
