var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var mongoose = require("mongoose");
var keys = require('./key');
var User = require('../models/user')

passport.serializeUser(function (user, done) {
    // console.log(user);
    done(null, user);
  });
  
  passport.deserializeUser(function (id, done) {
    mongoose.model('User').findById(id, function (err, user) {
      done(err, user);
    });
  });


passport.use(
    new GoogleStrategy({
        clientID:keys.clientID,
        clientSecret:keys.clientSecret,
        callbackURL:'http://localhost:3200/google/login'
},function (accessToken, refreshToken,profile,done) {
    console.log(profile);
    mongoose.model('User').findOne({ google: profile.id }, function (err, user) {
      if (err) {
        throw err;
      }
      if (user) {
        console.log(user+'find');
        return done(null,user);
      } else {
        // var image = profile.photos[0].value.substring(0,profile.photos[0].value.indexOf('?'));
        var newUser ={
          google:profile.id,
          name:profile.displayName,
          // file_attach1:profile.photos[0].value,
          email:profile.emails[0].value
        }
        mongoose.model('User').create(newUser,function (err,userobj) {
          if (err) {
            throw err;
          } else {
            // req.session.user_id = userobj._id;
            console.log(newUser);
            return done(null,userobj);
          }
        })
      }
    });
}
));

