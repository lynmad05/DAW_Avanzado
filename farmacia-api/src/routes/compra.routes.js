const router = require("express").Router();
const ctrl = require("../controllers/compra.controller");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

router.post("/", auth, role(["ADMIN", "ALMACEN"]), ctrl.create);

module.exports = router;