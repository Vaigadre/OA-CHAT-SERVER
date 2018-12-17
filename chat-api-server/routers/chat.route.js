const express = require("express");
const router = express.Router({ mergeParams: true });
const chatController = require("../controllers/chat.controller");
const sendRes = require("../util/response").sendRes;
const serverError = require("../util/response-builder").serverError;

router.get("/:chatId", async (req, res) => {
  try {
    const returnStatus = await chatController.getChatHistory(req.params.chatId);
    sendRes(res, returnStatus);
  } catch (error) {
    sendRes(res, serverError(error));
  }
});

router.post("/", async (req, res) => {
  try {
    const returnStatus = await chatController.saveChat(req.body);
    sendRes(res, returnStatus);
  } catch (error) {
    sendRes(res, serverError(error));
  }
});

router.delete("/:chatId", async (req, res) => {
  try {
    const returnStatus = await chatController.deleteChat(req.params.chatId);
    sendRes(res, returnStatus);
  } catch (error) {
    sendRes(res, serverError(error));
  }
});

module.exports = router;
