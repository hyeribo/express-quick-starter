/**
 * 게시글 리스트 가져오기
 * @param {Object} conn 커넥션
 * @param {{value: string}} filter 검색조건
 */
module.exports = async(conn, filter) => {
  try {
    const data = [
      { id: 1, title: 'Title 1', content: 'This is test post 1.' },
      { id: 2, title: 'Title 2', content: 'This is test post 2.' },
      { id: 3, title: 'Title 3', content: 'This is test post 3.' },
      { id: 4, title: 'Title 4', content: 'This is test post 4.' },
      { id: 5, title: 'Title 5', content: 'This is test post 5.' },
      { id: 6, title: 'Title 6', content: 'This is test post 6.' },
      { id: 7, title: 'Title 7', content: 'This is test post 7.' },
      { id: 8, title: 'Title 8', content: 'This is test post 8.' },
      { id: 9, title: 'Title 9', content: 'This is test post 9.' },
      { id: 10, title: 'Title 10', content: 'This is test post 10.' },
    ];

    if(!filter.value) return data;
    
    const results = data.filter(d => {
      if(d.title.includes(filter.value) || d.content.includes(filter.value)) return true;
      else return false;
    })
    return results;

  } catch (error) {
    throw error;
  }
};