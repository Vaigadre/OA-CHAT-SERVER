const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    id: { type: "String" },
    chatId: { type: "String", required: true, index: true },
    sender: { type: "String", required: true },
    message: { type: "String", default: "" }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Message = (module.exports = mongoose.model("Message", messageSchema));
