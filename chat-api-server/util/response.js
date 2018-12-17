module.exports.sendRes = function(res, options) {
  if (options.statusCode) {
    res.status(options.statusCode).send(options);
  } else {
    res.send(options);
  }
};
