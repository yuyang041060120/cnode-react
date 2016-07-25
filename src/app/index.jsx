import ReactEngineClient from 'react-engine/lib/client';

import Routes from './routes.jsx';

const options = {
    routes: Routes
};

document.addEventListener('DOMContentLoaded', () => {
    ReactEngineClient.boot(options);
});