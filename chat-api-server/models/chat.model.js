const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    id: { type: "String" },
    participants: { type: [String], required: true }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Chat = (module.exports = mongoose.model("Chat", chatSchema));
