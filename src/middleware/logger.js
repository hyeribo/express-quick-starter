module.exports = (req, res, next) => {
  // console.log('LOGGED');
  console.log('Requested At: ', Date.now());
  next();
}