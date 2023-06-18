const mongoose = require("mongoose");

const UserSchemma = mongoose.Schema({
  name: {
    firstName: { type: String, required: true, trim: true },
    secondName: { type: String, required: true, trim: true },
    dateOfBirth: { type: String, required: true, trim: true },
  },
  nickname: { type: String, required: true },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value.lengh >= 6;
      },
      message: "The password should have at least 6 caracters",
    },
  },
  docunment: {
    number: { type: Number, trim: true },
    typeOf: { type: String, trim: true },
  },
  contact: {
    cellPhone: { type: Number, trim: true },
    emergencyPhone: { type: Number, trim: true },
    email: { type: String, trim: true, required: true },
  },
  status: {
    admin: { type: Boolean },
    alumn: { type: Boolean, required: true },
  },
  points: { type: Number, required: true, min: 0 },
  course: {
    type: [
      {
        id: { type: String },
        content: { type: Array },
        diplome: { type: String },
      },
    ],
  },
  avatar: { type: String },
});

module.exports = mongoose.model("users", UserSchemma);

/*
    Este esquema de Mongoose define el modelo de datos para los usuarios.

    Campos:
    - name: Objeto que contiene los campos relacionados con el nombre del usuario.
        - firstName: Primer nombre del usuario (String, obligatorio).
        - secondName: Segundo nombre del usuario (String, obligatorio).
        - dateOfBirth: Fecha de nacimiento del usuario (String, obligatorio).

    - nickname: Apodo del usuario (String, obligatorio).

    - password: Contraseña del usuario (String, obligatorio, mínimo 6 caracteres).
    
    - document: Objeto que contiene los campos relacionados con el documento del usuario.
        - number: Número de documento del usuario (Number).
        - typeOf: Tipo de documento del usuario (String).

    - contact: Objeto que contiene los campos de contacto del usuario.
        - cellPhone: Número de teléfono celular del usuario (Number).
        - emergencyPhone: Número de teléfono de emergencia del usuario (Number).
        - email: Correo electrónico del usuario (String, obligatorio).

    - status: Objeto que contiene los campos de estado del usuario.
        - admin: Indica si el usuario es administrador (Boolean).
        - alumn: Indica si el usuario es estudiante (Boolean, obligatorio).

    - points: Puntos del usuario (Number, obligatorio, mínimo 0).

    - course: Array que contiene los cursos del usuario.
        - id: Identificador del curso (String).
        - content: Contenido del curso (Array).
        - diplome: Diploma del curso (String).

    - avatar: Ruta del avatar del usuario (String).
*/