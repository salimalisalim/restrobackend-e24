const express = require("express");
const router = express.Router();
const upload = require("../middlewares/fileUpload");
const { registerRestaurant, getRestaurants } = require("../controllers/restaurantController");
const { verifyToken } = require("../middlewares/auth");

router.route("/restaurant").post(verifyToken,upload.single('selectedPic'), registerRestaurant);
router.route("/restaurants").get(getRestaurants);

module.exports = router;