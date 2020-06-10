const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  google:Number,
  name:String,
  email: String,
  password:String,
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('User', UserSchema);