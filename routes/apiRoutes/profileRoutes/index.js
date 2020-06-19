const router = require("express").Router();
const {
  getCurrentUser,
  createProfile,
  getAllProfiles,
  getProfileByUserId,
  deleteProfile,
} = require("../../../controllers/profileController");
const auth = require("../../../middlewares/auth");

// /api/profile/me
router.get("/me", auth, getCurrentUser);

// /api/profile
router.post("/", auth, createProfile);

router.get("/", getAllProfiles);

router.get("/user/:user_id", getProfileByUserId);

router.delete("/", auth, deleteProfile);

module.exports = router;
