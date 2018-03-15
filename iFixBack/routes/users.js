const router = require("express").Router();
const controller = require("../controllers/user.controller");
const passport = require("passport");

router.post('/signup', controller.signup);
router.post('/login', passport.authenticate('local'), controller.login);
router.post('/logout', controller.logout);
router.get('/loggedin', controller.loggedin);

router.get('/', controller.getUsers);
router.post('/', controller.postUser);
router.patch('/:id', controller.patchUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;