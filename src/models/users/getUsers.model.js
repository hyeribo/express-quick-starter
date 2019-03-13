/**
 * 게시글 리스트 가져오기
 * @param {Object} conn 커넥션
 * @param {{username: string}} filter 검색조건
 */
module.exports = async(conn, filter) => {
  try {
    // // db 사용
    // const query = `SELECT * FROM user`;
    // const result = await conn.query(query);  // 쿼리 실행
    // return result;

    const data = [
      { id: 1, username: 'username1', name: 'User 1', age: 21 },
      { id: 2, username: 'username2', name: 'User 2', age: 22 },
      { id: 3, username: 'username3', name: 'User 3', age: 23 },
      { id: 4, username: 'username4', name: 'User 4', age: 24 },
      { id: 5, username: 'username5', name: 'User 5', age: 25 },
      { id: 6, username: 'username6', name: 'User 6', age: 26 },
      { id: 7, username: 'username7', name: 'User 7', age: 27 },
      { id: 8, username: 'username8', name: 'User 8', age: 28 },
      { id: 9, username: 'username9', name: 'User 9', age: 29 },
      { id: 10, username: 'username10', name: 'User 10', age: 30 },
    ];

    if(!filter.username) return data;
    
    const results = data.filter(d => {
      if(d.username.includes(filter.username)) return true;
      else return false;
    })
    return results;

  } catch (error) {
    throw error;
  }
};