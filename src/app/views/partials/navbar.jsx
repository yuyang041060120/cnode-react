import React from 'react';
import { Link } from 'react-router';

export class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="index">CNode React</Link>
                    </div>

                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">首页</Link></li>
                            <li><Link to="/topic">话题</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}