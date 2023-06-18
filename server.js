const app = require("./src/app/app");
const connectDBS = require("./src/DBS/mongoose/connection");
const { PORT } = require("./src/config.js/config");

async function activeServer() {
  try {
    await connectDBS();
    app.listen(PORT || 8080);
    console.log("Server Connected");
  } catch (error) {
    console.log(error);
  }
}

activeServer();
