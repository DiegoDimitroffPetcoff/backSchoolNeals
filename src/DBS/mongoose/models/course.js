const mongoose = require("mongoose");

const CoursesSchemma = mongoose.Schema({

  name: { type: String, required: true },
  content: { type: Array, required: true },
  img: { type: String, required: true },
  done: { type: Boolean, required: true },
});

module.exports = mongoose.model("Courses", CoursesSchemma);
/*
    Este esquema de Mongoose define el modelo de datos para los cursos.

    Campos:
    - course: Array que contiene los cursos del proyecto.
        - id: Identificador del curso (String, obligatorio).
        - name: Nombre del curso (String, obligatorio).
        - content: Contenido del curso (Array, obligatorio).
        - img: Ruta de la imagen del curso (String, obligatorio).
        - done: Indica si el curso está completado (Boolean, obligatorio).
*/
