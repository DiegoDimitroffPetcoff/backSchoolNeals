const mongoose = require("mongoose");

const ProjectSchemma = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  likes: { type: Number },
});

module.exports = mongoose.model("Projects", ProjectSchemma);

