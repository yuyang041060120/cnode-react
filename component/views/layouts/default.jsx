import React     from 'react';
import Constants from '../../../lib/constants';
import Footer    from '../partials/footer.jsx';

export default class Default extends React.Component{
    render() {
        return (
            <html>
            <head>
                <title>{this.props.title}</title>
                <meta charSet='utf-8'/>
                <meta name="keywords" content={Constants.promotion.keywords}/>
                <meta name="description" content={Constants.promotion.description}/>
                <link rel="icon" href="//dn-cnodestatic.qbox.me/public/images/cnode_icon_32.png" type="image/x-icon"/>
                <link rel="stylesheet" href="/css/font-awesome.min.css"/>
                <link rel="stylesheet" href="/css/bootstrap.css"/>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
            {this.props.children}
            <Footer />
            <script src="/build/vendor.js"></script>
            <script src="/build/bundle.js"></script>
            </body>
            </html>
        );
    }
}