const conn = require('../../utils/dbConnect');

const getUserModel = require('../../models/users/getUser.model');

const getUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const params = { id: userId };
    const result = await getUserModel(conn, params);
    res.send({ result });

  } catch (error) {
    next(error);
  }
}

module.exports = getUser;