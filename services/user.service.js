const { userSchema } = require("../models");

const addUser = (body) => {
  const user = new userSchema({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: body.password,
  });

  return user.save(body);
};

const findUser = (email) => {
  return userSchema.findOne({ email: email });
};

module.exports = { addUser, findUser };
