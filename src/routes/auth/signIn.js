const jwt = require('jsonwebtoken');

const signIn = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    // secret key 가져오기
    const secret = req.app.get('jwt-secret');
    // 아이디, 비밀번호 확인
    const checked = username === 'master' && password === 'password';
    let result = { result: checked };
    // 로그인 체크 성공했으면 jwt 토큰 발행해서 result에 추가
    if(checked) {
      const token = jwt.sign(
        {
            id: 0,
            username: username,
            power: 'master'
        }, 
        secret, 
        {
            expiresIn: '7d',
            issuer: username,
            subject: 'userInfo'
        });
        result.token = token;
    }
    res.send(result);

  } catch (error) {
    next(error);
  }
}

module.exports = signIn;