import React   from 'react';
import {Link}  from 'react-router';
import navJson from './navbar.json';

class NavItem extends React.Component{
    render () {
        var nav = this.props.nav;
        return (
            <li><Link to={nav.to}>{nav.text}</Link></li>
        )
    }
}


export default class Navbar extends React.Component{
    render () {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="index">CNode-React</Link>
                    </div>

                    <div className="collapse navbar-collapse">
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
}



