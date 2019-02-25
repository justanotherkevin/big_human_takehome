const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
  name: { type: String, require: true },
  details: { type: String },
  avatar: { type: String },
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      name: { type: String },
      avatar: { type: String },
      text: {
        type: String,
        required: true
      },
    }
  ]
});

module.exports = Plant = mongoose.model('plant', PlantSchema);
