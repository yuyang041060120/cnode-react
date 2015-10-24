/**
 * @author yuyangyang
 * @time 2015/2/3
 * @description filter中间件
 */

import _ from 'lodash';


export default  function (req, res, next) {

    /**
     * 给res添加put方法，可以再中间件中添加数据
     * @param attributes {Object}
     */
    if (!res.locals) {
        res.locals = {};
    }

    res.put = function (attributes) {
        _.extend(res.locals, attributes);
    };


    /**
     * 区分ajax请求与普通请求
     */
    req.isXmlHttpRequest = (function () {
        var xRequestedWith = req.headers['x-requested-with'];
        return xRequestedWith && xRequestedWith.toLowerCase() === 'xmlhttprequest';
    })();

    /**
     * 重写res.render方法
     */
    var render = res.render;

    res.render = function (view, data) {
        var response = _.extend({session: req.session}, data);
        req.isXmlHttpRequest ? res.json(response) : render.call(res, view, response);
    };

    next();
};