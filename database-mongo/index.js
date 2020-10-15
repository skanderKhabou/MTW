const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movie');

const db = mongoose.connection;

db.on('error', () => { 
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});