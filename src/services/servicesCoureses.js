const Course = require("../DBS/mongoose/models/course");

postCourse = async (data) => {
  try {
    const course = {
      name: data.name,
      content: data.content,
      img: data.img,
      done: false,
    };
    const NewCourse = new Course(course);
    return await NewCourse.save();
  } catch (error) {
    console.log(error);
  }
};

getAllCourses = async () => {
  return await Course.find();
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
  postCourse,
  getAllCourses,
  getByIdCourses,
  editeCourse,
  deleteCourse,
};

/*
The object the client needs to send with POST call:
      {
        "name": "Pintura de unas",
        "content": [
          { "title": "Introduccion a las pinturas", "url": url },
          { "title": "COmo no cortarle un dedo al cliente" , "url": url}
        ],
        "img":[ { "title": "Painting nails" , "url": url}],
      }

*/
