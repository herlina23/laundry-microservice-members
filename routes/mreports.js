const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();

const { showMember, showUser } = require("../controllers/mreport");

router.use(verifyToken);
router.get("/", showMember);
router.get("/", showUser);

module.exports = router;
