const Chat = require("../models/chat.model");
const _ = require("lodash");

module.exports.findOne = function(query) {
  return Chat.findOne(query);
};

module.exports.create = function(chat) {
  if (_.isEmpty(chat)) {
    console.error("Chat cannot be empty.", chat);
    throw new Error("Chat cannot be empty.");
  }
  return Chat.create(chat);
};

module.exports.delete = function(id) {
  return Chat.deleteOne({ _id: id });
};
