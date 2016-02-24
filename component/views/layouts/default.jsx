var React = require('react');
var constants=require('../../../lib/constants');

var Footer=require('../partials/footer.jsx');

module.exports = React.createClass({
    render: function render() {
        return (
            <html>
            <head>
                <title>{this.props.title}</title>
                <meta charSet='utf-8'/>
                <meta name="keywords" content={constants.promotion.keywords}/>
                <meta name="description" content={constants.promotion.description}/>
                <link rel="icon" href="//dn-cnodestatic.qbox.me/public/images/cnode_icon_32.png" type="image/x-icon"/>
                <link rel="stylesheet" href="/build/style.css"/>
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
});
