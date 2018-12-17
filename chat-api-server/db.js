const mongoose = require("mongoose");

const options = { useNewUrlParser: true, useCreateIndex: true };
module.exports.connectToDB = async function() {
  console.log("Connecting to DB.");
  await mongoose.connect(
    "mongodb://localhost:27017/chat_db",
    options
  );
  console.log("Connected to DB.");
};
