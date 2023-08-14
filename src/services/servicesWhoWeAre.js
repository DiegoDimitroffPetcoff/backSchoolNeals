const WhoWeAre = require("../DBS/mongoose/models/whoWeAreInfo");

postWhoWeAre = async (data) => {
  try {
    const WhoWeAre = {
      name: data.name,
      content: data.content,
      img: data.img,
      done: false,
    };
    const NewWhoWeAre = new WhoWeAre(WhoWeAre);
    return await NewWhoWeAre.save();
  } catch (error) {
    console.log(error);
  }
};

getAllWhoWeAre = async () => {
  return await WhoWeAre.find();
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
  getAllWhoWeAre
};


