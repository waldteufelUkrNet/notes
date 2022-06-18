const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;

const directorSchema = new Schema({
  name: String,
  age: Number
});

module.exports = mongoose.model('Director', directorSchema);