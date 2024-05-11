const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define Wallet Schema
const TxSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User', //refers to the user modal
    required: true,
  },
  txType: {
    type: String,
    enum:['funding','topup','withdrawal',],
    required: true,
  },
  txAmount: {
    type: Number,
    enum:['funding','topup','withdrawal',],
    required: true,
  },
  txRef: {
    type: String,
    enum:['funding','topup','withdrawal',],
    required: true,
  },
 
  status: {
    type: String,
    enum:['Failed','In  Progress','Success',],
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  }
});


// Create and export Wallet model
module.exports = mongoose.model('Tx', TxSchema);
