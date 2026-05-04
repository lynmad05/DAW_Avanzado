const router = require("express").Router();
const ctrl = require("../controllers/venta.controller");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

router.post("/", auth, role(["ADMIN", "VENDEDOR"]), ctrl.create);

module.exports = router;