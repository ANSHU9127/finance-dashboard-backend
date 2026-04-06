const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const role = require("../middleware/role");

const recordCtrl = require("../controllers/recordController");
const dashCtrl = require("../controllers/dashboardController");

router.post("/", auth, role("admin"), recordCtrl.create);
router.get("/", auth, recordCtrl.getAll);
router.put("/:id", auth, role("admin"), recordCtrl.update);
router.delete("/:id", auth, role("admin"), recordCtrl.delete);

router.get("/summary", auth, dashCtrl.summary);

module.exports = router;
