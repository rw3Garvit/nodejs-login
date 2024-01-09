const { userService } = require("../services");

const addUser = async (req, res) => {
  console.log(req.body);
  const body = req.body;

  const user = await userService.addUser(body);

  console.log(user);

  res.status(200).json({
    message: "user created success",
    data: user,
  });
};

const loginUser = async (req, res) => {
  const body = req.body;
  console.log(body);
  const email = req.body.email;
  const password = req.body.password;

  const findUser = await userService.findUser(email);

  console.log(findUser);

  if (!findUser) {
    res.status(500).json({
      message: "user not found",
    });
  } else {
    if (password === findUser.password) {
        
      res.status(200).json({
        message: "login success",
        data: findUser,
      });
    } else {
      res.status(500).json({
        message: "invalid password",
      });
    }
  }
};

module.exports = { addUser, loginUser };
