const router = require("express").Router();
const chatRouter = require("./chat.route");
const userRouter = require("./user.route");

router.use("/users", userRouter);
router.use("/chats", chatRouter);

module.exports = router;
