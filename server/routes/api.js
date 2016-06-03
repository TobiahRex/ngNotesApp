'use strict';

let express = require('express');
let router  = express.Router();

router.use('/users', require('./users'));
router.use('/categories', require('./categories'));
router.use('/notes', require('./notes'));

module.exports = router;
