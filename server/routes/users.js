'use strict';

let express     = require('express');
let router      = express.Router();
let User        = require('../models/user');

router.route('/')
.get((req, res) => {
  User.find({}, res.handle);
})
.post((req, res) => {
  User.newUser(req.body, res.handle);
})
.delete((req, res) => {
  User.remove(res.handle);
});

router.route('/:id')
.get((req, res) => {
  User.locate(req.params.id, res.handle);
})
.put((req, res) => {
  User.update({body: req.body, id: req.params.id}, res.handle);
})
.delete((req, res) => {
  User.removeOne(req.params.id, res.handle);
});


module.exports = router;
