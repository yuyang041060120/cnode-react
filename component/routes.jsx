import React               from 'react';
import{Route,DefaultRoute} from 'react-router';
import App                 from './app.jsx';
import Index               from './views/index.jsx';
import TopicDetail         from './views/topic/detail.jsx';
import UserDetail          from './views/user/detail.jsx';

export  default (
    <Route handler={App} path="/">
        <DefaultRoute name="index" handler={Index}/>
        <Route name="topic-detail" path="topic/:topicId" handler={TopicDetail}/>
        <Route name="user-detail" path="user/:loginname" handler={UserDetail}/>
    </Route>
);