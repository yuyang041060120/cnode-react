import fetch from 'node-fetch';

export default {
  topics(params){
    return fetch('http://cnodejs.org/api/v1/topics')
      .then(res => res.json())
      .then(data => data.data);
  },
  topic(id){
    return fetch(`http://cnodejs.org/api/v1/topic/${id}`)
      .then(res => res.json())
      .then(data => data.data);
  }
}

// request
//   .get('http://cnodejs.org/api/v1/topics?' + queryString.stringify(req.query))
//   .end((err, response) => {
//     if (err) {
//       throw err;
//     }
//
//     res.render(req.url, {
//       data: response.body.data,
//       title: 'CNode：Node.js专业中文社区'
//     });
//   });