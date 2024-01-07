const example = require('../models/users_example')

const Users = {
  getAll: async (req, res, next) => {
    return res.status(200).json({
      message: "Get all user",
      Success: true,
      code: 200,
      data: example,
    });
  }
}



module.exports = Users
