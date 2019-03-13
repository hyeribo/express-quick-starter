const conn = require('../../utils/dbConnect');

const getUsersModel = require('../../models/users/getUsers.model');

const getUsers = async (req, res, next) => {
  try {
    const { username } = req.query;
    const params = { username };
    const result = await getUsersModel(conn, params);
    res.send({ result });

  } catch (error) {
    next(error);
  }
}

module.exports = getUsers;