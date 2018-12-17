const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    id: { type: "String" },
    userId: { type: "String", required: true, index: { unique: true } },
    online: { type: "Boolean", required: true, default: false },
    lastSeenTime: { type: "Date", default: Date.now }
  },
  {
    versionKey: false
  }
);

const User = (module.exports = mongoose.model("User", userSchema));
