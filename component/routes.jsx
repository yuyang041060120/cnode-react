var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('./app.jsx');
var Index = require('./views/index.jsx');

var TopicDetail = require('./views/topic/detail.jsx');
var UserDetail = require('./views/user/detail.jsx');

var routes = (
    <Route handler={App} path="/">
        <DefaultRoute name="index" handler={Index}/>
        <Route name="topic-detail" path="topic/:topicId" handler={TopicDetail}/>
        <Route name="user-detail" path="user/:loginname" handler={UserDetail}/>
    </Route>
);

module.exports = routes;