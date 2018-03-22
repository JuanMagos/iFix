const Servicio = require("../models/Servicio");


exports.patchServicio = (req,res,next)=>{
  Servicio.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(item=>res.status(200).json(item))
  .catch(e=>res.status(500).send(e));
}

exports.getServicios = function(req, res, next) {
    Servicio.find()
    .then(items=>res.status(200).json(items))
    .catch(e=>res.status(500).send(e));
  }

  exports.postServicio = (req, res, next)=>{
    const newServicio = new Servicio({
      title: req.body.title,
      model: req.body.model,
      description: req.body.description,
      image: req.body.image
    });

    newServicio.save()
    .then(item=>res.status(201).json(item))
    .catch(e=>res.status(500).send(e));

  }

  exports.deleteServicio = (req,res,next)=>{
    Serviio.findByIdAndRemove(req.params.id)
    .then(servicios=>res.status(200).json(servicios))
    .catch(e=>res.status(500).send(e));
  }