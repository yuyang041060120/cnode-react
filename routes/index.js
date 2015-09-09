var constants = require('../lib/constants');
var request = require('superagent');
var queryString = require('query-string');

module.exports = {
    get: {
        '/': function (req, res) {
            request
                .get('http://cnodejs.org/api/v1/topics?' + queryString.stringify(req.query))
                .end(function (err, response) {
                    if (err) {
                        throw err;
                    }
                    res.render(req.url, {
                        state: constants.state.SUCCESS,
                        data: response.body.data,
                        title: 'CNode：Node.js专业中文社区'
                    });

                });
        }
    }
};
