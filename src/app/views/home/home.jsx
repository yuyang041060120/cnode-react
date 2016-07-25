import React from 'react';

import { Tab, Item } from './components';

export class Home extends React.Component {
    componentDidMount() {
        console.log('did');
    }

    render() {
        let tab = this.props.location.query.tab;
        return (
            <div className="home-wrapper">
                <div className="container">
                    <Tab tab={tab}/>

                    {this.props.data.map(function (item) {
                        return <Item data={item} tab={tab} key={item.id}/>
                    }.bind(this))}

                </div>
            </div>
        )
    }
}