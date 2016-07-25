import React from 'react';

export class Label extends React.Component {
    render() {
        let data = this.props.data;
        let tab = this.props.tab;

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
}