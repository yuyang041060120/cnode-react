var React = require('react');
var Router = require('react-router');
var Navbar = require('../partials/navbar.jsx');


var utils = require('../../component/utils');
var Link = Router.Link;

module.exports = React.createClass({
    getInitialState: function () {
        return {tab: 'message'};
    },
    handleClick: function (tab) {
        this.setState({tab: tab});
    },
    render: function () {
        var tab = this.state.tab;
        var user = this.props.data;

        return (
            <div className="user-detail">
                <Navbar />

                <div className="container">
                    <ul className="nav nav-tabs mg-b-10">
                        <li className={tab==='message'?'active':''} onClick={this.handleClick.bind(this,'message')}>
                            <a href="javascript:void(0)">基本信息</a>
                        </li>
                        <li className={tab==='recentTopic'?'active':''}
                            onClick={this.handleClick.bind(this,'recentTopic')}>
                            <a href="javascript:void(0)">最近创建的话题</a>
                        </li>
                        <li className={tab==='recentJoin'?'active':''}
                            onClick={this.handleClick.bind(this,'recentJoin')}>
                            <a href="javascript:void(0)">最近参与的话题</a>
                        </li>
                    </ul>
                    <div style={{display:tab!=='message'?'none':'block'}}>
                        <div className="media">
                            <div className="media-left">
                                <img className="media-object" src={user.avatar_url} width="40"
                                     heigth="40" title={user.loginname}/>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">{user.loginname}</h4>

                                <p className="gray">{user.score}积分</p>
                            </div>
                        </div>

                        {user.githubUsername ?
                            <div>
                                <i className="fa fa-github"></i>
                                <a className="mg-l-5" href={'https://github.com/'+user.githubUsername}
                                   target="_blank">@{user.githubUsername}</a>
                            </div>
                            : ''
                        }
                    </div>
                    <div className="topic-list" style={{display:tab!=='recentTopic'?'none':'block'}}>
                        {user.recent_topics.map(function (item) {
                            return (
                                <div className="media">
                                    <div className="media-left">
                                        <Link to="user-detail" params={{loginname:item.author.loginname}}>
                                            <img className="media-object" src={item.author.avatar_url} width="40"
                                                 heigth="40" title={item.author.loginname}/>
                                        </Link>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">
                                            <Link to="topic-detail" params={{topicId:item.id}}>{item.title}</Link>
                                        </h4>

                                        <div className="media-count">
                                            <i className="fa fa-calendar"></i>最后回复于{utils.getPubDate(item.last_reply_at)}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="topic-list" style={{display:tab!=='recentJoin'?'none':'block'}}>
                        {user.recent_replies.map(function (item) {
                            return (
                                <div className="media">
                                    <div className="media-left">
                                        <Link to="user-detail" params={{loginname:item.author.loginname}}>
                                            <img className="media-object" src={item.author.avatar_url} width="40"
                                                 heigth="40" title={item.author.loginname}/>
                                        </Link>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">
                                            <Link to="topic-detail" params={{topicId:item.id}}>{item.title}</Link>
                                        </h4>
                                        <div className="media-count">
                                            <i className="fa fa-calendar"></i>最后回复于{utils.getPubDate(item.last_reply_at)}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
})
;