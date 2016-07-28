import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Layout } from './views/layouts/default.jsx';
import { Home } from './views/home/home';
import { TopicDetail } from './views/topic/detail';

export default  (
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}/>
            <Route path="/topic/:id" component={TopicDetail}/>
        </Route>
    </Router>
);