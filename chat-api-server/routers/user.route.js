const express = require("express");
const router = express.Router({ mergeParams: true });
const userController = require("../controllers/user.controller");
const sendRes = require("../util/response").sendRes;
const serverError = require("../util/response-builder").serverError;

router.get("/", async (req, res) => {
  try {
    if (req.query.online) {
      req.body.online = req.query.online;
    }
    const returnStatus = await userController.getUsersList(req.body);
    sendRes(res, returnStatus);
  } catch (error) {
    sendRes(res, serverError(error));
  }
});

router.post("/", async (req, res) => {
  try {
    const returnStatus = await userController.saveUser(req.body);
    sendRes(res, returnStatus);
  } catch (error) {
    sendRes(res, serverError(error));
  }
});

router.put("/:userId", async (req, res) => {
  try {
    req.body.userId = req.params.userId;
    const returnStatus = await userController.updateUser(req.body);
    sendRes(res, returnStatus);
  } catch (error) {
    sendRes(res, serverError(error));
  }
});

module.exports = router;
