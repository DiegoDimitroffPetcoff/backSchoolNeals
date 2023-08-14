const {Router}= require('express');
const route = Router();
const controllerCourses = require('../controllers/controllersCourses')
const controllerWhoWeAre = require('../controllers/controllersWhoWeAre')



route.get('/courses',controllerCourses.getAllCourses)
route.get('/courses/:id',controllerCourses.getByIdCourse)
route.post('/courses',controllerCourses.postCourse)
route.patch('/courses/:id',controllerCourses.editeCourse)
route.delete('/courses/:id',controllerCourses.deteleCourse)

route.get('/whoweare',controllerWhoWeAre.getWhoWeAre)

route.post('/whoweare',controllerWhoWeAre.postWhoWeAre)

module.exports= route
