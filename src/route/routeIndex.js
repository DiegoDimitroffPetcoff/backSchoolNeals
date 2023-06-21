const {Router}= require('express');
const route = Router();
const controllerCourses = require('../controllers/controllersCourses')



route.get('/courses',controllerCourses.getAllCourses)
route.get('/courses/:id',controllerCourses.getByIdCourse)
route.post('/courses',controllerCourses.postCourse)
route.patch('/courses/:id',controllerCourses.editeCourse)
route.delete('/courses/:id',controllerCourses.deteleCourse)

module.exports= route
