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
  return await Course.findById(id);
};

editeCourse = async (id, data) => {
  return await Course.findByIdAndUpdate(id, data, { new: true });
};
deleteCourse = async (id) => {
  return await Course.findByIdAndDelete(id);
};

module.exports = {
  getAllWhoWeAre,
  postWhoWeAre
};


