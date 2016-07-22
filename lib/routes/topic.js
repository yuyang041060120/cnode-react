var constants = require('../lib/constants');
var request = require('superagent');

module.exports = {
    mapping: '/topic',
    get: {
        '/:topicId': function (req, res) {
            request
                .get('http://cnodejs.org/api/v1/topic/' + req.params.topicId)
                .end(function (err, response) {
                    if (err) {
                        throw err;
                    }
                    res.render(req.url, {
                        state: constants.state.SUCCESS,
                        data: response.body.data,
                        title: response.body.data.title + ' - CNode技术社区'
                    });

                });
        }
    }
};
