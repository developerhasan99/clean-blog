const router = require("express").Router();

const {
	signupGetController,
	signupPostController,
	loginGetController,
	loginPostController,
	logoutController,
} = require("../controllers/authControllers");

router.get("/login", loginGetController);
// router.post("/login", loginPostController);

router.get("/signup", signupGetController);
router.post("/signup", signupPostController);

// router.get("/logout", logoutController);

module.exports = router;
