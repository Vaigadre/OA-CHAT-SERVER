const User = require("../models/user.model");
const _ = require("lodash");

module.exports.find = function(query) {
  return User.find(query, { userId: 1, lastSeenTime: 1, _id: 0 }).lean();
};

module.exports.create = function(user) {
  if (_.isEmpty(user)) {
    console.error("User cannot be empty.", user);
    throw new Error("User cannot be empty.");
  }
  return User.create(user);
};

module.exports.update = function(user) {
  if (_.isEmpty(user)) {
    console.error("User cannot be empty.", user);
    throw new Error("User cannot be empty.");
  }
  return User.findOneAndUpdate({ userId: user.userId }, user, { new: true });
};
