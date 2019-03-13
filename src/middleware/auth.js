const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const { url } = req;
    // 토큰 없어도 되는경우 예외처리
    if(url.startsWith('/auth')) {
      next();
      
    } else {
      const token = req.headers['x-access-token'] || req.query.token;
      if(!token) throw new Error('token not exist.');
      const decoded = jwt.verify(token, req.app.get('jwt-secret'))
      req.decoded = decoded;
      next();
    }

  } catch (error) {
    console.log('token check error', error);
    res.status(403).send({ success: false, message: 'request failed.' });
  }
}
