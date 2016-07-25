import React from 'react';
import {Link} from 'react-router';

import {latestDate} from '../utils';

class Item extends React.Component {
  render() {
    const item = this.props.data;

    return (
      <div className="media">
        <div className="media-left">
          <Link to="/topic" params={{loginname: item.author.loginname}}>
            <img className="media-object" src={item.author.avatar_url} width="40"
                 heigth="40" title={item.author.loginname}/>
          </Link>
        </div>
        <div className="media-body">
          <h4 className="media-heading">
            <Link to={`/topic/${item.id}`}>{item.title}</Link>
          </h4>
          <p className="media-count">
            <i className="fa fa-hand-pointer-o"></i>{item.visit_count}
            <i className="fa fa-comment"></i>{item.reply_count}
            <i className="fa fa-calendar"></i>发表于{latestDate(item.create_at)}
          </p>
        </div>
      </div>
    )
  }
}


export class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          {/*<ul className="nav nav-tabs">*/}
          {/*<li className={!tab || tab === 'all' ? 'active' : ''}>*/}
          {/*<Link to="index" query={{tab: 'all'}}>全部</Link>*/}
          {/*</li>*/}
          {/*<li className={tab === 'good' ? 'active' : ''}>*/}
          {/*<Link to="index" query={{tab: 'good'}}>精华</Link>*/}
          {/*</li>*/}
          {/*<li className={tab === 'share' ? 'active' : ''}>*/}
          {/*<Link to="index" query={{tab: 'share'}}>分享</Link>*/}
          {/*</li>*/}
          {/*<li className={tab === 'ask' ? 'active' : ''}>*/}
          {/*<Link to="index" query={{tab: 'ask'}}>问答</Link>*/}
          {/*</li>*/}
          {/*<li className={tab === 'job' ? 'active' : ''}>*/}
          {/*<Link to="index" query={{tab: 'job'}}>招聘</Link>*/}
          {/*</li>*/}
          {/*</ul>*/}

          {this.props.data.map(function (item) {
            return <Item data={item} key={item.id}/>
          }.bind(this))}

        </div>
      </div>
    )
  }
}