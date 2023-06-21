const servicesCourses = require('../services/servicesCoureses')

async function getAllCourses(req, res) {
  let allCoures = await servicesCourses.getAllCourses()
  console.log(allCoures);
  res.json(allCoures);
}
async function getByIdCourse(req, res) {
  res.json("/courses");
}
async function postCourse(req, res) {

  let allCoures = await servicesCourses.postCourse(req.body)
  res.json(allCoures);
}
async function editeCourse(req, res) {
  res.json("/courses");
}
async function deteleCourse(req, res) {
  res.json("/courses");
}

module.exports = {
  getAllCourses,
  getByIdCourse,
  postCourse,
  editeCourse,
  deteleCourse,
};
