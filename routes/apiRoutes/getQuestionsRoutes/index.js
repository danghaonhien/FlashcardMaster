const router = require("express").Router();
const { getQuestions } = require("../../../controllers/getQuestionsController");
const auth = require("../../../middlewares/auth");
router.route("/").get(auth, getQuestions);
module.exports = router;
