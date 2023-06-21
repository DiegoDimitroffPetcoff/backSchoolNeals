const Course = require("../DBS/mongoose/models/course");

postCourse = async (data) => {
  try {
    const course = {
      name: data.name,
      content: data.content,
      img: data.img,
      done: data.done,
    };
    const NewCourse = new Course(course);
    return  await NewCourse.save();
  } catch (error) {
    console.log(error);
  }
};

getAllCourses = async () => {
  return await Course.find();
};

module.exports = { postCourse, getAllCourses };
