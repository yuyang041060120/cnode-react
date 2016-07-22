import React from 'react';
import { Footer, Navbar } from '../partials';

export class Layout extends React.Component {
    render() {
        return (
            <html>
            <head>
                <title>{this.props.title}</title>
                <meta charSet='utf-8'/>
                <link rel="stylesheet" href="/assets/css/font-awesome.min.css"/>
                <link rel="stylesheet" href="/assets/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/assets/css/style.css"/>
            </head>
            <body>
            <Navbar />
            {this.props.children}
            <Footer />
            <script src="/build/bundle.js"></script>
            </body>
            </html>
        );
    }
}