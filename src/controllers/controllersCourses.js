const servicesCourses = require("../services/servicesCoureses");

async function getAllCourses(req, res) {
  try {
    let allCoures = await servicesCourses.getAllCourses();
    if (condition) {
      res.status(200).json(allCoures);
    } else {
      res.status(404).json({ message: "Not couses Foud" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}
async function getByIdCourse(req, res) {
  try {
    let courseById = await servicesCourses.getByIdCourses(req.params.id);
    if (courseById) {
      res.status(200).json(courseById);
    } else {
      res.status(404).json(courseById);
    }
  } catch (error) {}
}
async function postCourse(req, res) {
  try {
    let allCoures = await servicesCourses.postCourse(req.body);
    if (allCoures) {
      res.status(200).json(allCoures);
    } else {
      res.status(404).json({ message: "Module not Founded" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}
async function editeCourse(req, res) {
  try {
    let courseEdited = await servicesCourses.editeCourse(
      req.params.id,
      req.body
    );
    if (courseEdited) {
      res.status(200).json(courseEdited);
    } else {
      res.status(404).json({ message: "Course not Foud to Edite" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}
async function deteleCourse(req, res) {
  try {
    let courseDeleted = await servicesCourses.deleteCourse(req.params.id);
    if (courseDeleted) {
      res.status(200).json(courseDeleted);
    } else {
      res.status(404).json({ error: "Course not finded" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  getAllCourses,
  getByIdCourse,
  postCourse,
  editeCourse,
  deteleCourse,
};
