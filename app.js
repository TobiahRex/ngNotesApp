'use strict';

const PORT          = process.env.PORT || 3000;
const MONGOURL      = MONGO_URI || 'mongodb://localhost/ngNotesApp';

let express         = require('express');
let app             = express();
let router          = express.Router();
let server          = require('http').Server(app);
let io              = require('socket-io');
let bodyParser      = require('body-parser');
let morgan          = require('morgan');
let path            = require('path');
let mongoose        = require('mongoose');

// Middleware
app.use(morgan('dev'));
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/index'));

// Listeners
app.listen(PORT, err => {
  console.log(err || `Server on ${PORT}`);
});
mongoose.listen(MONGOURL, err=> {
  console.log(err || `MONGOdb @ ${MONGOURL}`);
});

// Exports
module.exports = app;
