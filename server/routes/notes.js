'use strict';

let express = require('express');
let router = express.Router();
let Note = require('../models/note.js');

router.route('/')
.get((req, res) => {
  Note.find({}, res.handle);
})
.post((req, res) => {
  Note.newNote(req.body, res.handle);
})
.delete((req, res) => {
  Note.remove(res.handle);
});


router.route('/:id')
.get((req, res) => {
  Note.locate(req.params.id, res.handle);
})
.put((req, res) => {
  Note.update({body : req.body, id : req.params.id}, res.handle);
})
.delete((req, res) => {
  Note.removeOne(req.params.id, res.handle);
});

module.exports = router;
