module.exports.unauthorizedRes = function(message) {
  return { status: "Unauthorized", statusCode: 401, message };
};

module.exports.serverError = function(error) {
  return {
    status: "Internal Server Error",
    statusCode: 500,
    errorMsg: error.message
  };
};

module.exports.badReq = function(message) {
  return { status: "Bad Request", statusCode: 400, message };
};

module.exports.successRes = function({ data = {}, message = "" }) {
  return { status: "Success", statusCode: 200, data, message };
};

module.exports.notFoundReq = function(message) {
  return { status: "Not Found", statusCode: 404, message };
};
