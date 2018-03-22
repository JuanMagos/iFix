
const Review = require("../models/Review");


exports.patchReview = (req,res,next)=>{
  Review.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(item=>res.status(200).json(item))
  .catch(e=>res.status(500).send(e));
}

exports.getReviews = function(req, res, next) {
    Review.find()
    .then(items=>res.status(200).json(items))
    .catch(e=>res.status(500).send(e));
  }

  exports.postReview = (req, res, next)=>{
    const newReview = new Review({
      title: req.body.title,
      list: req.body.list
    });

    newReview.save()
    .then(item=>res.status(201).json(item))
    .catch(e=>res.status(500).send(e));

  }