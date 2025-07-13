const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    match: [/.+\@.+\..+/, 'Please fill a valid email address'] 
  },
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' }
}, { timestamps: true });

module.exports = mongoose.model('Guest', guestSchema);
