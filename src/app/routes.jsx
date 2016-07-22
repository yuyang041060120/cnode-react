import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Layout } from './views/layouts/default.jsx';
import { Home } from './views/home';
import { Topic } from './views/topic';

export default  (
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}/>
            <Route path="/topic" component={Topic}/>
        </Route>
    </Router>
);