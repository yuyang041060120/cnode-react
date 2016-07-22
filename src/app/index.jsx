import ReactEngineClient from 'react-engine/lib/client';

import Routes from './routes.jsx';

const options = {
    routes: Routes,
    viewResolver: function (viewName) {
        return require('./views/' + viewName);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    ReactEngineClient.boot(options);
});