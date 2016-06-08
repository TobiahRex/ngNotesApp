'use strict';

let mongoose = require('mongoose');
let Note     = require('./note');
let ObjectId = mongoose.Schema.Types.ObjectId;

let userSchema = new mongoose.Schema({
  name  :   {first  : String, last : String},
  bio   :   {type   : String},
  job   :   {type   : String},
  notes :   [{ type : ObjectId, ref : 'Note'}]
});

userSchema.statics.newUser = (userObj, cb) => {
  if(!userObj) return cb({ERROR : 'Missing required info.'});
  User.create(userObj, cb);
};

userSchema.statics.locate = (userId, cb) => {
  if(!userId) return cb({ERROR: 'User Id not provided.'});
  User.findById(userId, (err, dbUser) => {
    err ? cb(err) : cb(null, dbUser);
  });
};

userSchema.statics.update = (updateUser, cb) => {
  if(!updateUser) return cb({ERROR : 'User id note provided.'});
  User.findByIdAndUpdate(updateUser.id, { $set : updateUser.body}, (err, outdatedDbUser) => {
    err ? cb(err) : User.findById(outdatedDbUser._id, (err, savedDbUser) => {
      err ? cb(err) : cb(null, savedDbUser);
    });
  });
};

userSchema.statics.removeOne = (userId, cb) => {
  if(!userId) return cb({ERROR : 'Updated user not provided'});
  User.findByIdAndRemove(userId, (err, oldNote) => {
    err ? cb(err) : cb(null, {SUCCESS : `DELETED => ${oldNote}`});
  });
};

let User = mongoose.model('User', userSchema);
module.exports = User;
