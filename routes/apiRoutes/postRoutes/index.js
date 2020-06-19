const router = require("express").Router();
const auth = require("../../../middlewares/auth");
const {
  userPost,
  getAllPosts,
  getPostById,
  deletePostById,
  userComment,
  deleteCommentById,
} = require("../../../controllers/postController");
router.post("/", auth, userPost);
router.get("/", auth, getAllPosts);
router.get("/:id", auth, getPostById);
router.delete("/:id", auth, deletePostById);
router.post("/comment/:id", auth, userComment);
router.delete("/comment/:id/:comment_id", auth, deleteCommentById);

module.exports = router;
