const WhoWeAreSchema = require("../DBS/mongoose/models/whoWeAreInfo");

postWhoWeAre = async (data) => {
  try {
    const WhoWeAre = {
      title: data.title,
      subTitle: data.subTitle,
      text: data.text,

    };
    const NewWhoWeAre = new WhoWeAreSchema(WhoWeAre);
    return await NewWhoWeAre.save();
  } catch (error) {
    console.log(error);
  }
};

getAllWhoWeAre = async () => {
  return await WhoWeAreSchema.find();
};

getByIdCourses = async (id) => {
  return await WhoWeAreSchema.findById(id);
};

editeWhoWeAre = async (id, data) => {
  return await WhoWeAreSchema.findByIdAndUpdate(id, data, { new: true });
};
deleteCourse = async (id) => {
  return await WhoWeAreSchema.findByIdAndDelete(id);
};

module.exports = {
  getAllWhoWeAre,
  postWhoWeAre,
  editeWhoWeAre
};


