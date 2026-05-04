const router = require("express").Router();
const ctrl = require("../controllers/medicamento.controller");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

router.post("/", auth, role(["ADMIN"]), ctrl.create);
router.get("/", auth, ctrl.getAll);
router.put("/:id", auth, role(["ADMIN"]), ctrl.update);
router.delete("/:id", auth, role(["ADMIN"]), ctrl.delete);
router.post("/bulk", auth, role(["ADMIN"]), ctrl.createMany);

module.exports = router;