import request from 'superagent';
import queryString from 'query-string';
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    request
        .get('http://cnodejs.org/api/v1/topics?' + queryString.stringify(req.query))
        .end((err, response) => {
            if (err) {
                throw err;
            }

            res.render(req.url, {
                data: response.body.data,
                title: 'CNode：Node.js专业中文社区'
            });
        });

});


module.exports = router;

// module.exports = {
//     get: {
//         '/': function (req, res) {
//             request
//                 .get('http://cnodejs.org/api/v1/topics?' + queryString.stringify(req.query))
//                 .end(function (err, response) {
//                     if (err) {
//                         throw err;
//                     }
//
//
//                 });
//         }
//     }
// };
