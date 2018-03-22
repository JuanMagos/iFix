var express = require('express');
var router = express.Router();
const controller = require("../controllers/review.controller");

router.get('/review/', controller.getReviews);
router.post('/review/', controller.postReview);
router.patch('/review/:id', controller.patchReview);

module.exports = router;