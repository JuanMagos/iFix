const router = require("express").Router();
const controller = require("../controllers/servicio.controller");
const passport = require("passport");


router.get('', controller.getServicios);
router.post('/', controller.postServicio);
router.patch('/:id', controller.patchServicio);
router.delete('/:id', controller.deleteServicio);

module.exports = router;