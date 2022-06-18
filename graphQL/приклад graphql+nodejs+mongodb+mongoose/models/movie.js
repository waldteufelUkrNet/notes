const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;

const movieSchema = new Schema({
  name: String,
  genre: String,
  directorId: String
});

module.exports = mongoose.model('Movie', movieSchema);