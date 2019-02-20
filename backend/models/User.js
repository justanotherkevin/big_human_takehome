const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  type: { type: String, default: 'patient' },
  cohorts: { type: Array },
  details: { type: String },
  avatar: { type: String },
  bookmarked: { type: Array },
  date: { type: Date, default: Date.now },
});

module.exports = User = mongoose.model('user', UserSchema);
