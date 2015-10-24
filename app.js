import express        from 'express';
import bodyParser     from 'body-parser';
import methodOverride from 'method-override';
import cookieParser   from 'cookie-parser';
import router         from 'express-mapping';
import session        from 'express-session';
import renderer       from 'react-engine';
import filter         from './lib/filter';

const app = express();
const PORT = 4000;

const engine = renderer.server.create({
    reactRoutes: `${__dirname}/component/routes.jsx`
});

app.engine('.jsx', engine);
app.set('views', `${__dirname}/component/views`);
app.set('view engine', 'jsx');
app.set('view', renderer.expressView);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride());
app.use(cookieParser());
app.use(express.static(`${__dirname}/public`));
app.use(filter);
app.use(router('routes'));

app.listen(PORT, function () {
    console.log('The server is running at port:' + PORT);
});
