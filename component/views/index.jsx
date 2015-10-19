var React = require('react');
var Router = require('react-router');
var $ = require('jquery');
var Navbar = require('./partials/navbar.jsx');
var queryString = require('query-string');
var utils=require('../component/utils');

var Link = Router.Link;


var Label = React.createClass({
    render: function () {
        var tab = this.props.tab;
        var data = this.props.data;

        if (data.top) {
            return <label className="label label-success">置顶</label>;
        }

        if (data.good) {
            return <label className="label label-success">精华</label>;
        }

        if (!tab || tab === 'all') {
            if (data.tab === 'share') {
                return <label className="label label-default">分享</label>;
            }

            if (data.tab === 'ask') {
                return <label className="label label-default">问答</label>;
            }

            if (data.tab === 'job') {
                return <label className="label label-default">招聘</label>;
            }
        }

        return null;
    }
});

module.exports = React.createClass({
    getInitialState: function () {
        return {
            data: this.props.data || [],
            page: 1
        }
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            data: nextProps.data,
            page: 1
        });
    },
    componentDidMount: function () {
        var loading = false;
        $(window).on('scroll', function () {
            var fromBottom = $(document).height() - $(window).height() - $(window).scrollTop();

            if (fromBottom <= 10 && !loading) {
                loading = true;
                var query = queryString.parse(location.search);
                query.page = this.state.page + 1;
                $.get(location.pathname + '?' + queryString.stringify(query), function (response) {
                    this.setState({
                        data: this.state.data.concat(response.data),
                        page: this.state.page + 1
                    }, function () {
                        loading = false;
                    });
                }.bind(this));
            }
        }.bind(this));
    },
    render: function () {
        var tab = this.props.query.tab;
        return (
            <div className="index">
                <Navbar />

                <div className="container">
                    <ul className="nav nav-tabs">
                        <li className={!tab || tab==='all'?'active':''}>
                            <Link to="index" query={{tab:'all'}}>全部</Link>
                        </li>
                        <li className={tab==='good'?'active':''}>
                            <Link to="index" query={{tab:'good'}}>精华</Link>
                        </li>
                        <li className={tab==='share'?'active':''}>
                            <Link to="index" query={{tab:'share'}}>分享</Link>
                        </li>
                        <li className={tab==='ask'?'active':''}>
                            <Link to="index" query={{tab:'ask'}}>问答</Link>
                        </li>
                        <li className={tab==='job'?'active':''}>
                            <Link to="index" query={{tab:'job'}}>招聘</Link>
                        </li>
                    </ul>

                    {this.state.data.map((item) => {
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
                                        <Label tab={tab} data={item}/>
                                        <Link to="topic-detail" params={{topicId:item.id}}>{item.title}</Link>
                                    </h4>

                                    <p className="media-count">
                                        <i className="fa fa-hand-pointer-o"></i>{item.visit_count}
                                        <i className="fa fa-comment mg-l-5"></i>{item.reply_count}
                                        <i className="fa fa-calendar mg-l-5"></i>发表于{utils.getPubDate(item.create_at)}
                                    </p>
                                </div>
                            </div>
                        )}
                    )}

                </div>
            </div>
        )
    }
});