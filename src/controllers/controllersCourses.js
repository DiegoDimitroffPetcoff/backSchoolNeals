const servicesCourses = require('../services/servicesCoureses')

async function getAllCourses(req, res) {
  let allCoures = await servicesCourses.getAllCourses()
  res.json(allCoures);
}
async function getByIdCourse(req, res) {
  let courseById = await servicesCourses.getByIdCourses(req.params.id)
  res.json(courseById);
}
async function postCourse(req, res) {
  let allCoures = await servicesCourses.postCourse(req.body)
  res.json(allCoures);
}
async function editeCourse(req, res) {
  console.log("edite");
  let courseEdited = await servicesCourses.editeCourse(req.params.id, req.body)
  res.json(courseEdited);
}
async function deteleCourse(req, res) {
  let courseDeleted = await servicesCourses.deleteCourse(req.params.id)
  res.json(courseDeleted);
}

module.exports = {
  getAllCourses,
  getByIdCourse,
  postCourse,
  editeCourse,
  deteleCourse,
};
