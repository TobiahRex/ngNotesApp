'use strict';

let mongoose = require('mongoose');

let noteSchema = new mongoose.Schema({
  noteId      :   {type : Number},
  userId      :   {type : Number},
  categoryId  :   {type : Number},
  description :   {type : String},
  content     :   {type : String},
  title       :   {type : String}
});

noteSchema.statics.newNote = (noteobj, cb) => {
  if(!noteInfo) return cb({ERROR : 'New note info INVALID.'});
  Note.create(noteObj, cb);
};

noteSchema.statics.locate = (noteId, cb) => {
  if(!noteId) return cb({ERROR : 'Required ID not present.'});
  Note.findById(noteId, (err, dbNote) => {
    err ? cb(err) : cb(null, dbNote);
  });
};

noteSchema.statics.update = (noteInfo, cb) => {
  if(!noteInfo) return cb({ERROR : 'NOTHING to append.'});
  Note.findById(noteInfo.id, (err, dbNote)=>{
    err ? cb(err) :
  });
};




var Note = mongoose.model('Note', noteSchema);
module.exports = Note;
