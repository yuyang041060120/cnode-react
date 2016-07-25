import React from 'react';
import { Link } from 'react-router';

import { latestDate } from '../../../utils';
import { Label } from './';

export class Item extends React.Component {
    render() {
        let item = this.props.data;
        let tab = this.props.tab;
        return (
            <div className="media">
                <div className="media-left">
                    <Link to="/topic">
                        <img className="media-object" src={item.author.avatar_url} title={item.author.loginname}/>
                    </Link>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">
                        <Label data={item} tab={tab}/><Link to={`/topic/${item.id}`}>{item.title}</Link>
                    </h4>
                    <p className="media-count">
                        <i className="fa fa-hand-pointer-o"/>{item.visit_count}
                        <i className="fa fa-comment"/>{item.reply_count}
                        <i className="fa fa-calendar"/>发表于{latestDate(item.create_at)}
                    </p>
                </div>
            </div>
        )
    }
}