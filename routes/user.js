var constants = require('../lib/constants');
var request = require('superagent');

module.exports = {
    mapping: '/user',
    get: {
        '/:loginname': function (req, res) {
            request
                .get('http://cnodejs.org/api/v1/user/' + req.params.loginname)
                .end(function (err, response) {
                    if (err) {
                        throw err;
                    }
                    res.render(req.url, {
                        state: constants.state.SUCCESS,
                        data: response.body.data,
                        title: '@' + response.body.data.loginname + '的个人主页 - CNode技术社区'
                    });

                });
        }
    }
};
