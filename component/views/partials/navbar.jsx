var React = require('react');
var Router = require('react-router');

var Link = Router.Link;

var navJson = require('./navbar.json');


var NavItem = React.createClass({
    render: function () {
        var nav = this.props.nav;
        return (
            <li><Link to={nav.to}>{nav.text}</Link></li>
        )
    }
});


module.exports = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="index">React-CNode</Link>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            {navJson.map(function (nav, index) {
                                return <NavItem nav={nav} key={index}/>
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
});



