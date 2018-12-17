const messageService = require("../services/message.service");

/**Return chat messages for particular chatID/conversation */
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

/** Save each message in message collection for particular conversation. */
module.exports.saveChatMessage = async function(reqBody) {
  const savedMsg = await messageService.create(reqBody);
  console.log(savedMsg);
  return savedMsg._id;
};

/** Delete chat messages in conversation for particular chatId. */
module.exports.deleteChatMessages = async function(chatId) {
  return messageService.delete({ chatId });
};
