'use strict';

let express = require('express');
let router  = express.Router();
let path    = require('path');

router.use('/', (req, res, next) => {
  let indexPath = path.join(__dirname, '../../app/views/index.html');
  res.sendFile(indexPath);
});

module.exports = router;
