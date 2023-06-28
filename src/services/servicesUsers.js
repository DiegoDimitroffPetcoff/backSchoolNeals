const User = require("../DBS/mongoose/models/User");
const Course = require("../DBS/mongoose/models/course");
const mongoose = require("mongoose");

postUser = async (data) => {
  try {
    const UserCreated = {
      name: data.name,
      content: data.content,
      nickname: data.nickname,
      password: data.password,
      docunment: data.docunment,
      contact: data.contact,
      status: data.status,
      points: data.points,
      avatar: data.avatar,
    };
    const NewUser = new User(UserCreated);
    return await NewUser.save();
  } catch (error) {
    console.log(error);
  }
};

getAllUsers = async () => {
  return await User.find();
};

getByIdUsers = async (id) => {
  return await User.findById(id);
};

editeUser = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};
deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};
addCourse = async (data) => {
  let courseToAdd = await Course.findById(data.courseId);
  try {
    let userUpdate = User.findByIdAndUpdate(
      data.userId,
      { $push: { course: courseToAdd } },
      { new: true }
    );
    return userUpdate;
  } catch (error) {
    console.log(error);
  }
};

deleteCourse = async (data) => {
  try {
    const courseId = new mongoose.Types.ObjectId(data.courseId);
    let userUpdate = await User.findByIdAndUpdate(
      { _id: data.userId },
      {
        $pull: { course: { _id: courseId } },
      },
      { new: true }
    );

    return userUpdate;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postUser,
  getAllUsers,
  getByIdUsers,
  editeUser,
  deleteUser,
  addCourse,
  deleteCourse,
};

/* This is the model the client should send to post a new user
 { "name": {
    "firstName": "Diego",
    "secondName": "Dimitroff Petcoff",
    "dateOfBirth": "31 de Julio"
  },
  "nickname": "Dimii",
  "password":"98124091340913249071294",
  "docunment": {
    "number": 34703057,
    "typeOf": "DNI"
  },
  "contact": {
    "cellPhone": 93582823,
    "emergencyPhone":93580000,
    "email": "diegodimitroffpetcoff@gmail.com"
  },
  "status": {
    "admin": true,
    "alumn":false
  },
  "points": 0,
  "course": [],
  "avatar":"avatars.dicebear.com/api/croodles/stefan.svg"
}



TO DELETE OR ADD A COURSE.. DE CLIENT SHOULD SEND THIS KIND OF OBJECT:
{"userId": "6494f4633873e4b6770efc33",
"courseId": "649255b87e667053710d15e6"}

*/
