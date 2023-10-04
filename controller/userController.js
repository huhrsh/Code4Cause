const User = require('../model/user');

module.exports.signUp = function(req,res){
    return res.render('signUp' ,{
        title: "Sign Up"
    })
}

module.exports.signIn = function(req,res){
    return res.render('signIn' ,{
        title: "Sign In"
    })
}

module.exports.create = function(req, res) {
    if (req.body.password != req.body.confirm_password) {
      return res.redirect('back');
    }

    User.findOne({ email: req.body.email })
      .then(existingUser => {
        if (existingUser) {
          return res.redirect('back');
        }
        return User.create(req.body)
          .then(newUser => {
            return res.redirect('/users/sign-in');
          });
      })
      .catch(err => {
        console.log('Error in finding or creating user: ', err);
        return res.redirect('back');
      });
  }

  module.exports.createSession = function(req,res){
    return res.redirect('/');
}

module.exports.destroySession = function(req, res){
    req.logout(function(err) {
      if (err) {
        console.log('Error in destroying the session', err);
        return;
      }
      return res.redirect('/');
    });
}