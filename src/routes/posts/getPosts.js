const conn = require('../../utils/dbConnect');

const getPostsModel = require('../../models/posts/getPosts.model');

const getPosts = async (req, res, next) => {
  try {
    const { value } = req.query;
    const params = { value };
    const result = await getPostsModel(conn, params);
    res.send({ result });

  } catch (error) {
    next(error);
  }
}

module.exports = getPosts;