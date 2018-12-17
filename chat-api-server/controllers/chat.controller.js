const responseBuilder = require("../util/response-builder");
const chatService = require("../services/chat.service");
const messageController = require("../controllers/message.controller");

/**
 * Get chat history for pair of clients from chatId.
 */
module.exports.getChatHistory = async function(chatId) {
  const chat = await messageController.getChatMessages(chatId);
  if (!chat.length) {
    return responseBuilder.successRes({
      message: "No conversation found."
    });
  }
  return responseBuilder.successRes({ data: chat });
};

/** Save conversation for pair of clients */
module.exports.saveChat = async function(reqBody) {
  const participants = [reqBody.clientId, reqBody.userId];

  let chat = await chatService
    .findOne({})
    .all("participants", participants)
    .lean();
  console.log(chat);
  if (!chat) {
    chat = await chatService.create({
      participants
    });
  }

  const message = {
    chatId: chat._id,
    sender: reqBody.userId,
    message: reqBody.message
  };
  try {
    await messageController.saveChatMessage(message);
  } catch (err) {
    throw new Error(
      `Error while saving chat message for conversation with ID: ${
        savedChat._id
      } with error: ${err.message}`
    );
  }
  return responseBuilder.successRes({
    data: { chatId: chat._id, timestamp: chat.createdAt }
  });
};

/**Delete conversation history fo pair of clients */
module.exports.deleteChat = async function(chatId) {
  const deleteMessages = await messageController.deleteChatMessages(chatId);
  const removedChat = await chatService.delete(chatId);
  return responseBuilder.successRes({
    message: `${removedChat["n"]} conversation with ${
      deleteMessages["n"]
    } messages is removed`
  });
};
