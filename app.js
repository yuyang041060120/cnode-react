import path from 'path';
import express from 'express';
import ReactEngine from 'react-engine';

import router from './lib/routes';
import routes from './src/app/routes';

const app = express();
const PORT = 4000;

const engine = ReactEngine.server.create({
    routes: routes,
    routesFilePath: path.join(__dirname, '/src/app/routes.jsx')
});

app.engine('.jsx', engine);
app.set('views', path.join(__dirname, '/src/app/views'));
app.set('view engine', 'jsx');
app.set('view', require('react-engine/lib/expressView'));

app.use(express.static(path.join(__dirname, '/src')));
app.use(router);
app.listen(PORT, function () {
    console.log('The server is running at port:' + PORT);
});