const User = require("../DBS/mongoose/models/User");
const Course = require("../DBS/mongoose/models/course");

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
    ).then(async (updatedUser) => {
      userUpdated = await updatedUser;
    });
    return "Success";
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
*/
