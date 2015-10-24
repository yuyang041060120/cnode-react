import React          from 'react';
import {RouteHandler} from 'react-router';
import Layout from './views/layouts/default.jsx';


export default class App extends React.Component{
    render () {
        var data = this.props.data;
        return (
            <Layout title={this.props.title}>
                <RouteHandler data={data}/>
            </Layout>
        )
    }
}