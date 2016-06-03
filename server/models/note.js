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

noteSchema.statics.newNote = (noteObj, cb) => { // noteObj = Full Schema Obj
  if(!noteObj) return cb({ERROR : 'New note object INVALID.'});
  Note.create(noteObj, cb);
};

noteSchema.statics.locate = (noteId, cb) => { // noteId = '_id'
  if(!noteId) return cb({ERROR : 'Required ID not present.'});
  Note.findById(noteId, (err, dbNote) => {
    err ? cb(err) : cb(null, dbNote);
  });
};

noteSchema.statics.update = (updatedNote, cb) => { // updateNote = 'Full schema Obj to replace old Obj'.
  if(!updatedNote) return cb({ERROR : 'NOTHING to append.'});
  Note.findByIdAndUpdate(updatedNote._id, {$set : updatedNote }, (err, updatedDbNote)=>{
    err ? cb(err) : cb(null, updatedDbNote);
  });
};

noteSchema.statics.remove = (noteId, cb) => {  // noteId = '_id'
  if(!noteId) return cb({ERROR : 'Required ID not present.'});
  Note.findByIdAndRemove(noteId, (err, oldNote) => {
    err ? cb(err) : cb(null, {SUCCESS : 'Deleted!', NOTE : oldNote});
  });
};

var Note = mongoose.model('Note', noteSchema);
module.exports = Note;
