var React = require('react');
var Router = require('react-router');

var Layout = require('./views/layouts/default.jsx');

var RouteHandler = Router.RouteHandler;


module.exports = React.createClass({
    render: function () {
        var data = this.props.data;
        return (
            <Layout title={this.props.title}>
                <RouteHandler data={data}/>
            </Layout>
        )
    }
});