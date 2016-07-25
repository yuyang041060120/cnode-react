import React from 'react';
import { Link } from 'react-router';

export class Tab extends React.Component {
    static tabs = [
        {key: 'all', value: '全部'},
        {key: 'good', value: '精华'},
        {key: 'share', value: '分享'},
        {key: 'ask', value: '问答'},
        {key: 'job', value: '招聘'}
    ]

    render() {
        let currTab = this.props.tab || 'all';

        return (
            <ul className="nav nav-tabs">
                {Tab.tabs.map(tab => {
                    return (
                        <li key={tab.key} className={tab.key === currTab ? 'active' : ''}>
                            <Link to={{pathname: '/', query: {tab: tab.key}}}>{tab.value}</Link>
                        </li>
                    )
                })}
            </ul>
        )
    }
}