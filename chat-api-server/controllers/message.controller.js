const messageService = require("../services/message.service");

module.exports.getChatMessages = async function(chatId) {
  const messages = await messageService
    .find({ chatId })
    .select({ _id: 0, updatedAt: 0 })
    .lean();
  if (!messages.length) {
    return [];
  }

  return messages;
};

module.exports.saveChatMessage = async function(reqBody) {
  const savedMsg = await messageService.create(reqBody);
  console.log(savedMsg);
  return savedMsg._id;
};

module.exports.deleteChatMessages = async function(chatId) {
  return messageService.delete({ chatId });
};
