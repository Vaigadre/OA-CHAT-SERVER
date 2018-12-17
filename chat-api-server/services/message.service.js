const Message = require("../models/message.model");
const _ = require("lodash");

module.exports.find = function(query) {
  return Message.find(query).lean();
};

module.exports.create = function(msg) {
  return Message.create(msg);
};

module.exports.delete = function(query) {
  return Message.deleteMany(query);
};
