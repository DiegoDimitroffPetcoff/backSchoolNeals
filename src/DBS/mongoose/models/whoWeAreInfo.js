const mongoose = require("mongoose");

const WhoWeAreSchemma = mongoose.Schema({

  title: { type: String },
  subTitle: {    type: String  },
 text:{type:String}
});

module.exports = mongoose.model("WhoWeAre", WhoWeAreSchemma);


