const mongoose = require("mongoose");
const { MONGO_URI } = require("../../config.js/config");

async function connectDBS() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Mongo DBS connected");

  } catch (error) {

    console.log(error);
  }
}
module.exports = connectDBS;
