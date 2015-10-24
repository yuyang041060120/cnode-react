import React  from 'react';
import {Link} from 'react-router';
import $      from 'jquery';
import Navbar from '../partials/navbar.jsx';
import utils  from '../../component/utils';

export default class Detail extends React.Component {
    render() {
        var topic = this.props.data;
        var Label = null;

        if (topic.top) {
            Label = <label className="label label-success">置顶</label>;
        } else if (topic.good) {
            Label = <label className="label label-success">精华</label>;
        }


        return (
            <div className="topic-detail">
                <Navbar />

                <div className="container">
                    <div className="page-header">
                        <h3>
                            {Label}
                            {topic.title}
                        </h3>

                        <p className="topic-message">
                            <i className="fa fa-hand-pointer-o"></i>
                            <span>{topic.visit_count}</span>
                            <i className="fa fa-calendar mg-l-5"></i>
                            <span>发表于{utils.getPubDate(topic.create_at)}</span>
                            <i className="fa fa-user mg-l-5"></i>
                            作者<Link to="user-detail"
                                    params={{loginname:topic.author.loginname}}>{topic.author.loginname}</Link>
                            <i className="fa fa-tablet mg-l-5"></i>
                            来自{topic.tab === 'share' ? '分享' : topic.tab === 'ask' ? '问答' : topic.tab === 'job' ? '招聘' : ''}
                        </p>
                    </div>
                    <div dangerouslySetInnerHTML={{__html:topic.content}}></div>
                    <div className="page-header">
                        <h4>回复({topic.reply_count})</h4>
                    </div>
                    {topic.replies.length ? topic.replies.map(function (reply, index) {
                        return (
                        <div className="media">
                            <div className="media-left">
                                <a href={'/user/'+reply.author.loginname}>
                                    <img className="media-object" src={reply.author.avatar_url} width="40"
                                         heigth="40" title={reply.author.loginname}/>
                                </a>
                            </div>
                            <div className="media-body">
                                <span className="pull-right"><i
                                    className="fa fa-thumbs-o-up"></i>{reply.ups.length}</span>
                                <h5 className="media-heading">
                                    <a href={'/user/'+reply.author.loginname}>{reply.author.loginname}</a>
                                    <span className="reply-date">发表于{utils.getPubDate(reply.create_at)}</span>
                                </h5>

                                <div dangerouslySetInnerHTML={{__html:reply.content}}></div>
                            </div>
                        </div>
                            )
                        }) : <div className="text-center">暂无回复</div>}
                </div>
            </div>
        )
    }
}
