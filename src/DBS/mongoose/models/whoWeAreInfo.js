const mongoose = require("mongoose");

const WhoWeAreSchemma = mongoose.Schema({

  title: { type: String },
  subTitle: {    type: String  },
 text:{tupe:String}
});

module.exports = mongoose.model("WhoWeAre", WhoWeAreSchemma);


