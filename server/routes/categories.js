'use strict';

let express = require('express');
let router = express.Router();

router.route('/')
.get((req, res) => {
  res.send('all the categories');
});

module.exports = router;
