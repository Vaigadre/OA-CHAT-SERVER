const responseBuilder = require("../util/response-builder");
const userService = require("../services/user.service");

/** Get list of all users ever connected to app. */
module.exports.getUsersList = async function(reqBody) {
  const userList = await userService.find(reqBody);
  if (!userList.length) {
    return responseBuilder.successRes({
      message: "No users found for specified criteria."
    });
  }

  return responseBuilder.successRes({ data: userList });
};

/** Save user information for every user connected to app. */
module.exports.saveUser = async function(reqBody) {
  const savedUser = await userService.create(reqBody);
  return responseBuilder.successRes({ data: savedUser._id });
};

/** Update user information for particular userID such as online status and last seen time. */
module.exports.updateUser = async function(reqBody) {
  const updtUser = await userService.update(reqBody);
  return responseBuilder.successRes({ data: updtUser });
};
