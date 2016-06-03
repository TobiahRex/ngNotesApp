'use strict';

let express     = require('express');
let router      = express.Router();
// let User        = require('../models/user');

router.route('/')
.get((req, res) => {
  // User.find({}, (err, dbUser) => {
  //   res.status(err ? 400 : 200).send(err || dbUser);
  // });
  res.send('all the users');
});

module.exports = router;
