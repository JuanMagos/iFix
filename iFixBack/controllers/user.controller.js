const User = require('../models/User');

exports.signup = (req,res,next)=>{
    User.register(req.body, req.body.password, (err, account)=>{
        if(err) return res.status(500).send(err);
        return res.status(201).json(account);
        });
}

exports.login = (req,res,next)=>{
    res.status(200).json(req.user);
}

exports.logout = (req, res, next) => {
    req.logout();
    res.status(200).json({ message: 'Success' });
  }

exports.loggedin = (req, res, next) => {
    if (req.isAuthenticated()) {
      res.status(200).json(req.user);
      return;
    } 
    res.status(403).json({ message: 'Unauthorized' });
  }

  exports.deleteUser = (req,res,next)=>{
    User.findByIdAndRemove(req.params.id)
    .then(users=>res.status(200).json(users))
    .catch(e=>res.status(500).send(e));
  }
  
  exports.patchUser = (req,res,next)=>{
    User.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(user=>res.status(200).json(user))
    .catch(e=>res.status(500).send(e));
  }
  
  exports.getUsers = function(req, res, next) {
    console.log("dentro")
      User.find()
      .then(users=>res.status(200).json(users))
      .catch(e=>res.status(500).send(e));
    }
  
    exports.postUser = (req, res, next)=>{
      const newUser = new User({
        title: req.body.title,
        card: req.body.cards
      });
  
      newUser.save()
      .then(user=>res.status(201).json(user))
      .catch(e=>res.status(500).send(e));
  
    }