const mongoose = require("mongoose");

const activeSchema = new mongoose.Schema({
  symbol: String,
  username: String,
  amount: Number,
  earning: Number,
  planName: String,
  planDuration: Number,
  planPeriod: String,
  percent: Number,
  planCycle: Number,
  daysRemaining: Number,
  referredBy: String,
  serverTime: Number,
  walletName: String,
  walletId: String,
  time: {
    type: Number,
    default: new Date().getTime(),
  },
  image: String,
  online: Boolean,
  status: {
    type: Boolean,
    default: false,
  },
});

const Active = mongoose.model("Active", activeSchema);

module.exports = Active;
