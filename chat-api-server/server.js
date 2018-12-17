const app = require("./app");
const connectToDB = require("./db").connectToDB;
const http = require("http");

const HTTPPORT = 3000;
connectToDB()
  .then(() => {
    /**
     * Start Express server.
     */
    const httpServer = http.createServer(app);

    httpServer.listen(HTTPPORT, () => {
      console.log("Server is running on port", HTTPPORT);
    });
  })
  .catch(error => {
    console.log("Error while connecting to DB.", error);
  });
