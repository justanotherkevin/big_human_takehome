const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
  name: { type: String, require: true },
  details: { type: String },
  avatar: { type: String },
});

module.exports = Plant = mongoose.model('plant', PlantSchema);
