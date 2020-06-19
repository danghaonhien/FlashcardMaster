const router = require("express").Router();
const {
  addFlashcard,
  getUserFlashcards,
  deleteFlashcardById,
} = require("../../../controllers/flashcardController");
const auth = require("../../../middlewares/auth");
router.route("/").get(auth, getUserFlashcards).post(auth, addFlashcard);
router.route("/:flashcardId").delete(auth, deleteFlashcardById);
module.exports = router;
